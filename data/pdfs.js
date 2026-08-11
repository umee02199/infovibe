/* InfoVibe — Seed PDF / Document library
   Client-side CMS merges this with localStorage uploads.
   NOTE: seed PDFs reference hosted files under assets/docs/. For a real
   deploy, drop the PDF there and set path. dataUrl works for tiny files. */
window.INFOVIBE = window.INFOVIBE || {};
window.INFOVIBE.PDFS = [
  {
    id: "pdf-cyber-hygiene-checklist",
    title: "Cyber Hygiene Checklist (1-Page)",
    description: "A printable one-page checklist covering passwords, updates, backups and phishing awareness.",
    category: "cyber",
    author: "InfoVibe Desk",
    uploadDate: "2026-08-06",
    sizeLabel: "PDF · 1 page",
    path: "assets/docs/cyber-hygiene-checklist.pdf",
    thumbnail: "🛡️"
  },
  {
    id: "pdf-ai-prompt-cookbook",
    title: "AI Prompt Cookbook",
    description: "20 copy-paste prompt templates for writing, research, coding and brainstorming with any LLM.",
    category: "ai",
    author: "InfoVibe Desk",
    uploadDate: "2026-08-08",
    sizeLabel: "PDF · 12 pages",
    path: "assets/docs/ai-prompt-cookbook.pdf",
    thumbnail: "🤖"
  },
  {
    id: "pdf-web-perf-guide",
    title: "Web Performance Field Guide",
    description: "Practical steps to make any site faster: images, fonts, scripts, caching and Core Web Vitals.",
    category: "tech",
    author: "InfoVibe Desk",
    uploadDate: "2026-08-09",
    sizeLabel: "PDF · 9 pages",
    path: "assets/docs/web-perf-guide.pdf",
    thumbnail: "⚡"
  }
];
