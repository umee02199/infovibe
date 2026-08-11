/* InfoVibe — Seed Notes (educational, short-form)
   Client-side CMS merges this with localStorage edits. */
window.INFOVIBE = window.INFOVIBE || {};
window.INFOVIBE.NOTES = [
  {
    id: "note-public-wifi",
    title: "Public Wi-Fi Safety Checklist",
    category: "cyber",
    author: "InfoVibe Desk",
    date: "2026-08-05",
    emoji: "🛡️",
    body: `<p>Before you connect to a public hotspot:</p>
      <ul class="bullets">
        <li>Use a VPN or your phone's hotspot instead of open Wi-Fi.</li>
        <li>Turn off auto-connect and file sharing.</li>
        <li>Only log into sites that show <code>https://</code> with a padlock.</li>
        <li>Prefer mobile data for banking or email.</li>
      </ul>
      <p>Short rule: if the network is free and open, assume someone is watching.</p>`
  },
  {
    id: "note-prompt-basics",
    title: "5 Prompt Patterns That Actually Work",
    category: "ai",
    author: "InfoVibe Desk",
    date: "2026-08-07",
    emoji: "🤖",
    body: `<p>Get better answers from any AI chatbot with these repeating patterns:</p>
      <ul class="bullets">
        <li><b>Role:</b> "Act as a senior editor…"</li>
        <li><b>Context:</b> "I'm writing for beginners who fear math."</li>
        <li><b>Format:</b> "Reply as a numbered checklist."</li>
        <li><b>Constraint:</b> "Under 120 words, no jargon."</li>
        <li><b>Example:</b> "Like this: …"</li>
      </ul>
      <p>Most bad outputs come from a missing one of these five.</p>`
  },
  {
    id: "note-clean-code",
    title: "What 'Readable Code' Really Means",
    category: "tech",
    author: "InfoVibe Desk",
    date: "2026-08-09",
    emoji: "💡",
    body: `<p>Readable code is not clever code. It is code a teammate understands in 30 seconds:</p>
      <ul class="bullets">
        <li>Names say what, not how.</li>
        <li>Functions do one thing.</li>
        <li>Comments explain why, not what.</li>
        <li>Errors fail loudly and clearly.</li>
      </ul>
      <p>Future-you is the teammate you are writing for.</p>`
  },
  {
    id: "note-focus",
    title: "The 2-Minute Rule for Procrastination",
    category: "lifestyle",
    author: "InfoVibe Desk",
    date: "2026-08-10",
    emoji: "⏳",
    body: `<p>If a task takes less than two minutes, do it now. If it feels too big to start, agree to do only two minutes of it.</p>
      <p>Starting is the hard part; momentum does the rest. Most "I can't focus" is actually "I haven't started."</p>`
  }
];
