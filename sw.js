const CACHE_NAME = 'spotifi-shell-v57';

const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon.png',
  './icons/icon-192.png',
  './icons/icon-maskable.png',
  './icons/icon-maskable-192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Network-first, cache as offline fallback only — NOT cache-first. This
// used to be cache-first (serve cached copy immediately, never re-check
// network once something was cached), which is exactly why real users kept
// seeing stale UI after a redeploy even after force-closing/reinstalling
// the PWA: once ANY version of index.html/app.js/style.css was cached, it
// would keep being served forever regardless of how old it was, until the
// service worker itself fully cycled through install/activate — and that
// cycle depends on the browser noticing sw.js changed, which is exactly
// the step that can lag on iOS Safari (SW update checks aren't always
// prompt for standalone/home-screen-added PWAs, and GitHub Pages itself
// serves everything with Cache-Control: max-age=600, which can shadow the
// "fetch a truly fresh sw.js" step too). Network-first means every load,
// online, always gets the actual current deploy — the cache only ever
// matters when genuinely offline.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Never cache/intercept cross-origin calls (YouTube API, thumbnails, lyrics API) — always go to network.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request).then((response) => {
      if (response.ok && event.request.method === 'GET') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
