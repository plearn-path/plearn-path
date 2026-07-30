const steps = [
  ["01", "เริ่มจากจุดที่รู้", "เลือกหัวข้อและทำโจทย์สั้น ๆ เพื่อเห็นพื้นฐานที่มีอยู่"],
  ["02", "จัดเส้นทาง", "เชื่อมความรู้ที่ต้องใช้ก่อนเรียนหัวข้อถัดไปด้วย prerequisite graph"],
  ["03", "ปรับโจทย์ทันที", "เพิ่มความท้าทายหรือย้อนทบทวนจากคำตอบที่ผู้เรียนส่ง"],
  ["04", "ให้คำใบ้พอดี", "ช่วยคิดเป็นขั้น โดยไม่เฉลยแทนผู้เรียน"]
];

function AdaptiveLoopStep({ number, title, description }: { number: string; title: string; description: string }) {
  return <article className="rounded-[28px] bg-white p-6 shadow-sm"><span className="text-sm font-bold text-brand">{number}</span><h3 className="mt-8 font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>;
}

export function AdaptiveLoop() {
  return <section id="how" className="bg-lavender py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-sm font-bold tracking-wide text-brand">HOW IT WORKS</p><h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Adaptive loop ที่เดินไปพร้อมผู้เรียน</h2><div className="mt-10 grid gap-4 md:grid-cols-4">{steps.map(([number, title, description]) => <AdaptiveLoopStep key={number} number={number} title={title} description={description} />)}</div></div></section>;
}
