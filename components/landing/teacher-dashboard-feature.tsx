"use client";

import Link from "next/link";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { progressTrend } from "../../features/learning/data/mock-learning-data";

export function TeacherDashboardFeature() {
  return <article id="teacher" className="rounded-3xl bg-[#EFF4FF] p-8">
    <p className="text-sm font-bold text-brand">TEACHER DASHBOARD</p>
    <h2 className="mt-3 text-2xl font-bold text-ink">เห็นจุดอ่อน<br />แล้วรู้ว่าควรทำอะไรต่อ</h2>
    <p className="mt-3 text-sm text-slate-600">Heatmap จับคู่กับคำแนะนำเชิงปฏิบัติสำหรับคาบเรียนถัดไป</p>
    <div className="mt-5 h-32 rounded-xl bg-white p-3 shadow-sm"><ResponsiveContainer width="100%" height="100%"><AreaChart data={progressTrend}><defs><linearGradient id="mastery" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2456A6" stopOpacity=".35" /><stop offset="100%" stopColor="#2456A6" stopOpacity="0" /></linearGradient></defs><XAxis dataKey="week" axisLine={false} tickLine={false} fontSize={10} /><Tooltip /><Area type="monotone" dataKey="mastery" stroke="#2456A6" fill="url(#mastery)" strokeWidth={3} /></AreaChart></ResponsiveContainer></div>
    <div className="mt-4 rounded-lg bg-white/80 p-3 text-xs text-brand">แนะนำ: ทบทวนฟังก์ชันเชิงเส้นกับนักเรียน 2 คน</div>
    <Link href="/teacher" className="mt-4 inline-block text-sm font-bold text-brand">เปิดแดชบอร์ดครู →</Link>
  </article>;
}
