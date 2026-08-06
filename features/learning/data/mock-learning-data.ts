export type LearningNode = {
  id: string;
  label: string;
  state: "mastered" | "current" | "locked";
  prerequisites: string[];
};

export type HeatmapCell = {
  student: string;
  concept: string;
  mastery: number;
};

export const learningPath: LearningNode[] = [
  {
    id: "functions-basics",
    label: "พื้นฐานฟังก์ชัน",
    state: "mastered",
    prerequisites: []
  },
  {
    id: "linear-functions",
    label: "ฟังก์ชันเชิงเส้น",
    state: "current",
    prerequisites: ["functions-basics"]
  },
  {
    id: "quadratic-functions",
    label: "ฟังก์ชันกำลังสอง",
    state: "locked",
    prerequisites: ["linear-functions"]
  }
];

export const teacherHeatmap: HeatmapCell[] = [
  { student: "พีท", concept: "ฟังก์ชันเชิงเส้น", mastery: 92 },
  { student: "ฟ้า", concept: "ฟังก์ชันเชิงเส้น", mastery: 76 },
  { student: "บีม", concept: "ฟังก์ชันเชิงเส้น", mastery: 49 },
  { student: "พีท", concept: "สมการกำลังสอง", mastery: 82 },
  { student: "ฟ้า", concept: "สมการกำลังสอง", mastery: 62 },
  { student: "บีม", concept: "สมการกำลังสอง", mastery: 38 }
];

export const progressTrend = [
  { week: "W1", mastery: 42 },
  { week: "W2", mastery: 53 },
  { week: "W3", mastery: 61 },
  { week: "W4", mastery: 72 }
];
