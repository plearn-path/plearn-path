import Link from "next/link";

export function AdaptiveHintFeature() {
  return (
    <article className="rounded-[32px] bg-lavender p-8">
      <span className="text-3xl">✦</span>
      <p className="mt-8 text-xs font-bold text-brand">ADAPTIVE HINT</p>
      <h2 className="mt-3 text-2xl font-bold text-ink">คำใบ้ที่พาไปต่อ<br />ไม่ใช่คำตอบสำเร็จรูป</h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
        คำใบ้จะชวนคิดทีละขั้นจากจุดที่ผู้เรียนกำลังติด เพื่อให้ยังเป็นเจ้าของการเรียนรู้ของตัวเอง
      </p>
      <div className="mt-7 rounded-[24px] bg-white p-4 text-sm text-slate-600 shadow-sm">
        <b className="text-brand">Adaptive Hint</b>
        <p className="mt-2">
          ลองดูว่าค่าที่โจทย์ให้มาเชื่อมกับสมการอย่างไร<span className="animate-pulse">...</span>
        </p>
      </div>
      <Link href="/learn" className="mt-5 inline-block text-sm font-bold text-brand">
        ลองหน้าผู้เรียน →
      </Link>
    </article>
  );
}
