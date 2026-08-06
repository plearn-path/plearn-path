export function ClassSizeCard() {
  return (
    <article className="rounded-[32px] border bg-white p-8 shadow-sm">
      <p className="text-5xl font-bold text-brand">40–50</p>
      <h3 className="mt-4 font-bold text-ink">คนต่อครู 1 คน</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        เมื่อทุกคนได้รับโจทย์ชุดเดียวกัน ผู้เรียนที่ยังไม่เข้าใจอาจหลุดจากบทเรียน ขณะที่คนที่พร้อมแล้วต้องรอเนื้อหาซ้ำ
      </p>
    </article>
  );
}

export function AdaptiveLearningCard() {
  return (
    <article className="rounded-[32px] bg-plum-deep p-8 text-white shadow-lg shadow-purple-950/15">
      <p className="text-sm font-bold tracking-wide text-[#D9C7FF]">ADAPTIVE LEARNING</p>
      <h3 className="mt-3 text-2xl font-bold">จากบทเรียนเดียว<br />สู่เส้นทางของแต่ละคน</h3>
      <p className="mt-3 text-sm leading-6 text-white/75">
        Plearn Path มองคำตอบเพื่อเลือกโจทย์หรือคำใบ้ขั้นถัดไปที่เหมาะกับจุดที่ผู้เรียนกำลังติดอยู่
      </p>
    </article>
  );
}
