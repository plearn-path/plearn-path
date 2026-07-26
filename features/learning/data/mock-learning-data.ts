export type LearningNode = { id: string; label: string; state: "mastered" | "current" | "locked"; prerequisites: string[] };
export type HeatmapCell = { student: string; concept: string; mastery: number };

export const learningPath: LearningNode[] = [
  { id: "integer-basics", label: "จำนวนเต็ม", state: "mastered", prerequisites: [] },
  { id: "addition", label: "การบวกและลบ", state: "current", prerequisites: ["integer-basics"] },
  { id: "multiplication", label: "การคูณและหาร", state: "locked", prerequisites: ["addition"] }
];

export const teacherHeatmap: HeatmapCell[] = [
  { student: "พีท", concept: "จำนวนเต็ม", mastery: 92 }, { student: "ฟ้า", concept: "จำนวนเต็ม", mastery: 76 },
  { student: "บีม", concept: "จำนวนเต็ม", mastery: 49 }, { student: "พีท", concept: "การบวกและลบ", mastery: 82 },
  { student: "ฟ้า", concept: "การบวกและลบ", mastery: 62 }, { student: "บีม", concept: "การบวกและลบ", mastery: 38 }
];

// TODO: Replace these static values with Teacher Dashboard API data.
export const progressTrend = [{ week: "W1", mastery: 42 }, { week: "W2", mastery: 53 }, { week: "W3", mastery: 61 }, { week: "W4", mastery: 72 }];
