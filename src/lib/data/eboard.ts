export interface EBoardMember {
  name: string;
  role: string;
  /** Path to photo in /public/eboard/ — e.g. "/eboard/diana.jpg" */
  photo: string;
  /** Optional: LinkedIn URL */
  linkedin?: string;
}

export interface Board {
  /** School year, e.g. "2025-2026" */
  year: string;
  members: EBoardMember[];
}

/**
 * E-Board rosters by school year. Listed chronologically (oldest → newest).
 * Add a new entry each spring when the next board is elected.
 */
export const boards: Board[] = [
  {
    year: "2025-2026",
    members: [
      { name: "Mahnur", role: "Co-President", photo: "/eboard/mahnur.jpg" },
      { name: "Jessica", role: "Co-President", photo: "/eboard/jessica.jpg" },
      { name: "Diana", role: "Vice President", photo: "/eboard/diana.jpg" },
      { name: "Shafia", role: "Treasurer", photo: "/eboard/shafia.jpg" },
      { name: "Alyssa", role: "Secretary", photo: "/eboard/alyssa.jpg" },
      { name: "Tanzina", role: "Event Coordinator", photo: "/eboard/tanzina.jpg" },
      { name: "Xanath", role: "Marketing Chair", photo: "/eboard/xanath.jpg" },
    ],
  },
  {
    year: "2026-2027",
    members: [],
  },
];
