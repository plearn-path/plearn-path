import Link from "next/link";

export function AdaptiveHintFeature() {
  return <article className="rounded-3xl bg-[#EAF7F3] p-8">
    <span className="text-3xl">✦</span>
    <p className="mt-8 text-xs font-bold text-emerald-700">ADAPTIVE HINT</p>
    <h2 className="mt-3 text-2xl font-bold text-ink">คำใบ้ที่พาไปต่อ<br />ไม่ใช่คำตอบสำเร็จรูป</h2>
    <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">คำใบ้จะปรับตามจุดที่ผู้เรียนกำลังติด และแสดงสถานะคิดคำใบ้เพื่อให้ประสบการณ์ลื่นไหล</p>
    <div className="mt-7 rounded-xl bg-white p-4 text-sm text-slate-600 shadow-sm"><b className="text-mint">Adaptive Hint</b><p className="mt-2">AI กำลังคิดคำใบ้ที่เหมาะกับคุณ<span className="animate-pulse">...</span></p></div>
    <Link href="/learn" className="mt-5 inline-block text-sm font-bold text-brand">ลองหน้าผู้เรียน →</Link>
  </article>;
}
