import Link from "next/link";

export function HeroCopy() {
  return (
    <div className="max-w-3xl self-center text-white">
      <p className="mb-6 text-sm font-bold uppercase tracking-[.18em] text-[#D9C7FF]">Adaptive classroom insight for high school teachers</p>
      <h1 className="text-5xl font-bold leading-[1.15] tracking-tight sm:text-7xl lg:text-[4rem] mb-5">
        ทุกคำตอบของผู้เรียน<br />
      </h1>
      <h1 className="text-5xl font-bold leading-[1.15] tracking-tight sm:text-7xl lg:text-[4rem] ">
        คือข้อมูลสำหรับการสอนที่ดีขึ้น
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
        Plearn Path ช่วยให้คุณครูระดับมัธยมศึกษาตอนปลายเห็นความเข้าใจของผู้เรียนจากการทำโจทย์จริง พร้อมระบุจุดอ่อนและแนะนำแนวทางสอนเสริมสำหรับแต่ละห้องเรียน
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/teacher" className="rounded-[24px] bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20">ดู Teacher Dashboard</Link>
        <Link href="/learn" className="rounded-[24px] border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur">ทดลองมุมมองผู้เรียน</Link>
      </div>
    </div>
  );
}
