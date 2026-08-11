# 📖 InfoVibe — Publish New Articles Guide

InfoVibe is a **static site**: all articles live in one data file. To publish,
you edit that file and re-deploy. No database, no server.

---

## Option A — Edit the data file directly (simplest)

All articles are in **`data/articles.js`** in the `ARTICLES` array.

1. Open `data/articles.js`.
2. Copy an existing article object and paste a new one at the end of the array
   (before the closing `];`).
3. Fill in the fields:

```js
{
  id: "my-article-slug",        // unique, lowercase, dashes (used in URL)
  title: "Your Article Title",
  excerpt: "One-line summary shown on cards.",
  category: "tech",             // one of: tech, cyber, design, business, lifestyle, ai
  tags: ["tag1", "tag2"],       // for filtering
  author: "Your Name",
  date: "2026-08-11",           // YYYY-MM-DD
  readTime: 5,                  // minutes
  emoji: "🚀",                  // shown as cover art (no image files needed)
  cover: "🚀",
  featured: false,              // true = appears in Home "Featured"
  trending: false,              // true = appears in Home "Trending"
  body: `                       // HTML string, the article content
    <p>First paragraph…</p>
    <h2>A Subheading</h2>
    <p>More text. Use <b>bold</b>, <i>italic</i>, lists, blockquotes.</p>
    <blockquote>Quote here.</blockquote>
  `
}
```

4. Save the file.
5. Re-deploy (see below).

> ✅ Using an emoji as `cover` keeps the site 100% free — no image hosting needed.
> If you prefer real images later, put them in `assets/img/` and use
> `<img src="assets/img/name.jpg">` inside `body`.

---

## Option B — Use a visual editor (Decap CMS, free)

For a no-code editor at `yoursite.com/admin`:

1. Add Decap CMS to the repo (it reads/writes `data/articles.js` via GitHub).
2. This requires GitHub Pages deployment (already the chosen host).
3. Ask the builder to wire `admin/` + `config.yml` if you want this.

---

## Deploy / Update to GitHub Pages

After editing, push the changes:

```bash
cd InfoVibe
git add -A
git commit -m "Add new article: <title>"
git push
```

GitHub Pages rebuilds automatically (30–60s). Your new article is live.

---

## Quick reference

| Want to… | Do this |
|----------|---------|
| Add article | Add object to `ARTICLES` in `data/articles.js` |
| Show on Home featured | set `featured: true` |
| Show on Home trending | set `trending: true` |
| New category | add to `CATEGORIES` array + use its `id` |
| Change WhatsApp | edit `IV.whatsapp` in `assets/js/app.js` |
| Change contact email | edit `IV.contactEmail` in `assets/js/app.js` |
| Add real images | drop in `assets/img/`, reference in `body` |
