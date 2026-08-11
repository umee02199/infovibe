/* ============================================================
   InfoVibe — Client-Side Content Store (CMS layer)
   ------------------------------------------------------------
   The site is 100% static (no backend). This module unifies:
     • Seed data  : data/articles.js, data/notes.js, data/pdfs.js
     • Local edits: iv_cms_* in localStorage (drafts, edits,
                   publishes, deletes, category/tag changes)
   It exposes a single read API used by every page, so the
   owner can manage content in-browser and export snippets to
   deploy permanently to the repo.
   ============================================================ */
(function () {
  const LS = {
    articles: "iv_cms_articles",
    notes: "iv_cms_notes",
    pdfs: "iv_cms_pdfs",
    cats: "iv_cms_categories",
    views: "iv_cms_views",
  };

  function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } }
  function write(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  // ---- Seed accessors (guarded) ----
  function seedArticles() { return (window.INFOVIBE && window.INFOVIBE.ARTICLES) || []; }
  function seedNotes() { return (window.INFOVIBE && window.INFOVIBE.NOTES) || []; }
  function seedPdfs() { return (window.INFOVIBE && window.INFOVIBE.PDFS) || []; }
  function seedCats() { return (window.INFOVIBE && window.INFOVIBE.CATEGORIES) || []; }

  // ---- Merge seed + local overrides ----
  // Local layer is an object keyed by id with: {__deleted, ...fields, status}
  function merge(seed, localMap, opts) {
    const out = [];
    const localKeys = new Set(Object.keys(localMap));
    // seed items (unless deleted locally)
    seed.forEach(item => {
      const over = localMap[item.id];
      if (over && over.__deleted) return;
      out.push(over ? Object.assign({}, item, over) : item);
    });
    // locally-added items (no seed counterpart)
    Object.keys(localMap).forEach(id => {
      const over = localMap[id];
      if (over.__deleted) return;
      const existsInSeed = seed.some(s => s.id === id);
      if (!existsInSeed) out.push(over);
    });
    return out;
  }

  // ---------- PUBLIC API ----------
  const Store = {
    // returns full merged article list (caller filters by status)
    getArticles() { return merge(seedArticles(), read(LS.articles, {})); },
    getNotes() { return merge(seedNotes(), read(LS.notes, {})); },
    getPdfs() { return merge(seedPdfs(), read(LS.pdfs, {})); },
    getCategories() {
      const base = seedCats().slice();
      const extra = read(LS.cats, []);
      // extra: [{id,name,emoji}] additions (no deletion of seed for simplicity)
      extra.forEach(c => { if (!base.find(x => x.id === c.id)) base.push(c); });
      return base;
    },

    getArticle(id) { return this.getArticles().find(a => a.id === id || a.slug === id) || null; },
    getNote(id) { return this.getNotes().find(n => n.id === id) || null; },
    getPdf(id) { return this.getPdfs().find(p => p.id === id) || null; },

    // published = not draft and not deleted
    getPublishedArticles() { return this.getArticles().filter(a => a.status !== "draft"); },
    getDrafts() { return this.getArticles().filter(a => a.status === "draft"); },

    // ---- CMS mutations (localStorage) ----
    _localMap(key) { return read(key, {}); },
    saveArticle(art) {
      const map = this._localMap(LS.articles);
      map[art.id] = Object.assign({}, art);
      write(LS.articles, map);
    },
    deleteArticle(id) {
      const map = this._localMap(LS.articles);
      const seed = seedArticles().find(a => a.id === id);
      if (seed) map[id] = Object.assign({}, seed, { __deleted: true });
      else delete map[id];
      write(LS.articles, map);
    },
    saveNote(note) { const m = this._localMap(LS.notes); m[note.id] = note; write(LS.notes, m); },
    deleteNote(id) { const m = this._localMap(LS.notes); const s = seedNotes().find(n => n.id === id); if (s) m[id] = { __deleted: true }; else delete m[id]; write(LS.notes, m); },
    savePdf(pdf) { const m = this._localMap(LS.pdfs); m[pdf.id] = pdf; write(LS.pdfs, m); },
    deletePdf(id) { const m = this._localMap(LS.pdfs); const s = seedPdfs().find(p => p.id === id); if (s) m[id] = { __deleted: true }; else delete m[id]; write(LS.pdfs, m); },
    addCategory(cat) { const list = read(LS.cats, []); if (!list.find(x => x.id === cat.id)) list.push(cat); write(LS.cats, list); },

    // ---- view tracking (for "popular") ----
    bumpView(id) {
      const v = read(LS.views, {});
      v[id] = (v[id] || 0) + 1; write(LS.views, v);
    },
    getViews(id) { return read(LS.views, {})[id] || 0; },
    popularArticles(n) {
      const v = read(LS.views, {});
      return this.getPublishedArticles().slice().sort((a, b) => (v[b.id] || 0) - (v[a.id] || 0)).slice(0, n || 5);
    },

    // ---- snippet generator for permanent deploy ----
    articleSnippet(a) {
      const mediaLine = a.media
        ? (a.media.dataUrl && a.media.dataUrl.length < 1.5 * 1024 * 1024)
          ? `\n    media: { kind: "${a.media.kind}", dataUrl: ${JSON.stringify(a.media.dataUrl)}, name: ${JSON.stringify(a.media.name)} },`
          : `\n    // media too large — save to ${a.media.path || ("assets/img/" + a.id)} and use:\n    media: { kind: "${a.media.kind}", path: ${JSON.stringify(a.media.path || ("assets/img/" + a.id))}, name: ${JSON.stringify(a.media.name)} },`
        : "";
      const refs = (a.references && a.references.length)
        ? `\n    references: ${JSON.stringify(a.references)},` : "";
      return `  {
    id: ${JSON.stringify(a.id)},
    slug: ${JSON.stringify(a.slug || a.id)},
    title: ${JSON.stringify(a.title)},
    excerpt: ${JSON.stringify(a.excerpt)},
    category: ${JSON.stringify(a.category)},
    tags: ${JSON.stringify(a.tags || [])},
    author: ${JSON.stringify(a.author)},
    date: ${JSON.stringify(a.date)},
    updated: ${JSON.stringify(a.updated || a.date)},
    readTime: ${a.readTime},
    emoji: ${JSON.stringify(a.emoji || "📄")},
    cover: ${JSON.stringify(a.cover || a.emoji || "📄")},
    featured: ${!!a.featured},
    trending: ${!!a.trending},
    status: ${JSON.stringify(a.status || "published")},${mediaLine}${refs}
    body: \`${String(a.body || "").replace(/`/g, "\\`")}\`
  },`;
    },

    // safe filename generator + duplicate handling
    safeFileName(name, used) {
      let base = (name || "file").toLowerCase().replace(/[^a-z0-9.\-_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
      if (!base) base = "file";
      if (used && used.includes(base)) {
        const dot = base.lastIndexOf(".");
        const stem = dot > 0 ? base.slice(0, dot) : base;
        const ext = dot > 0 ? base.slice(dot) : "";
        let i = 1;
        while (used.includes(stem + "-" + i + ext)) i++;
        base = stem + "-" + i + ext;
      }
      return base;
    },
  };

  window.InfoVibeStore = Store;
})();
