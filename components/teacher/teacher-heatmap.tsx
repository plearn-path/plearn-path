import { Fragment } from "react";
import type { HeatmapCell } from "../../features/learning/data/mock-learning-data";

type HeatmapRowProps = {
  student: string;
  concepts: string[];
  cells: HeatmapCell[];
};

function MasteryCell({ mastery }: { mastery: number }) {
  const background = `hsl(${mastery * 1.35 + 245} 70% 90%)`;
  const color = mastery < 55 ? "#7D2279" : "#300942";

  return (
    <div className="rounded-2xl py-4 font-bold sm:py-5" style={{ background, color }}>
      {mastery}%
    </div>
  );
}

function HeatmapRow({ student, concepts, cells }: HeatmapRowProps) {
  return (
    <Fragment>
      <b className="self-center text-left text-ink">น้อง{student}</b>
      {concepts.map((concept) => {
        const cell = cells.find(
          (item) => item.student === student && item.concept === concept
        );

        return <MasteryCell key={`${student}-${concept}`} mastery={cell!.mastery} />;
      })}
    </Fragment>
  );
}

export function TeacherHeatmap({ cells }: { cells: HeatmapCell[] }) {
  const concepts = [...new Set(cells.map((cell) => cell.concept))];
  const students = [...new Set(cells.map((cell) => cell.student))];
  const columns = `100px repeat(${concepts.length}, minmax(96px, 1fr))`;

  return (
    <section className="min-w-0 rounded-[24px] bg-white p-5 text-ink shadow-sm sm:rounded-[28px] sm:p-7">
      <h2 className="font-bold">Heatmap ความเข้าใจ</h2>
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="grid min-w-[520px] gap-3 text-center text-xs" style={{ gridTemplateColumns: columns }}>
          <span />
          {concepts.map((concept) => <b key={concept} className="text-slate-500">{concept}</b>)}
          {students.map((student) => <HeatmapRow key={student} student={student} concepts={concepts} cells={cells} />)}
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        เข้มขึ้น = เข้าใจดี · อ่อนลง = ควรได้รับความช่วยเหลือ
      </p>
    </section>
  );
}
