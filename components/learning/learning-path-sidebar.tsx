export function LearningPathSidebar() {
  return (
    <aside className="rounded-[24px] border bg-white p-5 shadow-sm sm:rounded-[28px] sm:p-6">
      <p className="text-xs font-bold text-brand">YOUR PATH</p>
      <ol className="mt-5 space-y-4 text-sm">
        <li className="text-plum">✓ พื้นฐานฟังก์ชัน</li>
        <li className="font-bold text-ink">◉ ฟังก์ชันเชิงเส้น</li>
        <li className="text-slate-500">○ ฟังก์ชันกำลังสอง</li>
      </ol>
      <p className="mt-10 text-xs leading-5 text-slate-500">
        คำตอบของคุณจะช่วยปรับโจทย์ถัดไปให้พอดีกับเส้นทางนี้
      </p>
    </aside>
  );
}
