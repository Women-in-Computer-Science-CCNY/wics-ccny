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
    id: "linkedin-workshop",
    title: "LinkedIn Workshop + Free Headshots",
    date: "April 28, 2026",
    description:
      "A hands-on workshop on optimizing your LinkedIn — strong headlines, compelling bios, strategic networking. Free professional headshots provided.",
    type: "upcoming",
    category: "workshop",
  },
  {
    id: "cozy-movie-study",
    title: "Cozy Movie + Study Afternoon",
    date: "May 5, 2026",
    description:
      "End-of-semester wind down. Movie playing for anyone who wants to relax, plus quiet space to study before finals. Pizza and hot chocolate provided.",
    type: "upcoming",
    category: "social",
  },

  // ── Past — Spring 2026 (most recent first) ───────
  {
    id: "hla-embedded",
    title: "Intro to Embedded Coding (WiCS × HLA)",
    date: "April 23, 2026",
    description:
      "Co-hosted with HLA — learn how computer science is used in the avionics industry, with a hands-on intro to PlatformIO.",
    type: "past",
    category: "workshop",
  },
  {
    id: "strong-women-panel",
    title: "Strong Women in CS Panel",
    date: "April 16, 2026",
    description:
      "A career panel featuring women in tech sharing their journeys, challenges, and advice for breaking into the field. Open to all majors and years.",
    type: "past",
    category: "panel",
  },
  {
    id: "badminton-social",
    title: "WiCS × Badminton Social",
    date: "March 31, 2026",
    description:
      "Co-hosted with the Badminton Club — open play, casual matches, no experience required. A break from classes for everyone.",
    type: "past",
    category: "social",
  },
  {
    id: "synapse-conference",
    title: "Columbia Synapse: Crossroads in TBI",
    date: "March 27, 2026",
    description:
      "Columbia's student-organized Traumatic Brain Injury conference, exploring the intersection of patient-centered care and biomedical innovation.",
    type: "past",
    category: "conference",
  },
  {
    id: "leetcode-jeopardy",
    title: "LeetCode + CS Jeopardy",
    date: "March 19, 2026",
    description:
      "Interactive Jeopardy-style game covering algorithms, data structures, and LeetCode-style problems. Technical interview practice with friends.",
    type: "past",
    category: "workshop",
  },
  {
    id: "first-gbm",
    title: "First GBM + Bracelet Making",
    date: "March 12, 2026",
    description:
      "Our first General Body Meeting — a short intro to WiCS's mission, e-board, and semester plans, followed by friendship bracelet making.",
    type: "past",
    category: "social",
  },
  {
    id: "ctp-info",
    title: "CUNY Tech Prep Info Session (with GWC + ACM)",
    date: "March 5, 2026",
    description:
      "Co-hosted with GWC and ACM — an info session and pitching workshop covering CUNY Tech Prep's free year-long full-stack and data science tracks.",
    type: "past",
    category: "workshop",
  },
];

export const upcomingEvents = events.filter((e) => e.type === "upcoming");
export const pastEvents = events.filter((e) => e.type === "past");
