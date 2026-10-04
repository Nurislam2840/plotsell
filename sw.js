/* ============================================
   START: Service Worker
   ============================================ */
const CACHE = 'plotsell-v2';
const ASSETS = [
  './', './index.html', './plots.html', './plot-detail.html',
  './assets/css/style.css', './assets/css/components.css',
  './assets/css/pages.css', './assets/css/animations.css',
  './assets/css/features.css', './assets/css/features-v2.css',
  './assets/css/dark-mode.css',
  './assets/js/data.js', './assets/js/components.js', './assets/js/main.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fp = fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => cached);
      return cached || fp;
    })
  );
});
/* ============================================
   END: Service Worker
   ============================================ */