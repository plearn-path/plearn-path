"use client";

import { useState } from "react";

export function RecommendedActionCard() {
  const [created, setCreated] = useState(false);

  return <aside className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#23385F] to-[#17243B] p-7 text-white shadow-2xl shadow-black/20">
    <p className="text-xs font-bold text-sun">RECOMMENDED ACTION</p>
    <h2 className="mt-3 text-2xl font-bold">วันนี้ควรสอนซ่อม<br />เรื่องสมการกำลังสอง</h2>
    <p className="mt-4 text-sm leading-6 text-slate-300">สำหรับน้องบีมและน้องฟ้า ลองใช้กิจกรรมแยกตัวประกอบ 10 นาที ก่อนเริ่มบทใหม่</p>
    <button onClick={() => setCreated(true)} className="mt-7 rounded-xl bg-sun px-4 py-3 text-sm font-bold text-ink">{created ? "สร้างกิจกรรมแล้ว ✓" : "สร้างกิจกรรมทบทวน"}</button>
    {created && <p className="mt-3 text-xs text-emerald-200">เพิ่มกิจกรรมทบทวนสำหรับคาบถัดไปแล้ว</p>}
  </aside>;
}
