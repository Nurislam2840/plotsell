/* ============================================
   START: Custom Cursor
   ============================================ */
function initCursor() {
  if (window.innerWidth < 1024) return;
  const dot = document.createElement('div'); dot.className = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.appendChild(dot); document.body.appendChild(ring);
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.opacity = '1'; ring.style.opacity = '1';
    dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
  });
  function loop() { rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15; ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`; requestAnimationFrame(loop); }
  loop();
  document.querySelectorAll('a, button, .plot-card, [data-lightbox]').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
}
document.addEventListener('DOMContentLoaded', () => setTimeout(initCursor, 300));
/* ============================================
   END: Custom Cursor
   ============================================ */