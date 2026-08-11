/* ============================================================
   InfoVibe — Data Layer
   All articles + categories live here. To publish a new article,
   add an object to the ARTICLES array (see docs/publish-guide.md).
   ============================================================ */

const CATEGORIES = [
  { id: "tech",       name: "Technology",   emoji: "💡" },
  { id: "cyber",      name: "Cyber Security", emoji: "🛡️" },
  { id: "design",     name: "Design",       emoji: "🎨" },
  { id: "business",   name: "Business",     emoji: "📈" },
  { id: "lifestyle",  name: "Lifestyle",    emoji: "🌿" },
  { id: "ai",         name: "AI & ML",      emoji: "🤖" },
];

const ARTICLES = [
  {
    id: "future-of-web-3d",
    title: "The Future of the Web Is 3D — And It's Already Here",
    excerpt: "How WebGL, Three.js and real-time rendering are turning flat pages into immersive experiences — and what it means for publishers.",
    category: "tech",
    tags: ["webgl", "threejs", "frontend"],
    author: "Amara Khan",
    date: "2026-08-08",
    readTime: 6,
    emoji: "🌐",
    cover: "🌐",
    featured: true,
    trending: true,
    body: `
      <p>For two decades the web has been a fundamentally flat place. Text, images, and video arranged in columns. But a quiet revolution is underway: the browser has become a real-time 3D engine.</p>
      <h2>Why 3D, why now?</h2>
      <p>Three factors converged. First, WebGL matured and became universally supported. Second, devices got powerful enough to render complex scenes at 60fps. Third, libraries like <b>Three.js</b> made 3D approachable for ordinary developers.</p>
      <blockquote>"The next billion users won't read the web — they'll walk through it."</blockquote>
      <h2>What publishers gain</h2>
      <ul class="bullets">
        <li>Higher engagement: interactive heroes hold attention 3x longer.</li>
        <li>Memorable branding: a 3D mark is harder to forget than a logo.</li>
        <li>New story formats: scroll-driven scenes, explorable data.</li>
      </ul>
      <p>The good news: you don't need a game studio. A single canvas, a gradient, and a rotating geometry can transform a homepage. InfoVibe itself is proof.</p>
      <h2>Getting started</h2>
      <p>Start small. Replace your hero image with a lightweight animated scene. Measure. Iterate. The web is becoming a place, not a page.</p>
    `
  },
  {
    id: "cyber-hygiene-2026",
    title: "Cyber Hygiene 2026: 7 Habits That Actually Protect You",
    excerpt: "Forget paranoia. These seven practical, low-effort habits block the vast majority of real-world attacks.",
    category: "cyber",
    tags: ["security", "privacy", "passwords"],
    author: "Umair R.",
    date: "2026-08-06",
    readTime: 8,
    emoji: "🛡️",
    cover: "🛡️",
    featured: true,
    trending: true,
    body: `
      <p>Most breaches aren't Hollywood hacks. They're stolen passwords, unpatched apps, and a careless click. Here are the habits that matter.</p>
      <h2>1. A password manager, not your memory</h2>
      <p>One strong master password + a generator. Done. Reusing passwords is the #1 cause of account takeover.</p>
      <h2>2. Turn on 2FA everywhere</h2>
      <p>Authenticator apps beat SMS. Even better: a hardware key for your email.</p>
      <h2>3. Patch promptly</h2>
      <p>Enable auto-updates on OS and browsers. Most exploits target known, fixable holes.</p>
      <h2>4. Phishing is a feeling test</h2>
      <p>Urgency + unknown sender + a link = pause. Hover before you click.</p>
      <h2>5–7. Backups, least-privilege, and a clean inbox</h2>
      <p>Keep encrypted backups. Grant apps the minimum access. Unsubscribe aggressively to shrink your attack surface.</p>
      <blockquote>Security isn't a product. It's a set of boring, repeatable habits.</blockquote>
    `
  },
  {
    id: "design-systems-that-scale",
    title: "Design Systems That Scale: Tokens Over Templates",
    excerpt: "Why design tokens are the secret to a consistent UI across ten pages — and how to build your own in a weekend.",
    category: "design",
    tags: ["css", "design-system", "ui"],
    author: "Lina Costa",
    date: "2026-08-04",
    readTime: 5,
    emoji: "🎨",
    cover: "🎨",
    featured: false,
    trending: true,
    body: `
      <p>Templates break. Tokens last. A design system built on tokens — colors, spacing, radii — stays consistent no matter how many pages you add.</p>
      <h2>The token trinity</h2>
      <ul class="bullets">
        <li><b>Color tokens</b> — brand, text, surface, border.</li>
        <li><b>Space tokens</b> — a spacing scale (4, 8, 12, 16…).</li>
        <li><b>Radius & shadow tokens</b> — the "feel" of your surfaces.</li>
      </ul>
      <p>InfoVibe's entire theme is ~30 CSS variables. Light and dark are just two token sets.</p>
      <h2>Dark mode for free</h2>
      <p>Flip the token set with <code>[data-theme="dark"]</code> and you get a complete dark theme without touching a single component.</p>
    `
  },
  {
    id: "ai-content-pipeline",
    title: "Building an AI Content Pipeline Without Losing Your Voice",
    excerpt: "AI can 10x your output — if you treat it as a co-author, not a replacement. A practical pipeline for solo creators.",
    category: "ai",
    tags: ["ai", "writing", "automation"],
    author: "Dev Patel",
    date: "2026-08-02",
    readTime: 7,
    emoji: "🤖",
    cover: "🤖",
    featured: true,
    trending: false,
    body: `
      <p>Used badly, AI writes beige. Used well, it's a tireless editor and brainstorm partner. The trick is process.</p>
      <h2>Stage 1 — Outline with intent</h2>
      <p>You set the thesis and structure. The model fills gaps, never the direction.</p>
      <h2>Stage 2 — Draft, then distill</h2>
      <p>Let it draft, then cut every sentence that sounds like a brochure. Keep your rhythm.</p>
      <h2>Stage 3 — Fact-check relentlessly</h2>
      <p>Models hallucinate confidently. Verify numbers, names, and claims.</p>
      <blockquote>Your voice is the one thing the model can't generate. Protect it.</blockquote>
    `
  },
  {
    id: "bootstrapping-zero-budget",
    title: "Bootstrapping a Tech Brand on a Zero Budget",
    excerpt: "No VC, no ads. How to build an audience and a product with nothing but skills, consistency, and free tools.",
    category: "business",
    tags: ["startup", "growth", "freemium"],
    author: "Sara Mensah",
    date: "2026-07-30",
    readTime: 6,
    emoji: "📈",
    cover: "📈",
    featured: false,
    trending: false,
    body: `
      <p>Capital is overrated. The cheapest, most durable growth engine is still a useful thing made consistently and given away.</p>
      <h2>Free tools, serious output</h2>
      <ul class="bullets">
        <li>GitHub Pages + Netlify for hosting.</li>
        <li>Decap CMS for no-code editing.</li>
        <li>Open-source libraries for everything else.</li>
      </ul>
      <h2>Consistency beats spend</h2>
      <p>One good article a week, for a year, outperforms a $5k ad burst every time.</p>
    `
  },
  {
    id: "focus-lifestyle",
    title: "Deep Work in a Shallow World",
    excerpt: "Attention is the last scarce resource. A field guide to protecting it — drawn from neuroscience, not hustle culture.",
    category: "lifestyle",
    tags: ["focus", "productivity", "wellbeing"],
    author: "Noah Berg",
    date: "2026-07-27",
    readTime: 5,
    emoji: "🌿",
    cover: "🌿",
    featured: false,
    trending: true,
    body: `
      <p>Every notification is a tiny tax on your attention. Paid back, with interest, in lost focus.</p>
      <h2>The 90-minute block</h2>
      <p>One task, one timer, zero tabs. The brain loves a single clear target.</p>
      <h2>Environment design</h2>
      <p>Make distraction hard (phone in another room) and focus easy (one open doc).</p>
      <blockquote>You don't manage time. You manage attention. Time follows.</blockquote>
    `
  }
];

// Make available to other scripts
window.INFOVIBE = { CATEGORIES, ARTICLES };
