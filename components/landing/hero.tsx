import { HeroCopy } from "./hero-copy";
import { LearningPathPreview } from "./learning-path-preview";

export function Hero() {
  return <section id="top" className="overflow-hidden bg-[#F3F7FC] pt-32">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-28">
      <HeroCopy />
      <LearningPathPreview />
    </div>
  </section>;
}
