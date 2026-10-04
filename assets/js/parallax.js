/* ============================================
   START: Parallax
   ============================================ */
function initParallax() {
  const els = document.querySelectorAll('.parallax');
  if (!els.length) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      els.forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.3;
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) el.style.transform = `translateY(${y * speed}px)`;
      });
      ticking = false;
    });
  }, { passive: true });
}
document.addEventListener('DOMContentLoaded', initParallax);
/* ============================================
   END: Parallax
   ============================================ */