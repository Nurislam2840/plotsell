/* ============================================
   START: Scroll Progress Bar
   ============================================ */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    const u = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    u();
    window.addEventListener('scroll', u, { passive: true });
    window.addEventListener('resize', u);
  });
})();
/* ============================================
   END: Scroll Progress Bar
   ============================================ */