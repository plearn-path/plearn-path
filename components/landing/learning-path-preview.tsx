import { learningPath } from "../../features/learning/data/mock-learning-data";

function positionFor(index: number) {
  if (index === 0) return "left-5 top-24";
  if (index === 1) return "right-4 top-10";
  return "bottom-10 left-[30%]";
}

function NodeStatus({ state, index }: { state: string; index: number }) {
  const label = state === "current" ? "กำลังเรียน" : state === "mastered" ? "สำเร็จ" : "ถัดไป";
  const icon = state === "mastered" ? "✓" : index + 1;
  const color = state === "mastered" ? "bg-emerald-100 text-emerald-600" : state === "current" ? "bg-white/20" : "bg-slate-100 text-slate-400";

  return <span className={`grid h-8 w-8 place-items-center rounded-lg ${color}`}>{icon}</span>;
}

export function LearningPathPreview() {
  return (
    <div className="relative min-h-[390px]">
      <div className="absolute inset-4 rounded-[2.5rem] bg-[#DCEBFF]" />
      <div className="absolute inset-12 rounded-[2rem] border border-white/80 bg-white/40" />
      <svg className="absolute left-14 top-24 h-48 w-[70%]" viewBox="0 0 360 190" fill="none" aria-hidden="true">
        <path d="M52 90 L180 45 L302 105 M180 45 L180 150" stroke="#8BADE3" strokeWidth="2" strokeDasharray="5 5" />
      </svg>
      {learningPath.map((node, index) => {
        const surface = node.state === "current" ? "bg-brand text-white" : "bg-white text-ink";

        return (
          <div key={node.id} className={`absolute flex w-40 items-center gap-2 rounded-2xl p-3 shadow-glow ${surface} ${positionFor(index)}`}>
            <NodeStatus state={node.state} index={index} />
            <div>
              <p className="text-[10px] opacity-75">
                {node.state === "current" ? "กำลังเรียน" : node.state === "mastered" ? "สำเร็จ" : "ถัดไป"}
              </p>
              <b className="text-xs">{node.label}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}
