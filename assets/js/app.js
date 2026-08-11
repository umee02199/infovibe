/* ============================================================
   InfoVibe — Core App JS
   Handles: theme toggle, Google Translate widget, WhatsApp button,
   localStorage auth (DEMO), comments (localStorage), shared UI.
   ============================================================ */

const IV = {
  whatsapp: "923266291140", // Pakistan code 92, no leading 0
  contactEmail: "umee02199@gmail.com",
  siteName: "InfoVibe",
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

/* ---------- Auth (DEMO — localStorage only) ---------- */
const IV_AUTH_KEY = "iv_users";
const IV_SESS_KEY = "iv_session";

function ivGetUsers() { try { return JSON.parse(localStorage.getItem(IV_AUTH_KEY)) || {}; } catch { return {}; } }
function ivSaveUsers(u) { localStorage.setItem(IV_AUTH_KEY, JSON.stringify(u)); }
function ivGetSession() { try { return JSON.parse(localStorage.getItem(IV_SESS_KEY)) || null; } catch { return null; } }
function ivSetSession(s) { localStorage.setItem(IV_SESS_KEY, JSON.stringify(s)); }
function ivLogout() { localStorage.removeItem(IV_SESS_KEY); ivToast("Logged out"); location.reload(); }

function ivSignup(name, email, pass) {
  const users = ivGetUsers();
  if (users[email]) return { ok: false, msg: "Account already exists. Please log in." };
  if (pass.length < 6) return { ok: false, msg: "Password must be at least 6 characters." };
  users[email] = { name, email, pass, joined: new Date().toISOString().slice(0, 10) };
  ivSaveUsers(users);
  ivSetSession({ name, email });
  return { ok: true, msg: "Account created! Welcome to " + IV.siteName + "." };
}
function ivLogin(email, pass) {
  const users = ivGetUsers();
  const u = users[email];
  if (!u || u.pass !== pass) return { ok: false, msg: "Invalid email or password." };
  ivSetSession({ name: u.name, email: u.email });
  return { ok: true, msg: "Welcome back, " + u.name + "!" };
}
function ivUpdateProfile(name, bio) {
  const sess = ivGetSession(); if (!sess) return;
  const users = ivGetUsers();
  if (users[sess.email]) { users[sess.email].name = name; users[sess.email].bio = bio; ivSaveUsers(users); }
  ivSetSession({ name, email: sess.email });
}

/* Update nav based on session */
function ivRenderAuthNav() {
  const sess = ivGetSession();
  const slot = document.querySelector("[data-auth-nav]");
  if (!slot) return;
  if (sess) {
    slot.innerHTML = `<a class="btn btn-ghost" href="profile.html">👤 ${sess.name.split(" ")[0]}</a>
      <button class="btn btn-ghost" onclick="ivLogout()">Logout</button>`;
  } else {
    slot.innerHTML = `<a class="btn btn-ghost" href="login.html">Login</a>
      <a class="btn btn-primary" href="signup.html">Sign Up</a>`;
  }
}

/* ---------- Comments (localStorage) ---------- */
function ivCommentKey(articleId) { return "iv_comments_" + articleId; }
function ivGetComments(articleId) { try { return JSON.parse(localStorage.getItem(ivCommentKey(articleId))) || []; } catch { return []; } }
function ivAddComment(articleId, name, text) {
  const list = ivGetComments(articleId);
  list.push({ name, text, date: new Date().toISOString().slice(0, 10) });
  localStorage.setItem(ivCommentKey(articleId), JSON.stringify(list));
}
function ivRenderComments(articleId) {
  const wrap = document.getElementById("comments-list");
  if (!wrap) return;
  const list = ivGetComments(articleId);
  if (!list.length) { wrap.innerHTML = `<p class="empty">No comments yet. Be the first!</p>`; return; }
  wrap.innerHTML = list.map(c => `
    <div class="comment-item">
      <div class="c-head"><b>${esc(c.name)}</b><span>${c.date}</span></div>
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
