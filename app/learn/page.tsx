"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LearningPathSidebar } from "../../components/learning/learning-path-sidebar";
import { QuestionCard } from "../../components/learning/question-card";

type Question = { id: string; conceptId: string; prompt: string; hint: string };

export default function LearnPage() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  const [hint, setHint] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetch("/api/students/demo-student/next-question")
      .then((response) => response.json())
      .then((next: Question) => setQuestion(next));
  }, []);

  function showHint() {
    if (question) setHint(question.hint);
  }

  async function submit() {
    if (!question || !answer.trim()) return;
    const response = await fetch("/api/students/demo-student/answers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ questionId: question.id, answer, durationMs: 1000 }) });
    const result = await response.json();
    setFeedback(result.feedback); setQuestion(result.nextQuestion); setAnswer(""); setHint("");
  }

  return <main className="min-h-screen bg-slate-950 px-5 py-8 text-white"><div className="mx-auto max-w-3xl"><header className="flex items-center justify-between"><Link href="/" className="text-sm font-bold text-slate-300">← Plearn Path</Link><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">Learning demo</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_220px]"><QuestionCard question={question} answer={answer} feedback={feedback} hint={hint} loadingHint={false} onAnswerChange={setAnswer} onSubmit={submit} onShowHint={showHint} /><LearningPathSidebar /></div></div></main>;
}
