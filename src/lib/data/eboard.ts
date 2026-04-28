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
      {
        name: "Mahnur",
        role: "Co-President",
        photo: "/eboard/mahnur.jpg",
        linkedin: "https://www.linkedin.com/in/mahnur-hossain-720b3227a/",
      },
      {
        name: "Jessica",
        role: "Co-President",
        photo: "/eboard/jessica.jpg",
        linkedin: "https://www.linkedin.com/in/jessica-r-64964b2a2/",
      },
      {
        name: "Diana",
        role: "Vice President",
        photo: "/eboard/diana.jpg",
        linkedin: "https://www.linkedin.com/in/dlucero0715/",
      },
      {
        name: "Shafia",
        role: "Treasurer",
        photo: "/eboard/shafia.jpg",
        linkedin: "https://www.linkedin.com/in/shafia-akey-93089b225/",
      },
      {
        name: "Alyssa",
        role: "Secretary",
        photo: "/eboard/alyssa.jpg",
        linkedin: "https://www.linkedin.com/in/alyssajodijohnson/",
      },
      {
        name: "Tanzina",
        role: "Event Coordinator",
        photo: "/eboard/tanzina.jpg",
        linkedin: "https://www.linkedin.com/in/tanzina-sumona/",
      },
      {
        name: "Xanath",
        role: "Marketing Chair",
        photo: "/eboard/xanath.jpg",
        linkedin: "https://www.linkedin.com/in/xanath-hernandez-807988318/",
      },
    ],
  },
  {
    year: "2026-2027",
    members: [],
  },
];
