"use client";

import { useState } from "react";

export function RecommendedActionCard() {
  const [created, setCreated] = useState(false);
  const buttonLabel = created ? "สร้างกิจกรรมแล้ว ✓" : "สร้างกิจกรรมทบทวน";

  return (
    <aside className="rounded-[24px] bg-brand p-5 text-white shadow-sm sm:rounded-[28px] sm:p-7">
      <p className="text-xs font-bold text-white/75">RECOMMENDED ACTION</p>
      <h2 className="mt-3 text-xl font-bold sm:text-2xl">
        วันนี้ควรสอนซ่อม<br />เรื่องสมการกำลังสอง
      </h2>
      <p className="mt-4 text-sm leading-6 text-white/80">
        สำหรับน้องบีมและน้องฟ้า ลองใช้กิจกรรมแยกตัวประกอบ 10 นาที ก่อนเริ่มบทใหม่
      </p>
      <button onClick={() => setCreated(true)} className="mt-7 w-full rounded-[24px] bg-white px-4 py-3 text-sm font-bold text-plum-deep sm:w-auto">
        {buttonLabel}
      </button>
      {created && <p className="mt-3 text-xs text-white/85">เพิ่มกิจกรรมทบทวนสำหรับคาบถัดไปแล้ว</p>}
    </aside>
  );
}
