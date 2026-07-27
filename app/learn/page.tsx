"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCachedQuestion, cacheQuestion } from "../../features/learning/offline/question-cache";

type Question = { id: string; conceptId: string; prompt: string; hint: string };

export default function LearnPage() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  const [hint, setHint] = useState("");
  const [loadingHint, setLoadingHint] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [offline, setOffline] = useState(false);

  useEffect(() => { loadQuestion(); }, []);
  async function loadQuestion() {
    try {
      const response = await fetch("/api/students/demo-student/next-question");
      const next = await response.json() as Question;
      setQuestion(next); cacheQuestion(next); setOffline(false);
    } catch {
      const cached = await getCachedQuestion<Question>();
      if (cached) { setQuestion(cached); setOffline(true); }
    }
  }
  async function showHint() {
    if (!question) return;
    setLoadingHint(true); setHint("");
    // TODO: call Gemini structured-output hint service in production.
    window.setTimeout(() => { setHint(question.hint); setLoadingHint(false); }, 850);
  }
  async function submit() {
    if (!question || !answer.trim()) return;
    const response = await fetch("/api/students/demo-student/answers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ questionId: question.id, answer, durationMs: 1000 }) });
    const result = await response.json();
    setFeedback(result.feedback); setQuestion(result.nextQuestion); cacheQuestion(result.nextQuestion); setAnswer(""); setHint("");
  }
  return <main className="min-h-screen bg-slate-950 px-5 py-8 text-white"><div className="mx-auto max-w-3xl"><header className="flex items-center justify-between"><Link href="/" className="text-sm font-bold text-slate-300">← Plearn Path</Link><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">{offline ? "Offline lesson" : "Learning now"}</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_220px]"><section className="rounded-3xl bg-white p-8 text-ink shadow-glow"><p className="text-xs font-bold text-brand">ADAPTIVE PRACTICE · {question?.conceptId ?? "กำลังเตรียมบทเรียน"}</p><h1 className="mt-4 text-3xl font-bold">{question?.prompt ?? "กำลังเตรียมโจทย์..."}</h1><p className="mt-3 text-sm text-slate-500">ตอบตามที่คุณคิด ระบบจะปรับโจทย์ถัดไปให้เหมาะกับคุณ</p><input value={answer} onChange={(event) => setAnswer(event.target.value)} onKeyDown={(event) => event.key === "Enter" && submit()} className="mt-8 w-full rounded-xl border border-slate-300 px-4 py-3 text-lg outline-brand" placeholder="พิมพ์คำตอบ" /><div className="mt-4 flex flex-wrap gap-3"><button onClick={submit} className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white">ตรวจคำตอบ →</button><button onClick={showHint} className="rounded-xl bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-700">Adaptive Hint ✦</button></div>{(loadingHint || hint) && <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950"><b>Adaptive Hint</b><p className="mt-1">{loadingHint ? "AI กำลังคิดคำใบ้ให้คุณ..." : hint}</p></div>}{feedback && <p className="mt-5 text-sm font-semibold text-brand">{feedback}</p>}</section><aside className="rounded-3xl border border-white/10 bg-white/5 p-6"><p className="text-xs font-bold text-mint">YOUR PATH</p><ol className="mt-5 space-y-4 text-sm"><li className="text-emerald-300">✓ จำนวนเต็ม</li><li className="font-bold text-white">● การบวกและลบ</li><li className="text-slate-500">○ การคูณและหาร</li></ol><p className="mt-10 text-xs leading-5 text-slate-400">โจทย์ถัดไปถูกบันทึกไว้ในอุปกรณ์ เพื่อให้เรียนต่อได้แม้สัญญาณไม่เสถียร</p></aside></div></div></main>;
}
