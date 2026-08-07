const steps = [
  ["01", "ผู้เรียนทำโจทย์", "ผู้เรียนฝึกโจทย์ตามหัวข้อและระดับความเข้าใจของตนเอง"],
  ["02", "ระบบวิเคราะห์คำตอบ", "คำตอบช่วยระบุหัวข้อที่เข้าใจแล้วและจุดที่ยังต้องทบทวน"],
  ["03", "เห็นภาพรวมของห้อง", "Teacher Dashboard แสดงรูปแบบความเข้าใจของผู้เรียนแต่ละคน"],
  ["04", "วางแผนสอนต่อ", "ครูได้แนวทางสอนเสริมหรือกิจกรรมที่ควรใช้ในคาบถัดไป"]
];

type AdaptiveLoopStepProps = {
  number: string;
  title: string;
  description: string;
};

function AdaptiveLoopStep({ number, title, description }: AdaptiveLoopStepProps) {
  return (
    <article className="rounded-[24px] bg-white p-5 shadow-sm sm:rounded-[28px] sm:p-6">
      <span className="text-sm font-bold text-brand">{number}</span>
      <h3 className="mt-8 font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export function AdaptiveLoop() {
  return (
    <section id="how" className="bg-lavender py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <p className="text-sm font-bold tracking-wide text-brand">HOW IT WORKS</p>
        <h2 className="mt-3 text-2xl font-bold text-ink sm:text-4xl">
          จากคำตอบของผู้เรียน สู่แผนสอนที่ตรงจุด
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <AdaptiveLoopStep key={number} number={number} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}
