export interface WicsEvent {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  time: string;
  location: string;
  collaborators: string;
  description: string;
  type: "upcoming" | "past";
  category: "workshop" | "panel" | "social" | "hackathon" | "conference";
  /** Optional external link */
  link?: string;
}

export const events: WicsEvent[] = [
  // ── Upcoming ──────────────────────────────────────
  {
    id: "wics-welcome-back-event",
    title: "WiCS Welcome Back Event",
    date: "Tuesday, September 29, 2026",
    isoDate: "2026-09-29",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Kick off the semester with WiCS and meet other students interested in tech! Join us for a casual welcome-back event where you can learn more about WiCS, meet the E-board and other members, and hear about what we have planned for the semester. We’ll also have bracelets and origami as a fun activity while everyone hangs out.",
    type: "upcoming",
    category: "social",
  },
  {
    id: "resume-readiness-workshop",
    title: "Resume Readiness Workshop",
    date: "Thursday, October 1, 2026",
    isoDate: "2026-10-01",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS × GDG × CPDI × JC",
    description:
      "Get your resume career-ready with guidance from CPDI before internship and job applications pick up. We’ll cover what makes a strong technical resume, common mistakes to avoid, and ways to better present your skills and experiences. We’ll also share information about CPDI’s upcoming virtual career-prep programming for students who want additional support.",
    type: "upcoming",
    category: "workshop",
  },
  {
    id: "salesforce-behavioral-mock-interviews",
    title: "WiCS × Salesforce Maxines Behavioral Mock Interviews",
    date: "Friday, October 2, 2026",
    isoDate: "2026-10-02",
    time: "12:00–2:00 PM",
    location: "Online",
    collaborators: "WiCS × Salesforce Maxines",
    description:
      "Practice your interviewing skills one-on-one with volunteers from Salesforce! Students will participate in behavioral mock interviews based on their resumes and experiences, receive individualized feedback, and have the opportunity to ask questions about careers and interviewing. This is a chance to practice in a low-pressure environment before upcoming internship and job interviews.",
    type: "upcoming",
    category: "workshop",
  },
  {
    id: "wics-badminton",
    title: "WiCS Badminton",
    date: "Thursday, October 22, 2026",
    isoDate: "2026-10-22",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Take a break from classes and join WiCS for a casual badminton social! Whether you play regularly or have never picked up a racket before, everyone is welcome to come play, meet other members, and have some fun. No experience is necessary.",
    type: "upcoming",
    category: "social",
  },
  {
    id: "wics-paint-and-sip",
    title: "WiCS Paint & Sip",
    date: "Thursday, October 29, 2026",
    isoDate: "2026-10-29",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Take a break from midterms and spend club hours painting with WiCS! We’ll provide painting supplies along with non-alcoholic drinks and refreshments for a relaxed afternoon with other members. No painting experience is needed—come to paint, hang out, and make something to take home.",
    type: "upcoming",
    category: "social",
  },
  {
    id: "babys-first-leetcode",
    title: "Baby’s First LeetCode",
    date: "Thursday, November 5, 2026",
    isoDate: "2026-11-05",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Never tried LeetCode before or not sure where to start? This beginner-friendly workshop will introduce students to LeetCode, how coding interview problems are structured, and how to approach solving them without feeling overwhelmed. We’ll work through beginner problems together and introduce strategies you can continue using for technical interview practice.",
    type: "upcoming",
    category: "workshop",
  },
  {
    id: "babys-first-github",
    title: "Baby’s First GitHub",
    date: "Tuesday, November 10, 2026",
    isoDate: "2026-11-10",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "New to GitHub and not sure what repositories, commits, branches, or pull requests actually mean? This beginner-friendly workshop will walk through the basics of Git and GitHub and show how they are used for school, personal projects, and collaborative development. Students will get hands-on practice with the core workflow so they can feel more comfortable using GitHub in future projects.",
    type: "upcoming",
    category: "workshop",
  },
  {
    id: "babys-first-embedding",
    title: "Baby’s First Embedding",
    date: "Thursday, November 12, 2026",
    isoDate: "2026-11-12",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Get a beginner-friendly introduction to embeddings and how they are used in modern computing and AI applications. We’ll break down what embeddings represent, why they are useful, and explore simple examples of how they can be applied. No prior experience with embeddings or machine learning is required.",
    type: "upcoming",
    category: "workshop",
  },
  {
    id: "wics-panel-jobs-council-office-tour",
    title: "WiCS Panel | Jobs Council Office Tour",
    date: "Thursday, November 19, 2026",
    isoDate: "2026-11-19",
    time: "12:30–1:45 PM",
    location: "Online",
    collaborators: "WiCS × Jobs Council",
    description:
      "Join WiCS for a career-focused event featuring professionals working in technology. Students will have the opportunity to hear about different career paths, learn from professionals’ experiences entering and navigating the industry, and ask questions about careers in tech. Additional panel and Jobs Council details will be shared once confirmed.",
    type: "upcoming",
    category: "panel",
  },
  {
    id: "wics-game-night",
    title: "WiCS Game Night",
    date: "Thursday, December 3, 2026",
    isoDate: "2026-12-03",
    time: "12:30–1:45 PM",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Wrap up the semester with WiCS at our Game Night! Take a break before finals and join us for casual group games such as Gartic Phone, Skribbl, Among Us, and other party games. Come hang out with other members, play a few games, and celebrate making it through the semester.",
    type: "upcoming",
    category: "social",
  },

  // ── Past — Spring 2026 (most recent first) ───────
  {
    id: "bloomberg-info-session",
    title: "Bloomberg Information Session",
    date: "Thursday, September 10, 2026",
    isoDate: "2026-09-10",
    time: "12:30–2:00 PM",
    location: "NAC RM 1/116",
    collaborators: "Bloomberg",
    description:
      "Engineering, Computer Science, and Computer Engineering majors: join Bloomberg for an info session to explore career opportunities and learn more about life at Bloomberg. Features a day-in-the-life panel with Bloomberg engineers, networking & resume collection, reverse show & tell where students present their own projects to engineers, and sample mock interviews.",
    type: "past",
    category: "panel",
  },
  {
    id: "linkedin-workshop-free-headshots",
    title: "LinkedIn Workshop + Free Headshots",
    date: "Tuesday, April 28, 2026",
    isoDate: "2026-04-28",
    time: "TBD",
    location: "TBD",
    collaborators: "WiCS × CPDI",
    description:
      "A hands-on workshop focused on optimizing LinkedIn profiles and how to network effectively as a student. We'll cover crafting a strong headline, writing a compelling bio, adding projects and experiences, and connecting strategically. In partnership with CPDI, we'll also offer free professional headshots for members to use on LinkedIn.",
    type: "past",
    category: "workshop",
  },
  {
    id: "hla-embedded",
    title: "Intro to Embedded Coding (WiCS × HLA)",
    date: "April 23, 2026",
    isoDate: "2026-04-23",
    time: "TBD",
    location: "TBD",
    collaborators: "WiCS × HLA",
    description:
      "Co-hosted with HLA — learn how computer science is used in the avionics industry, with a hands-on intro to PlatformIO.",
    type: "past",
    category: "workshop",
  },
  {
    id: "strong-women-panel",
    title: "Strong Women in CS Panel",
    date: "April 16, 2026",
    isoDate: "2026-04-16",
    time: "TBD",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "A career panel featuring women in tech sharing their journeys, challenges, and advice for breaking into the field. Open to all majors and years.",
    type: "past",
    category: "panel",
  },
  {
    id: "badminton-social",
    title: "WiCS × Badminton Social",
    date: "March 31, 2026",
    isoDate: "2026-03-31",
    time: "TBD",
    location: "TBD",
    collaborators: "WiCS × Badminton Club",
    description:
      "Co-hosted with the Badminton Club — open play, casual matches, no experience required. A break from classes for everyone.",
    type: "past",
    category: "social",
  },
  {
    id: "synapse-conference",
    title: "Columbia Synapse: Crossroads in TBI",
    date: "March 27, 2026",
    isoDate: "2026-03-27",
    time: "TBD",
    location: "TBD",
    collaborators: "Columbia",
    description:
      "Columbia's student-organized Traumatic Brain Injury conference, exploring the intersection of patient-centered care and biomedical innovation.",
    type: "past",
    category: "conference",
  },
  {
    id: "leetcode-jeopardy",
    title: "LeetCode + CS Jeopardy",
    date: "March 19, 2026",
    isoDate: "2026-03-19",
    time: "TBD",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Interactive Jeopardy-style game covering algorithms, data structures, and LeetCode-style problems. Technical interview practice with friends.",
    type: "past",
    category: "workshop",
  },
  {
    id: "first-gbm",
    title: "First GBM + Bracelet Making",
    date: "March 12, 2026",
    isoDate: "2026-03-12",
    time: "TBD",
    location: "TBD",
    collaborators: "WiCS",
    description:
      "Our first General Body Meeting — a short intro to WiCS's mission, e-board, and semester plans, followed by friendship bracelet making.",
    type: "past",
    category: "social",
  },
  {
    id: "ctp-info",
    title: "CUNY Tech Prep Info Session (with GWC + ACM)",
    date: "March 5, 2026",
    isoDate: "2026-03-05",
    time: "TBD",
    location: "TBD",
    collaborators: "GWC × ACM",
    description:
      "Co-hosted with GWC and ACM — an info session and pitching workshop covering CUNY Tech Prep's free year-long full-stack and data science tracks.",
    type: "past",
    category: "workshop",
  },
];

export const upcomingEvents = events.filter((e) => e.type === "upcoming");
export const pastEvents = events.filter((e) => e.type === "past");
