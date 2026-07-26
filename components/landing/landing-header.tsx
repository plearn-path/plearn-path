"use client";

import { useEffect, useState } from "react";

export function LandingHeader() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return <header className={dark ? "dark fixed inset-x-0 top-0 z-50 border-b border-slate-700 bg-slate-950 text-white" : "fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 text-ink backdrop-blur"}>
    <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8"><a href="#top" className="flex items-center gap-3 text-xl font-bold tracking-tight"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-2xl text-white">p</span><span>Plearn <em className="not-italic text-sun">Path</em></span></a><nav className="hidden items-center gap-9 text-base font-medium md:flex"><a href="#how">How it works</a><a href="#features">Features</a><a href="#architecture">Architecture</a></nav><div className="flex items-center gap-4"><button onClick={() => setDark(!dark)} className="rounded-full border border-current/20 px-4 py-2 text-sm font-bold" aria-label="Toggle dark mode">{dark ? "☀ Light" : "☾ Dark"}</button><a href="#cta" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white">เริ่มใช้งาน</a></div></div>
  </header>;
}
