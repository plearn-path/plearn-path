import Link from "next/link";
import { TeacherHeatmap } from "../../components/teacher/teacher-heatmap";
import { RecommendedActionCard } from "../../components/teacher/recommended-action-card";
import { teacherHeatmap } from "../../features/learning/data/mock-learning-data";

export default function TeacherPage() {
  return <main className="min-h-screen bg-[#080F1E] px-5 py-8 text-slate-100">
    <div className="mx-auto max-w-6xl">
      <header className="flex items-center justify-between"><Link href="/" className="text-sm font-bold text-slate-300">← Plearn Path</Link><span className="rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-white">ห้อง ม.4/1 · Live demo</span></header>
      <div className="mt-12"><p className="text-sm font-bold text-sun">TEACHER DASHBOARD</p><h1 className="mt-2 text-4xl font-bold">ภาพรวมที่พาไปสู่การสอนได้ทันที</h1><p className="mt-3 text-slate-400">ไม่ใช่แค่เห็นจุดอ่อน แต่เห็นสิ่งที่ควรทำต่อในคาบถัดไป</p></div>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
        <TeacherHeatmap cells={teacherHeatmap} />
        <RecommendedActionCard />
      </div>
    </div>
  </main>;
}
