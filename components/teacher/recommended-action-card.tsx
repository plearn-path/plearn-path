"use client";

import { useState } from "react";

export function RecommendedActionCard() {
  const [created, setCreated] = useState(false);
  return <aside className="rounded-[28px] bg-brand p-7 text-white shadow-sm"><p className="text-xs font-bold text-white/75">RECOMMENDED ACTION</p><h2 className="mt-3 text-2xl font-bold">วันนี้ควรสอนซ่อม<br />เรื่องสมการกำลังสอง</h2><p className="mt-4 text-sm leading-6 text-white/80">สำหรับน้องบีมและน้องฟ้า ลองใช้กิจกรรมแยกตัวประกอบ 10 นาที ก่อนเริ่มบทใหม่</p><button onClick={() => setCreated(true)} className="mt-7 rounded-[24px] bg-white px-4 py-3 text-sm font-bold text-plum-deep">{created ? "สร้างกิจกรรมแล้ว ✓" : "สร้างกิจกรรมทบทวน"}</button>{created && <p className="mt-3 text-xs text-white/85">เพิ่มกิจกรรมทบทวนสำหรับคาบถัดไปแล้ว</p>}</aside>;
}
