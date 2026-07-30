import Image from "next/image";
import { HeroCopy } from "./hero-copy";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[720px] overflow-hidden bg-plum-deep pt-20">
      <Image
        src="/plearn-path-hero.png"
        alt="นักเรียนกำลังทบทวนคณิตศาสตร์"
        fill
        priority
        className="-z-20 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#16052B]/95 via-[#300942]/75 to-[#300942]/10" />
      <div className="mx-auto grid min-h-[640px] max-w-7xl items-center px-5 py-20 lg:px-8">
        <HeroCopy />
      </div>
    </section>
  );
}
