import { DesktopNav } from "./desktop-nav";
import { LandingBrand } from "./landing-brand";

export function LandingHeader() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-700 bg-slate-950 text-white">
    <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
      <LandingBrand />
      <DesktopNav />
      <a href="/learn" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white">เริ่มใช้งาน</a>
    </div>
  </header>;
}
