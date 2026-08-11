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
  },
  {
    id: "ai-vs-ai-cyber-battlefield",
    title: "AI vs AI: The New Cybersecurity Battlefield",
    excerpt: "Defenders and attackers are both deploying autonomous AI. We look at why the next wave of breaches will be machine-versus-machine — and what ordinary teams can do about it.",
    category: "cyber",
    tags: ["ai", "cybersecurity", "defense", "startups"],
    author: "InfoVibe Desk",
    date: "2026-08-11",
    readTime: 7,
    emoji: "🛡️",
    cover: "🛡️",
    featured: true,
    trending: true,
    body: `
      <p>Cybersecurity has always been a race between the people who break things and the people who defend them. In 2026 that race took a sharp turn: both sides are now handing the keyboard to software. The headline trend this month is simple to state and hard to prepare for — <b>attacks and defenses are increasingly autonomous, and they meet in the middle without a human in the loop.</b></p>

      <h2>Why this is happening now</h2>
      <p>Two forces collided. On the attack side, language models made it cheap to write convincing phishing, tailor malware to a target, and probe systems at scale. On the defense side, security vendors realized that the only way to respond at machine speed is with machine speed of their own. The result is a market rushing to build <b>AI that fights AI</b>.</p>

      <ul class="bullets">
        <li>Investors are backing specialized startups: one new entrant just closed a large seed round to build models whose only job is spotting AI-generated attacks.</li>
        <li>Established players are shipping "autonomous defense" features that investigate alerts, draft responses, and isolate compromised hosts without waiting for a click.</li>
        <li>Even frontier labs are publishing defensive tooling, signaling that protecting infrastructure is now a shared competitive front.</li>
      </ul>

      <h2>What "AI vs AI" actually looks like</h2>
      <p>Picture a login page. An attacker's model generates thousands of personalized messages trying to trick one employee. A defender's model watches the traffic, scores each attempt, and silently blocks the ones that look synthetic. The human security engineer only hears about it if something slips through. The battle is won or lost in milliseconds.</p>

      <blockquote>"The window to respond used to be hours. Now it is the time it takes two models to finish a sentence."</blockquote>

      <h2>Three things small teams should do</h2>
      <p>You do not need a research lab to be resilient. The basics matter more than ever because automation punishes sloppiness instantly:</p>

      <ul class="bullets">
        <li><b>Turn on the boring defenses.</b> MFA everywhere, patched software, and least-privilege accounts block the majority of automated attempts.</li>
        <li><b>Assume the email is synthetic.</b> Train staff to verify requests that feel odd through a second channel — models are very good at sounding normal.</li>
        <li><b>Watch your own logs.</b> Cheap anomaly detection beats an expensive product you never configure.</li>
      </ul>

      <h2>The honest takeaway</h2>
      <p>Autonomous offense will keep getting cheaper. The teams that survive are not the ones with the biggest model — they are the ones with the smallest attack surface and the fastest, simplest response. Defense in this new era is less about a magic box and more about refusing to be an easy target at machine scale.</p>

      <p><i>InfoVibe analysis. Figures referenced reflect publicly reported industry moves in August 2026; this article is original commentary, not a reproduction of any single source.</i></p>
    `,
  },

  {
    id: "ai-trillion-club-nvidia-bet",
    title: "The $3 Trillion AI Club and Nvidia's $500B Bet",
    excerpt: "AI infrastructure is now a trillion-dollar line item. We break down what Nvidia's massive financing plan tells us about where the industry is headed.",
    category: "business",
    tags: ["ai", "markets", "hardware", "nvidia"],
    author: "InfoVibe Desk",
    date: "2026-08-11",
    readTime: 6,
    emoji: "📈",
    cover: "📈",
    featured: false,
    trending: true,
    body: `
      <p>Every boom has a scoreboard, and in the AI era the scoreboard is market capitalization. This month the conversation shifted from "which AI app will win" to "who owns the rails" — and the rails are expensive. One chipmaker's plan to line up roughly half a trillion dollars in financing is the clearest signal yet that builders expect demand to stay enormous for years.</p>

      <h2>Why chips are the bottleneck</h2>
      <p>Training and serving large models is, at its core, a physics problem: you need extraordinary amounts of compute in the right places. That makes the companies that design and supply accelerators the gatekeepers of the whole industry. When one of them describes its processors as an "investable asset class," it is telling the market that silicon is now infrastructure like fiber or power plants.</p>

      <ul class="bullets">
        <li>Investors are hunting for the next members of the $3 trillion club among AI-adjacent stocks.</li>
        <li>Analysts openly debate whether the spending is sustainable or a bubble waiting to deflate.</li>
        <li>Enterprises are locking in capacity years ahead, betting that being compute-rich will decide who ships first.</li>
      </ul>

      <h2>Bubble or baseline?</h2>
      <p>Both sides have a point. History says rapid infrastructure build-outs often overshoot before settling. But the underlying use case — models embedded in search, coding, customer support, and design — is real and growing. The risk is not that AI disappears; it is that the bill arrives before the productivity does.</p>

      <blockquote>"We are not debating whether AI is useful. We are debating how long the receipt takes to come due."</blockquote>

      <h2>What it means for you</h2>
      <p>If you build products, the lesson is practical: <b>compute is a strategic cost, not a footnote.</b> Design for efficiency — smaller models, caching, and smart routing — because the price of brute force is now a board-level decision. If you invest, separate the companies that sell picks and shovels from the ones panning for gold; in most booms the suppliers are the steadier bet.</p>

      <p><i>InfoVibe analysis. Market figures reflect publicly reported August 2026 commentary; this is original editorial, not a reproduction of any single publication.</i></p>
    `,
  },

  {
    id: "open-vs-controlled-ai-startups",
    title: "Open vs Controlled AI: Why Some Startups Want Trainable, Non-Big-Tech Models",
    excerpt: "A new wave of founders is betting that the future of AI is models you can actually teach — and that don't answer to a handful of giant companies.",
    category: "ai",
    tags: ["ai", "open-source", "startups", "policy"],
    author: "InfoVibe Desk",
    date: "2026-08-11",
    readTime: 6,
    emoji: "🤖",
    cover: "🤖",
    featured: false,
    trending: false,
    body: `
      <p>The biggest AI models in the world live inside a small number of large companies. That concentration bothers a growing group of founders, and this month one of them described a blunt goal: build AI that is <b>trainable by its users and not controlled by a giant.</b> It is a technical ambition with a political edge.</p>

      <h2>The control problem</h2>
      <p>When a model is hosted and governed by one company, that company decides what it can say, what it costs, and what it is allowed to do. For many users — researchers, clinics, smaller businesses — that is a real limit. The counter-movement argues for models you can fine-tune on your own data, run where you choose, and modify without asking permission.</p>

      <ul class="bullets">
        <li>Classrooms are already adopting AI under new rules that favor transparency and local control.</li>
        <li>Founders pitch "teachable" systems as safer for sensitive work like health and law.</li>
        <li>Open releases let a wider community audit behavior instead of trusting a black box.</li>
      </ul>

      <h2>The trade-off nobody ignores</h2>
      <p>Openness is not free. A model anyone can modify is also one anyone can misuse, and smaller teams rarely match the safety investment of a large lab. The honest debate is not "open good, closed bad" but "who should hold the levers, and who watches them."</p>

      <blockquote>"The question is no longer can we build smart models. It is who gets to teach them, and who they answer to."</blockquote>

      <h2>Where this lands</h2>
      <p>Expect a split market: a few massive general models, and a long tail of specialized, adjustable ones owned by the people who use them. For the rest of us, that diversity is healthy — it means AI capability is not a single switch flipped by a handful of executives. The interesting startups of the next year will be the ones that make "teachable" actually easy.</p>

      <p><i>InfoVibe analysis. Themes reflect publicly reported August 2026 discussions; this is original commentary written for InfoVibe readers.</i></p>
    `,
  },
  {
    id: "passwordless-passkeys-end-of-passwords",
    title: "Passwordless Auth & Passkeys: Is This the End of Passwords?",
    excerpt: "Passkeys are moving from buzzword to default. We explain what they are, why they beat passwords, and what ordinary users and teams should do right now.",
    category: "cyber",
    tags: ["passwordless", "passkeys", "authentication", "security", "fido"],
    author: "InfoVibe Desk",
    date: "2026-08-11",
    readTime: 6,
    emoji: "🔑",
    cover: "🔑",
    featured: false,
    trending: false,
    body: `
      <p>For thirty years the password has been the front door of the internet — and the weakest one. That is finally changing. <b>Passkeys</b>, built on the same cryptography behind hardware security keys, are now shipping as the default sign-in option across major platforms. The question is no longer "will passwords die" but "how fast."</p>

      <h2>What a passkey actually is</h2>
      <p>A passkey is a key pair stored on your device. The website keeps only the public half. When you sign in, your device proves it holds the private half using a fingerprint, face, or PIN — and the secret never leaves your phone or laptop. There is nothing for a phishing email to steal, because there is no password to type.</p>

      <ul class="bullets">
        <li><b>No shared secret.</b> The server never stores the part that proves who you are.</li>
        <li><b>Phishing-resistant.</b> A passkey is bound to the real site, so a fake login page gets nothing usable.</li>
        <li><b>Easy to use.</b> Unlock is usually a biometrics tap, not a 14-character string you forgot.</li>
      </ul>

      <h2>Why this matters now</h2>
      <p>The biggest breaches of the past decade almost all traced back to passwords — reused, weak, or leaked. Passkeys remove that entire failure class in one move. For teams, that means fewer reset tickets and a smaller blast radius when one account is targeted.</p>

      <blockquote>"The best password is the one you never have to remember — or type."</blockquote>

      <h2>What you should do</h2>
      <p>You do not need to wait for a mandate. Start today:</p>

      <ul class="bullets">
        <li>Turn on passkeys wherever they are offered (email, social, developer accounts).</li>
        <li>Keep your device's screen lock strong — it is now the master key.</li>
        <li>Keep one authenticator app as backup until every important account supports passkeys.</li>
      </ul>

      <h2>The honest catch</h2>
      <p>Passkeys live on a device. Lose the device without a backup and recovery gets awkward. Sync (via your account's secure backup) solves most of this, but the habit of "one device, one key" takes adjusting. Still, the direction is clear: the password's days are numbered.</p>

      <p><i>InfoVibe explainer. Concepts reflect widely documented industry standards (FIDO/WebAuthn); this is original educational writing, not a reproduction of any source.</i></p>
    `,
  },

  {
    id: "ai-agents-explained",
    title: "AI Agents Explained: When Software Starts Doing the Work Itself",
    excerpt: "Agents are the next step after chatbots — systems that plan, use tools, and act. Here is what they are, where they help, and where to be careful.",
    category: "ai",
    tags: ["ai agents", "automation", "llm", "productivity", "tools"],
    author: "InfoVibe Desk",
    date: "2026-08-11",
    readTime: 7,
    emoji: "🤖",
    cover: "🤖",
    featured: false,
    trending: true,
    body: `
      <p>Chatbots answer. <b>Agents</b> act. That one-word difference is the story of this year in AI. An agent is a system that takes a goal, breaks it into steps, calls tools (search, code, calendars, APIs), checks the result, and loops until the job is done. The model is no longer just talking — it is working.</p>

      <h2>From prompt to plan</h2>
      <p>A chatbot waits for your next message. An agent, given "book the cheapest flight that fits my calendar," will look at the dates, compare options, check conflicts, and report back. The human sets the aim; the software runs the errands. This is why agents feel less like a search box and more like a junior colleague.</p>

      <ul class="bullets">
        <li><b>Planning:</b> the agent writes its own to-do list from your request.</li>
        <li><b>Tools:</b> it can read the web, run code, and call services — not just generate text.</li>
        <li><b>Looping:</b> it observes the outcome and retries when something fails.</li>
      </ul>

      <h2>Where agents genuinely help</h2>
      <p>The wins are repetitive, multi-step, and rules-based: sorting inboxes, drafting reports from scattered data, running routine code checks, scheduling across time zones. Anything a careful intern could do in an afternoon is fair game.</p>

      <blockquote>"The chatbot was a librarian. The agent is the librarian who also fetches, files, and follows up."</blockquote>

      <h2>Where to be careful</h2>
      <p>Autonomy is a double edge. An agent that can send emails or spend money needs guardrails: clear limits, a human in the loop for big actions, and logs you can audit. The failure mode is not malice — it is a confident agent doing the wrong thing efficiently.</p>

      <ul class="bullets">
        <li>Keep high-impact actions (payments, deletes, public posts) behind approval.</li>
        <li>Start agents on read-only or sandbox tasks before granting real access.</li>
        <li>Review the trail; treat the first runs as training, not production.</li>
      </ul>

      <h2>The takeaway</h2>
      <p>Agents are not magic and not hype — they are the natural next layer: language models with hands. The teams that benefit are the ones who hand them narrow, well-bounded jobs and watch the first hundred runs closely. Done that way, agents trade grunt work for judgment, which is exactly the trade we want.</p>

      <p><i>InfoVibe analysis. Themes reflect widely reported 2026 industry discussion; this is original commentary written for InfoVibe readers.</i></p>
    `,
  },
];

// Make available to other scripts
window.INFOVIBE = { CATEGORIES, ARTICLES };
