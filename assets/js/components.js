/* ============================================================
   InfoVibe — Shared Components (navbar, footer, floating UI)
   Injects consistent chrome into every page. Call ivMountChrome()
   after the <div id="chrome"></div> placeholder exists, or it
   auto-mounts on DOMContentLoaded.
   ============================================================ */

const IV_CHROME = {
  nav: () => `
  <header class="nav">
    <div class="container nav-inner">
      <a href="index.html" class="logo">
        <span class="mark">iV</span><span><b>Info</b>Vibe</span>
      </a>
      <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="articles.html">Articles</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="admin.html" data-admin-link>Admin</a>
        <a href="terms.html">Terms</a>
        <a href="privacy.html">Privacy</a>
      </nav>
      <div class="nav-actions">
        <button class="icon-btn" data-theme-toggle title="Toggle theme">🌙</button>
        <div data-auth-nav></div>
        <button class="icon-btn hamburger" data-hamburger title="Menu">☰</button>
      </div>
    </div>
  </header>`,

  footer: () => `
  <footer class="site">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-col foot-about">
          <a href="index.html" class="logo"><span class="mark">iV</span><span><b>Info</b>Vibe</span></a>
          <p>A modern 3D article publishing platform sharing ideas on technology, security, design, and life — beautifully, for free.</p>
        </div>
        <div class="foot-col">
          <h4>Explore</h4>
          <a href="articles.html">All Articles</a>
          <a href="articles.html?cat=tech">Technology</a>
          <a href="articles.html?cat=cyber">Cyber Security</a>
          <a href="articles.html?cat=ai">AI & ML</a>
        </div>
        <div class="foot-col">
          <h4>Company</h4>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact</a>
          <a href="terms.html">Terms of Service</a>
          <a href="privacy.html">Privacy Policy</a>
        </div>
        <div class="foot-col">
          <h4>Account</h4>
          <a href="login.html">Login</a>
          <a href="signup.html">Sign Up</a>
          <a href="admin.html" data-admin-link>Admin</a>
          <a href="profile.html">My Profile</a>
        </div>
      </div>
      <div class="foot-bottom">
        © <span id="year"></span> InfoVibe. Built with ❤️ · 100% free hosting · Demo mode (no server).
      </div>
    </div>
  </footer>`,

  floating: () => `
  <a class="wa-float" data-wa target="_blank" rel="noopener" title="Chat on WhatsApp">
    <svg viewBox="0 0 32 32"><path d="M16.03 4C9.7 4 4.57 9.13 4.57 15.46c0 2.46.72 4.76 1.96 6.7L4.5 28.5l6.6-1.73a11.4 11.4 0 0 0 4.93 1.13h.02c6.32 0 11.46-5.13 11.46-11.45C27.5 9.13 22.35 4 16.03 4zm0 21.06h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.21-3.92 1.03 1.04-3.82-.23-.37A9.46 9.46 0 0 1 6.55 15.46c0-5.25 4.27-9.52 9.52-9.52 2.54 0 4.93 1 6.73 2.8a9.46 9.46 0 0 1 2.79 6.72c0 5.25-4.27 9.52-9.53 9.52zm5.22-7.12c-.29-.14-1.7-.84-1.96-.94-.27-.09-.46-.14-.65.14-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.14-1.21-.44-2.3-1.4-.85-.75-1.42-1.67-1.59-1.96-.16-.29-.02-.45.13-.58.13-.13.29-.33.43-.5.14-.16.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.02 2.78 1.17 2.97c.14.19 2.02 3.08 4.9 4.32.68.29 1.21.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z"/></svg>
  </a>
  <div class="util-fixed">
    <button class="icon-btn" data-lang-toggle title="Translate">🌐</button>
  </div>
  <div class="lang-panel">
    <h4>🌐 Translate this site</h4>
    <div id="google_translate_element"></div>
  </div>`,
};

function ivMountChrome() {
  const navSlot = document.querySelector("[data-chrome-nav]");
  const footSlot = document.querySelector("[data-chrome-footer]");
  const floatSlot = document.querySelector("[data-chrome-floating]");
  if (navSlot) navSlot.outerHTML = IV_CHROME.nav();
  if (footSlot) footSlot.outerHTML = IV_CHROME.footer();
  if (floatSlot) floatSlot.outerHTML = IV_CHROME.floating();
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ivMountChrome);
} else {
  ivMountChrome();
}
