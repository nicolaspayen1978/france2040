export type AnnouncedTest = {
  id: string;
  title: string;
  summary: string;
};

/** Empty when every announced épreuve has a published note. */
export const announcedTests: AnnouncedTest[] = [];
