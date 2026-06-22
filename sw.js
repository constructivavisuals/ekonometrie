/* Ekonometrie — service worker
   Navigace (HTML): network-first → online vždy nejnovější verze, offline padne na cache.
   Data soubory, ikony, KaTeX (CDN JS/CSS/fonty): cache-first.
   Verzovaná cache: při novém nasazení zvedni číslo (ekonometrie-v4 → ekonometrie-v5). */
const CACHE = "ekonometrie-v4";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/icon-512-maskable.png",
  "/ekonometrie-teorie.js",
  "/ekonometrie-priklady-2.js"
];
/* KaTeX z CDN — předcachuj nejlépe jak to jde (offline rendering vzorců).
   Fonty KaTeX se doplní za běhu (cache-first níže) při prvním online načtení. */
const KATEX = [
  "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
  "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js",
  "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
];

// Instalace — nacachuj vlastní soubory + KaTeX (best-effort) a aktivuj hned
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      await cache.addAll(ASSETS);
      // KaTeX po jednom, aby selhání jednoho zdroje nezhatilo instalaci
      await Promise.all(
        KATEX.map((url) =>
          fetch(url, { mode: "cors" })
            .then((res) => { if (res.ok) return cache.put(url, res.clone()); })
            .catch(() => {})
        )
      );
    })
  );
  self.skipWaiting();
});

// Aktivace — smaž staré cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Navigace (HTML dokument) — network-first, offline fallback na cache
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match("/index.html"))
        )
    );
    return;
  }

  // Data, ikony, manifest, KaTeX JS/CSS + fonty — cache-first, na síti doplň do cache
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      });
    })
  );
});
