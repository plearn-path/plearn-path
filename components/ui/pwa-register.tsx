"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    if (process.env.NODE_ENV !== "production") {
      // Never let a cached service worker interfere with Next.js Fast Refresh.
      navigator.serviceWorker.getRegistrations().then((registrations) => registrations.forEach((registration) => registration.unregister()));
      caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
      return;
    }

    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  }, []);
  return null;
}
