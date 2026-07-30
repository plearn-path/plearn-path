import Link from "next/link";

export function HeroCopy() {
  return (
    <div className="max-w-3xl self-center text-white">
      <p className="mb-6 text-sm font-bold uppercase tracking-[.18em] text-[#D9C7FF]">Adaptive mathematics for M.4</p>
      <h1 className="text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl lg:text-[5rem]">
        เส้นทางการเรียนรู้<br />ที่เข้าใจจังหวะของคุณ
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
        Plearn Path ช่วยให้ผู้เรียน ม.4 ฝึกคณิตศาสตร์ตามจังหวะของตัวเอง พร้อมโจทย์ คำใบ้ และขั้นถัดไปที่ปรับจากคำตอบจริง
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/learn" className="rounded-[24px] bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20">เริ่มฝึกโจทย์</Link>
        <Link href="/teacher" className="rounded-[24px] border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur">สำหรับคุณครู</Link>
      </div>
    </div>
  );
}
