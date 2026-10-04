/* ============================================
   START: Virtual 360° Tour
   ============================================ */
(function () {
  const T = {
    1: { url: 'https://pannellum.org/images/alma.jpg' },
    2: { url: 'https://pannellum.org/images/cerro-toco-0.jpg' },
    3: { url: 'https://pannellum.org/images/from-tree.jpg' },
    default: { url: 'https://pannellum.org/images/alma.jpg' }
  };
  window.initVirtualTour = function (id, pid) {
    const el = document.getElementById(id);
    if (!el || typeof pannellum === 'undefined') return;
    const t = T[pid] || T.default;
    el.innerHTML = `<div class="tour-wrap"><div class="tour-badge">🌐 360° View</div><div id="tour-viewer"></div><div class="tour-hint">Drag to look around · Scroll to zoom</div></div>`;
    pannellum.viewer('tour-viewer', { type: 'equirectangular', panorama: t.url, autoLoad: true, autoRotate: -2, showControls: true });
  };
})();
/* ============================================
   END: Virtual 360° Tour
   ============================================ */