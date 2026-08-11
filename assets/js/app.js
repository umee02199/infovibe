/* ============================================================
   InfoVibe — Core App JS
   Handles: theme toggle, Google Translate widget, WhatsApp button,
   localStorage auth (DEMO), comments (localStorage), shared UI.
   ============================================================ */

const IV = {
  whatsapp: "923266291140", // Pakistan code 92, no leading 0 — single source of truth
  contactEmail: "umee02199@gmail.com",
  siteName: "InfoVibe",
  // Emails that get admin role. Add your own email here to become an admin.
  adminEmails: ["umee02199@gmail.com", "admin@infovibe.com", "ggumair962@gmail.com"],
};

/* ---------- Toast ---------- */
function ivToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Theme ---------- */
function ivInitTheme() {
  const saved = localStorage.getItem("iv_theme");
  const sys = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (sys ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  // NOTE: click handling is done via document-level delegation (see bottom of file)
  // so it survives the nav re-mount performed by components.js.
}
function ivToggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("iv_theme", next);
  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) btn.textContent = next === "dark" ? "☀️" : "🌙";
}

/* ---------- Google Translate (free, no key) ---------- */
window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement({
    pageLanguage: "en",
    includedLanguages: "en,es,fr,de,ur,ar,zh-CN,hi,tr,fa,id,it,pt",
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, "google_translate_element");
};
function ivInitLang() {
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "//translate.google.com/translate_relative/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(s);
  const toggle = document.querySelector("[data-lang-toggle]");
  const panel = document.querySelector(".lang-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", () => panel.classList.toggle("open"));
  }
}

/* ---------- WhatsApp ---------- */
function ivInitWhatsApp() {
  const a = document.querySelector("[data-wa]");
  if (a) a.href = `https://wa.me/${IV.whatsapp}?text=${encodeURIComponent("Hi " + IV.siteName + "! I'd like to connect.")}`;
}

/* ---------- Mobile nav ---------- */
function ivInitNav() {
  const ham = document.querySelector("[data-hamburger]");
  const links = document.querySelector(".nav-links");
  if (ham && links) ham.addEventListener("click", () => links.classList.toggle("open"));
}

/* ---------- Auth (DEMO — localStorage only) ----------
   NOTE: plaintext passwords are unsafe even for a demo. We store a
   salted SHA-256 hash instead so that if this ever moves to a real
   backend, no raw passwords ever touch storage. Compatible with
   existing localStorage keys (iv_users / iv_session). */
async function ivHash(pass) {
  try {
    const enc = new TextEncoder().encode("infovibe::" + pass);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  } catch (e) {
    // fallback (non-secure context): simple obfuscation, NOT secure
    return "plain:" + pass;
  }
}

const IV_AUTH_KEY = "iv_users";
const IV_SESS_KEY = "iv_session";

/* Safe localStorage helpers — never throw on quota/parse errors (#5) */
function ivLSGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function ivLSSet(key, val) {
  try { localStorage.setItem(key, val); return true; }
  catch (e) {
    if (e && (e.name === "QuotaExceededError" || e.code === 22)) {
      ivToast("⚠️ Storage full — image too big or too many items. Use a smaller file or the path-based upload method.");
    } else {
      ivToast("⚠️ Could not save locally (storage blocked).");
    }
    return false;
  }
}
function ivLSRemove(key) { try { localStorage.removeItem(key); } catch {} }

function ivGetUsers() { try { return JSON.parse(ivLSGet(IV_AUTH_KEY)) || {}; } catch { return {}; } }
function ivSaveUsers(u) { ivLSSet(IV_AUTH_KEY, JSON.stringify(u)); }
function ivGetSession() { try { return JSON.parse(ivLSGet(IV_SESS_KEY)) || null; } catch { return null; } }
function ivSetSession(s) { ivLSSet(IV_SESS_KEY, JSON.stringify(s)); }
function ivLogout() { ivLSRemove(IV_SESS_KEY); ivToast("Logged out"); location.reload(); }

/* Returns true if the logged-in (or given) user is an admin (#3) */
function ivIsAdmin(email) {
  const e = (email || ivGetSession()?.email || "").toLowerCase();
  return IV.adminEmails.map(x => x.toLowerCase()).includes(e);
}

async function ivSignup(name, email, pass) {
  const users = ivGetUsers();
  if (users[email]) return { ok: false, msg: "Account already exists. Please log in." };
  if (pass.length < 6) return { ok: false, msg: "Password must be at least 6 characters." };
  const hash = await ivHash(pass);
  // role: admin if email is pre-approved, otherwise regular user (#3)
  const role = ivIsAdmin(email) ? "admin" : "user";
  users[email] = { name, email, pass: hash, role, joined: new Date().toISOString().slice(0, 10) };
  ivSaveUsers(users);
  ivSetSession({ name, email, role });
  return { ok: true, msg: "Account created! Welcome to " + IV.siteName + "." };
}
async function ivLogin(email, pass) {
  const users = ivGetUsers();
  const u = users[email];
  if (!u) return { ok: false, msg: "Invalid email or password." };
  const hash = await ivHash(pass);
  if (u.pass !== hash) return { ok: false, msg: "Invalid email or password." };
  ivSetSession({ name: u.name, email: u.email, role: u.role || "user" });
  return { ok: true, msg: "Welcome back, " + u.name + "!" };
}
function ivUpdateProfile(name, bio) {
  const sess = ivGetSession(); if (!sess) return;
  const users = ivGetUsers();
  if (users[sess.email]) { users[sess.email].name = name; users[sess.email].bio = bio; ivSaveUsers(users); }
  ivSetSession({ name, email: sess.email, role: sess.role || "user" });
}

/* Update nav based on session */
function ivRenderAuthNav() {
  const sess = ivGetSession();
  const slot = document.querySelector("[data-auth-nav]");
  if (!slot) return;
  if (sess) {
    slot.innerHTML = `<a class="btn btn-ghost" href="profile.html">👤 ${esc(sess.name.split(" ")[0])}</a>
      <button class="btn btn-ghost" onclick="ivLogout()">Logout</button>`;
  } else {
    slot.innerHTML = `<a class="btn btn-ghost" href="login.html">Login</a>
      <a class="btn btn-primary" href="signup.html">Sign Up</a>`;
  }
  // Admin link only visible to admins (#3)
  const adminLinks = document.querySelectorAll("[data-admin-link]");
  adminLinks.forEach(el => { el.style.display = ivIsAdmin(sess && sess.email) ? "" : "none"; });
}

/* ---------- Comments (localStorage) ---------- */
function ivCommentKey(articleId) { return "iv_comments_" + articleId; }
function ivGetComments(articleId) { try { return JSON.parse(ivLSGet(ivCommentKey(articleId))) || []; } catch { return []; } }
function ivAddComment(articleId, name, text) {
  const list = ivGetComments(articleId);
  list.push({ name, text, date: new Date().toISOString().slice(0, 10) });
  ivLSSet(ivCommentKey(articleId), JSON.stringify(list));
}
function ivRenderComments(articleId) {
  const wrap = document.getElementById("comments-list");
  if (!wrap) return;
  const list = ivGetComments(articleId);
  // NOTE: comment name/text are escaped via esc() — never rendered as raw HTML (#4 XSS)
  if (!list.length) { wrap.innerHTML = `<p class="empty">No comments yet. Be the first!</p>`; return; }
  wrap.innerHTML = list.map(c => `
    <div class="comment-item">
      <div class="c-head"><b>${esc(c.name)}</b><span>${esc(c.date)}</span></div>
      <div>${esc(c.text)}</div>
    </div>`).join("");
}
function esc(s) { return String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])); }

/* ---------- Helpers ---------- */
function ivCat(id) { const c = (window.INFOVIBE?.CATEGORIES || []).find(x => x.id === id); return c || { name: id, emoji: "📄" }; }
function ivFmtDate(d) { try { return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }); } catch { return d; } }

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  ivInitTheme();
  ivInitLang();
  ivInitWhatsApp();
  ivInitNav();
  ivRenderAuthNav();
});

/* Theme toggle via delegation (survives nav re-mount by components.js) */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-theme-toggle]");
  if (t) { e.preventDefault(); ivToggleTheme(); }
});
