import { DesktopNav } from "./desktop-nav";
import { LandingBrand } from "./landing-brand";

export function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 text-ink backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-5 lg:px-8">
        <LandingBrand />
        <DesktopNav />
        <a href="/teacher" className="shrink-0 rounded-[24px] bg-brand px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-900/15 sm:px-6 sm:py-3 sm:text-sm">
          ดู Teacher Dashboard
        </a>
      </div>
    </header>
  );
}
