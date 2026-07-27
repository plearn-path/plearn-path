const CACHE = "plearn-path-v1";
const APP_SHELL = ["/", "/learn", "/teacher"];

self.addEventListener("install", (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.url.includes("/_next/")) return;
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then((response) => {
      const clone = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, clone));
      return response;
    }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("/learn"))));
  }
});
