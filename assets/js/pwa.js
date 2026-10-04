/* ============================================
   START: PWA Install Button
   ============================================ */
(function () {
  let dp = null;
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); dp = e;
    const b = document.querySelector('.pwa-install-btn');
    if (b) b.classList.add('show');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const s = document.getElementById('navbar-actions');
    if (!s) return;
    const b = document.createElement('button');
    b.className = 'pwa-install-btn';
    b.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>Install</span>`;
    b.setAttribute('aria-label', 'Install App');
    b.addEventListener('click', async () => {
      if (!dp) { if (typeof Toast !== 'undefined') Toast.info('Install not available', 2000); return; }
      dp.prompt();
      const { outcome } = await dp.userChoice;
      if (outcome === 'accepted' && typeof Toast !== 'undefined') Toast.success('Installing…');
      dp = null; b.classList.remove('show');
    });
    s.appendChild(b);
  });
})();
/* ============================================
   END: PWA Install Button
   ============================================ */