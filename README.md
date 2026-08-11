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

## 📁 Structure
```
InfoVibe/
├── index.html          Home (3D hero, featured, trending)
├── articles.html       Articles hub + filters
├── article.html        Single article (comments, share)
├── about.html  contact.html
├── login.html  signup.html  profile.html
├── terms.html  privacy.html
├── assets/
│   ├── css/style.css   Design system
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
This build has **no backend server**. Accounts, comments, and bookings are
stored locally in the visitor's browser (localStorage) only and are NOT shared
across devices or users. The WhatsApp/payment flows are demonstration links.

## 🔧 Quick edits
- WhatsApp number → `IV.whatsapp` in `assets/js/app.js`
- Contact email → `IV.contactEmail` in `assets/js/app.js`
- Brand name → search `InfoVibe` across files
