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

export function QuestionCard({ question, answer, feedback, hint, loadingHint, onAnswerChange, onSubmit, onShowHint }: QuestionCardProps) {
  return <section className="rounded-3xl bg-white p-8 text-ink shadow-glow">
    <p className="text-xs font-bold text-brand">ADAPTIVE PRACTICE · {question?.conceptId ?? "กำลังเตรียมบทเรียน"}</p>
    <h1 className="mt-4 text-3xl font-bold">{question?.prompt ?? "กำลังเตรียมโจทย์..."}</h1>
    <p className="mt-3 text-sm text-slate-500">คณิตศาสตร์ ม.ปลาย · ตอบตามที่คุณคิด แล้วระบบจะปรับโจทย์ถัดไปให้เหมาะกับคุณ</p>
    <input value={answer} onChange={(event) => onAnswerChange(event.target.value)} onKeyDown={(event) => event.key === "Enter" && onSubmit()} className="mt-8 w-full rounded-xl border border-slate-300 px-4 py-3 text-lg text-slate-900 placeholder:text-slate-400 outline-brand" placeholder="พิมพ์คำตอบ" />
    <div className="mt-4 flex flex-wrap gap-3">
      <button onClick={onSubmit} className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white">ตรวจคำตอบ →</button>
      <button onClick={onShowHint} className="rounded-xl bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-700">Adaptive Hint ✦</button>
    </div>
    {(loadingHint || hint) && <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950"><b>Adaptive Hint</b><p className="mt-1">{loadingHint ? "AI กำลังคิดคำใบ้ให้คุณ..." : hint}</p></div>}
    {feedback && <p className="mt-5 text-sm font-semibold text-brand">{feedback}</p>}
  </section>;
}
