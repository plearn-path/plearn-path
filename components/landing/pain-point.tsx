import { AdaptiveLearningCard, ClassSizeCard } from "./pain-cards";

export function PainPoint() {
  return <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-bold text-mint">THE CHALLENGE</p><h2 className="mt-3 text-3xl font-bold text-ink">เมื่อหนึ่งห้องมีนักเรียน 40–50 คน<br />ครูจะดูแลทุกคนได้อย่างไร?</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2"><ClassSizeCard /><AdaptiveLearningCard /></div></div></section>;
}
