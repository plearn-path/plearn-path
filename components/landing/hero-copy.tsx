import Link from "next/link";

export function HeroCopy() {
  return <div className="self-center">
    <p className="mb-5 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-brand">AI for the Future of Thai Education</p>
    <h1 className="max-w-xl text-5xl font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl">เส้นทางการเรียนรู้<br /><span className="text-brand">ที่ปรับตามคุณ</span></h1>
    <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">Plearn Path ใช้ AI ทำความเข้าใจผู้เรียนแต่ละคน แล้วปรับบทเรียน โจทย์ และคำใบ้ให้พอดีกับจังหวะการเรียนรู้</p>
    <div className="mt-8 flex flex-wrap gap-3"><Link href="/learn" className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15">เริ่มเรียนเลย →</Link><Link href="/teacher" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-ink">ดูสำหรับคุณครู</Link></div>
  </div>;
}
