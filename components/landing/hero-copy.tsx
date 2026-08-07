import Link from "next/link";

export function HeroCopy() {
  return (
    <div className="max-w-3xl self-center text-white">
      <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-[#D9C7FF] sm:mb-6 sm:text-sm">
        Adaptive classroom insight for high school teachers
      </p>
      <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl lg:text-[4rem]">
        <span className="block">ทุกคำตอบของผู้เรียน</span>
        <span className="mt-5 block">คือข้อมูลสำหรับการสอนที่ดีขึ้น</span>
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:mt-7 sm:text-lg sm:leading-8">
        Plearn Path ช่วยให้คุณครูระดับมัธยมศึกษาตอนปลายเห็นความเข้าใจของผู้เรียนจากการทำโจทย์จริง พร้อมระบุจุดอ่อนและแนะนำแนวทางสอนเสริมสำหรับแต่ละห้องเรียน
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
        <Link href="/teacher" className="rounded-[24px] bg-brand px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-black/20">
          ดู Teacher Dashboard
        </Link>
        <Link href="/learn" className="rounded-[24px] border border-white/40 bg-white/10 px-7 py-3.5 text-center text-sm font-bold text-white backdrop-blur">
          ทดลองมุมมองผู้เรียน
        </Link>
      </div>
    </div>
  );
}
