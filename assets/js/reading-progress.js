/* ============================================
   START: Reading Progress
   ============================================ */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const a = document.querySelector('.blog-post, .article-content, .detail-grid');
    if (!a) return;
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.innerHTML = '<div class="reading-progress__bar"></div>';
    document.body.appendChild(bar);
    const bd = document.createElement('div');
    bd.className = 'reading-progress__badge';
    bd.textContent = '0% read';
    document.body.appendChild(bd);
    const w = (a.innerText || '').split(/\s+/).length;
    const m = Math.max(1, Math.round(w / 200));
    const u = () => {
      const r = a.getBoundingClientRect();
      const t = a.offsetHeight - window.innerHeight;
      const s = Math.max(0, -r.top);
      const p = t > 0 ? Math.min(100, (s / t) * 100) : 0;
      bar.querySelector('.reading-progress__bar').style.width = p + '%';
      const iv = r.bottom > 100 && r.top < window.innerHeight;
      bar.classList.toggle('show', iv);
      bd.classList.toggle('show', iv && p > 2 && p < 98);
      bd.textContent = Math.round(p) + '% · ' + m + ' min read';
    };
    u();
    window.addEventListener('scroll', u, { passive: true });
    window.addEventListener('resize', u);
  });
})();
/* ============================================
   END: Reading Progress
   ============================================ */