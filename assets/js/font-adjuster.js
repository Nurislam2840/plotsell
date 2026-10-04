/* ============================================
   START: Font Size Adjuster
   ============================================ */
(function () {
  const S = { small: '90%', medium: '100%', large: '112%', xlarge: '124%' };
  document.addEventListener('DOMContentLoaded', () => {
    const bar = document.createElement('div');
    bar.className = 'font-adjuster';
    bar.innerHTML = `<button data-size="small">A-</button><button data-size="medium">A</button><button data-size="large">A+</button><button data-size="xlarge">A++</button>`;
    document.body.appendChild(bar);
    const cur = localStorage.getItem('plotsell_font') || 'medium';
    const ap = s => {
      document.documentElement.style.fontSize = S[s] || '100%';
      bar.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.size === s));
    };
    ap(cur);
    bar.querySelectorAll('button').forEach(x => x.addEventListener('click', () => {
      localStorage.setItem('plotsell_font', x.dataset.size);
      ap(x.dataset.size);
      if (typeof Toast !== 'undefined') Toast.info('Font: ' + x.dataset.size, 1500);
    }));
  });
})();
/* ============================================
   END: Font Size Adjuster
   ============================================ */