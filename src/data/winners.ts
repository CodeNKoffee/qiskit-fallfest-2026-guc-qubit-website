export type Winner = {
  place: string;
  team: string;
  project: string;
  edition?: string;
};

/**
 * Previous winners, shown inside the Opening Session. Add entries here and
 * they appear automatically; while it is empty the panel says winners will
 * be showcased soon, so nothing is invented.
 */
export const previousWinners: Winner[] = [];
