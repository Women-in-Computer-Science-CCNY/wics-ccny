export interface WicsEvent {
  id: string;
  title: string;
  date: string; // ISO string or human-readable
  description: string;
  type: "upcoming" | "past";
  category: "workshop" | "panel" | "social" | "hackathon" | "conference";
  /** Optional external link */
  link?: string;
}

export const events: WicsEvent[] = [
  // ── Upcoming ──────────────────────────────────────
  {
    id: "gbm-bracelet",
    title: "First GBM: Bracelet Making",
    date: "Coming Soon",
    description:
      "Kick off the semester with our first General Body Meeting! Come craft bracelets, meet the e-board, and vibe with the community.",
    type: "upcoming",
    category: "social",
  },
  {
    id: "strong-women-panel",
    title: "Strong Women in CS Panel",
    date: "Spring 2026",
    description:
      "Hear from women who've built careers at leading tech companies. Get real advice on navigating the industry.",
    type: "upcoming",
    category: "panel",
  },
  {
    id: "linkedin-workshop",
    title: "LinkedIn Profile Workshop",
    date: "Spring 2026",
    description:
      "Polish your professional presence. We'll walk through building a profile that actually gets you noticed.",
    type: "upcoming",
    category: "workshop",
  },
  {
    id: "columbia-tbi",
    title: "Columbia TBI Tech Conference",
    date: "Spring 2026",
    description:
      "Join us at the Columbia TBI Tech Conference — a great opportunity to network and learn from industry leaders.",
    type: "upcoming",
    category: "conference",
  },
  {
    id: "beaverhacks",
    title: "BeaverHacks Hackathon",
    date: "Spring 2026",
    description:
      "Our signature 2-day hackathon co-hosted with ACM, SWE, and GWC. All majors welcome — no prior experience needed. Prizes, pizza, and workshops.",
    type: "upcoming",
    category: "hackathon",
  },
  // ── Past ──────────────────────────────────────────
  {
    id: "engineering-olympics",
    title: "Engineering Olympics at CCNY",
    date: "2025",
    description:
      "A fun, competitive engineering challenge event held on campus.",
    type: "past",
    category: "social",
  },
  {
    id: "quantum-workshop",
    title: "Quantum Computing Workshop",
    date: "2025",
    description:
      "From BITS to QUBITS and Beyond — an intro to quantum computing concepts.",
    type: "past",
    category: "workshop",
  },
  {
    id: "tech-panel",
    title: "WiCS Tech Panel",
    date: "2025",
    description: "Featuring speakers from Amazon, Proof Trading, and MadHive.",
    type: "past",
    category: "panel",
  },
  {
    id: "mind-machines",
    title: "Mind + Machines Workshop",
    date: "2025",
    description: "A Philosophy × WiCS Club Collab exploring AI and ethics.",
    type: "past",
    category: "workshop",
  },
  {
    id: "figma-workshop",
    title: "Guided Figma Prototyping Workshop",
    date: "2024",
    description:
      "Hands-on prototyping session teaching students industry-standard design tools.",
    type: "past",
    category: "workshop",
  },
];

export const upcomingEvents = events.filter((e) => e.type === "upcoming");
export const pastEvents = events.filter((e) => e.type === "past");
