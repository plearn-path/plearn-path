"use client";

import Link from "next/link";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { progressTrend } from "../../features/learning/data/mock-learning-data";

function MasteryChart() {
  return (
    <div className="mt-5 h-32 rounded-[24px] bg-white p-3 text-ink shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={progressTrend}>
          <defs>
            <linearGradient id="mastery" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#852EF2" stopOpacity=".35" />
              <stop offset="100%" stopColor="#852EF2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <XAxis dataKey="week" axisLine={false} tickLine={false} fontSize={10} />
          <Tooltip />
          <Area type="monotone" dataKey="mastery" stroke="#852EF2" fill="url(#mastery)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TeacherDashboardFeature() {
  return (
    <article id="teacher" className="rounded-[32px] bg-plum-deep p-8 text-white">
      <p className="text-sm font-bold text-[#D9C7FF]">TEACHER DASHBOARD</p>
      <h2 className="mt-3 text-2xl font-bold">เห็นจุดอ่อน<br />แล้วรู้ว่าควรทำอะไรต่อ</h2>
      <p className="mt-3 text-sm text-white/75">
        Heatmap จับคู่กับคำแนะนำเชิงปฏิบัติสำหรับคาบเรียนถัดไป
      </p>
      <MasteryChart />
      <div className="mt-4 rounded-2xl bg-white/10 p-3 text-xs text-white">
        แนะนำ: ทบทวนฟังก์ชันเชิงเส้นกับนักเรียน 2 คน
      </div>
      <Link href="/teacher" className="mt-4 inline-block text-sm font-bold text-[#D9C7FF]">
        เปิดแดชบอร์ดครู →
      </Link>
    </article>
  );
}
