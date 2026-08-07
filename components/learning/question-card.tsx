"use client";

type Question = { conceptId: string; prompt: string };

type QuestionCardProps = {
  question: Question | null;
  answer: string;
  feedback: string;
  hint: string;
  loadingHint: boolean;
  onAnswerChange: (answer: string) => void;
  onSubmit: () => void;
  onShowHint: () => void;
};

function HintPanel({ hint, loadingHint }: Pick<QuestionCardProps, "hint" | "loadingHint">) {
  if (!loadingHint && !hint) return null;

  return (
    <div className="mt-6 rounded-[20px] bg-lavender p-4 text-sm leading-6 text-ink">
      <b className="text-brand">Adaptive Hint</b>
      <p className="mt-1">{loadingHint ? "กำลังเตรียมคำใบ้ให้คุณ..." : hint}</p>
    </div>
  );
}

export function QuestionCard({ question, answer, feedback, hint, loadingHint, onAnswerChange, onSubmit, onShowHint }: QuestionCardProps) {
  const conceptLabel = question?.conceptId ?? "กำลังเตรียมบทเรียน";
  const questionPrompt = question?.prompt ?? "กำลังเตรียมโจทย์...";

  return (
    <section className="rounded-[24px] bg-white p-5 text-ink shadow-glow sm:rounded-[32px] sm:p-8">
      <p className="text-xs font-bold text-brand">ADAPTIVE PRACTICE · {conceptLabel}</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{questionPrompt}</h1>
      <p className="mt-3 text-sm text-slate-500">
        คณิตศาสตร์ ม.4 · ตอบตามที่คุณคิด แล้วระบบจะปรับโจทย์ถัดไปให้เหมาะกับคุณ
      </p>
      <input
        value={answer}
        onChange={(event) => onAnswerChange(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && onSubmit()}
        className="mt-8 w-full rounded-[20px] border border-[#D8C7EF] px-4 py-3 text-lg text-slate-900 placeholder:text-slate-400 outline-brand"
        placeholder="พิมพ์คำตอบ"
      />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button onClick={onSubmit} className="rounded-[24px] bg-brand px-5 py-3 text-sm font-bold text-white">
          ตรวจคำตอบ →
        </button>
        <button onClick={onShowHint} className="rounded-[24px] bg-lavender px-5 py-3 text-sm font-bold text-plum-deep">
          Adaptive Hint ✦
        </button>
      </div>
      <HintPanel hint={hint} loadingHint={loadingHint} />
      {feedback && <p className="mt-5 rounded-[18px] bg-plum-deep px-4 py-3 text-sm font-semibold text-white">{feedback}</p>}
    </section>
  );
}
