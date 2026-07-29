import { Fragment } from "react";
import type { HeatmapCell } from "../../features/learning/data/mock-learning-data";

export function TeacherHeatmap({ cells }: { cells: HeatmapCell[] }) {
  const concepts = [...new Set(cells.map((cell) => cell.concept))];
  const students = [...new Set(cells.map((cell) => cell.student))];

  return <section className="rounded-3xl border border-slate-700 bg-[#121D31] p-7 shadow-2xl shadow-black/20">
    <h2 className="font-bold">Heatmap ความเข้าใจ</h2>
    <div className="mt-6 grid gap-3 text-center text-xs" style={{ gridTemplateColumns: `110px repeat(${concepts.length}, minmax(0, 1fr))` }}>
      <span />
      {concepts.map((concept) => <b key={concept} className="text-slate-300">{concept}</b>)}
      {students.map((student) => <Fragment key={student}><b className="self-center text-left text-slate-200">น้อง{student}</b>{concepts.map((concept) => { const cell = cells.find((item) => item.student === student && item.concept === concept)!; return <div key={`${student}-${concept}`} className="rounded-lg py-5 font-bold" style={{ background: `hsl(${cell.mastery * 1.35} 65% 87%)`, color: cell.mastery < 55 ? "#9a3412" : "#14532d" }}>{cell.mastery}%</div>; })}</Fragment>)}
    </div>
    <p className="mt-6 text-xs text-slate-500">เข้มขึ้น = เข้าใจดี · อ่อนลง = ควรได้รับความช่วยเหลือ</p>
  </section>;
}
