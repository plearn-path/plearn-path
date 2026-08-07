import Link from "next/link";
import { RecommendedActionCard } from "../../components/teacher/recommended-action-card";
import { TeacherHeatmap } from "../../components/teacher/teacher-heatmap";
import { teacherHeatmap } from "../../features/learning/data/mock-learning-data";

export default function TeacherPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 text-ink sm:px-5 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-3">
          <Link href="/" className="text-sm font-bold text-plum-deep">
            ← Plearn Path
          </Link>
          <span className="rounded-[24px] bg-brand px-3 py-1.5 text-right text-xs font-bold text-white">
            ห้อง ม.4/1 · Demo data
          </span>
        </header>
        <section className="mt-8 rounded-[28px] bg-plum-deep px-5 py-8 text-white sm:mt-12 sm:rounded-[40px] sm:px-10 sm:py-10">
          <p className="text-sm font-bold tracking-wide text-[#D9C7FF]">
            TEACHER DASHBOARD
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            ภาพรวมที่พาไปสู่<br />การสอนที่ทันที
          </h1>
          <p className="mt-3 max-w-xl text-white/75">
            ไม่ใช่แค่เห็นจุดอ่อน แต่เห็นสิ่งที่ควรทำต่อในคาบถัดไป
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)]">
            <TeacherHeatmap cells={teacherHeatmap} />
            <RecommendedActionCard />
          </div>
        </section>
      </div>
    </main>
  );
}
