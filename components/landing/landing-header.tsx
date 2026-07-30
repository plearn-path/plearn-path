import { DesktopNav } from "./desktop-nav";
import { LandingBrand } from "./landing-brand";

export function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 text-ink backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <LandingBrand />
        <DesktopNav />
        <a href="/learn" className="rounded-[24px] bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/15">เริ่มใช้งาน</a>
      </div>
    </header>
  );
}
