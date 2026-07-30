import { Fragment } from "react";
import type { HeatmapCell } from "../../features/learning/data/mock-learning-data";

export function TeacherHeatmap({ cells }: { cells: HeatmapCell[] }) {
  const concepts = [...new Set(cells.map((cell) => cell.concept))];
  const students = [...new Set(cells.map((cell) => cell.student))];
  return <section className="rounded-[28px] bg-white p-7 text-ink shadow-sm"><h2 className="font-bold">Heatmap ความเข้าใจ</h2><div className="mt-6 grid gap-3 text-center text-xs" style={{ gridTemplateColumns: `110px repeat(${concepts.length}, minmax(0, 1fr))` }}><span />{concepts.map((concept) => <b key={concept} className="text-slate-500">{concept}</b>)}{students.map((student) => <Fragment key={student}><b className="self-center text-left text-ink">น้อง{student}</b>{concepts.map((concept) => { const cell = cells.find((item) => item.student === student && item.concept === concept)!; return <div key={`${student}-${concept}`} className="rounded-2xl py-5 font-bold" style={{ background: `hsl(${cell.mastery * 1.35 + 245} 70% 90%)`, color: cell.mastery < 55 ? "#7D2279" : "#300942" }}>{cell.mastery}%</div>; })}</Fragment>)}</div><p className="mt-6 text-xs text-slate-500">เข้มขึ้น = เข้าใจดี · อ่อนลง = ควรได้รับความช่วยเหลือ</p></section>;
}
