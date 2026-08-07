export function FooterCta() {
  return (
    <footer id="cta" className="bg-white px-4 py-12 sm:px-5 sm:py-16">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-plum-deep px-5 py-12 text-center text-white shadow-xl shadow-purple-950/15 sm:rounded-[40px] sm:px-12 sm:py-16">
        <p className="text-sm font-bold tracking-wide text-[#D9C7FF]">
          TEACH WITH CLEARER INSIGHT
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
          เปลี่ยนทุกคำตอบของผู้เรียน<br />ให้เป็นข้อมูลสำหรับการสอน
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/75">
          ดูภาพรวมจุดแข็ง จุดที่ต้องเสริม และแนวทางสำหรับคาบเรียนถัดไปได้ในที่เดียว
        </p>
        <div className="mt-8">
          <a href="/teacher" className="inline-block rounded-[24px] bg-brand px-7 py-3.5 text-sm font-bold text-white">
            ดู Teacher Dashboard
          </a>
        </div>
      </div>
    </footer>
  );
}
