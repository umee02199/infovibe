# 💡 InfoVibe — Modern 3D Article Publishing Platform

A 100% free, zero-budget, static article publishing website with:
3D hero (Three.js), dark/light themes, multi-language translator,
responsive design, articles hub with filters, single-article pages with
comments, user portal (demo), contact + booking, and policy pages.

## ✨ Features
- 🌐 Interactive 3D hero (Three.js, CDN)
- 🌙 Dark / Light theme toggle (persisted)
- 🌍 Google Translate widget (50+ languages, free)
- 📱 Fully responsive (mobile / tablet / desktop)
- 🔍 Search + category / tag / date filters
- 💬 Comments (localStorage demo)
- 👤 User portal: login / signup / profile (localStorage demo)
- 📞 WhatsApp floating button → `923266291140`
- 📅 Contact form + appointment booking (localStorage + WhatsApp)
- 📄 Terms of Service + Privacy Policy
- ✍️ 6 starter articles included
- 🛠️ **Admin panel** (`admin.html`) — create / edit / delete articles + image/PDF upload
- 🔐 Role-based admin access (see "Become an admin" below)
- 🖼️ Image / PDF upload with validation (jpg/png/pdf, max 5MB)
- 🔍 SEO: meta description, Open Graph, Twitter cards, JSON-LD, sitemap.xml, robots.txt, 404.html

## 🛠️ Admin panel — become an admin
The admin panel (`admin.html`) is **role-restricted**. Any signed-up user is `role: "user"`
by default and will see "⛔ Access denied". To make your account an admin:

1. Open `assets/js/app.js`.
2. Find the `IV` object and add your email to `adminEmails`:
   ```js
   const IV = {
     whatsapp: "923266291140",
     contactEmail: "umee02199@gmail.com",
     siteName: "InfoVibe",
     adminEmails: ["umee02199@gmail.com", "admin@infovibe.com"], // ← add YOUR email here
   };
   ```
3. Sign up / log in with that email. You now get the admin editor.
   (Existing accounts: after adding the email, just log out and log back in.)

### Publishing an article (no backend)
1. Log in as admin → open `admin.html`.
2. Fill the form, optionally upload an image/PDF (jpg/png/pdf, ≤5MB).
3. Click **Generate & Save** → copy the generated code snippet.
4. Paste it into `data/articles.js` (inside the `ARTICLES` array).
5. Re-deploy (push to GitHub). Articles are NOT auto-published — this is a static site.

### Upload behavior
- Small files (≤ ~1.5MB base64): the full `dataUrl` is inlined in the snippet (no truncation).
- Large files: the snippet suggests saving the file to `assets/img/` and using a
  relative `path` instead, to avoid bloating `localStorage` / `data/articles.js`.
- ⚠️ **Social-share preview limitation:** Uploaded cover images only appear in
  Facebook/WhatsApp/Twitter share previews when saved to `assets/img/` and referenced
  by `path`. Base64 `dataUrl` images fall back to the default `og-default.png` for
  social crawlers (they cannot fetch base64).

## 📁 Structure
```
InfoVibe/
├── index.html          Home (3D hero, featured, trending)
├── articles.html       Articles hub + filters
├── article.html        Single article (comments, share, media)
├── admin.html          Article admin (role-restricted)
├── about.html  contact.html
├── login.html  signup.html  profile.html
├── terms.html  privacy.html
├── 404.html            Custom 404 page (GitHub Pages)
├── sitemap.xml  robots.txt
├── assets/
│   ├── css/style.css   Design system
│   ├── img/og-default.png  OG image (1200×630)
│   └── js/  app.js | components.js | three-hero.js
├── data/articles.js    ← ALL articles + categories live here
└── docs/publish-guide.md
```

## 🚀 Deploy (GitHub Pages — 100% free)
1. Create a GitHub repo (e.g. `infovibe`).
2. Push this folder.
3. Repo Settings → Pages → Source: `main` branch, `/ (root)`.
4. Live at `https://<user>.github.io/<repo>/`.

See **docs/publish-guide.md** for how to add articles.

## ⚠️ Demo mode notes
This build has **no backend server**. Accounts, comments, bookings, and admin drafts are
stored locally in the visitor's browser (localStorage) only and are NOT shared
across devices or users. The WhatsApp/payment flows are demonstration links.
Passwords are stored as **SHA-256 hashes** (not plaintext) so a future real backend
can adopt them safely. Article body HTML is trusted-admin-only (not user-submitted).

## 🔧 Quick edits
- WhatsApp number → `IV.whatsapp` in `assets/js/app.js` (single source of truth)
- Contact email → `IV.contactEmail` in `assets/js/app.js`
- Admin emails → `IV.adminEmails` in `assets/js/app.js`
- Brand name → search `InfoVibe` across files
