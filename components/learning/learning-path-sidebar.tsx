export function LearningPathSidebar() {
  return <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-xs font-bold text-mint">YOUR PATH</p>
    <ol className="mt-5 space-y-4 text-sm">
      <li className="text-emerald-300">✓ พื้นฐานฟังก์ชัน</li>
      <li className="font-bold text-white">● ฟังก์ชันเชิงเส้น</li>
      <li className="text-slate-500">○ ฟังก์ชันกำลังสอง</li>
    </ol>
    <p className="mt-10 text-xs leading-5 text-slate-400">โจทย์ถัดไปถูกบันทึกไว้ในอุปกรณ์ เพื่อให้เรียนต่อได้แม้สัญญาณไม่เสถียร</p>
  </aside>;
}
