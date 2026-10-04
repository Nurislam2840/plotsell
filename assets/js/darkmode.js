/* ============================================
   START: Dark Mode
   ============================================ */
(function () {
  if (localStorage.getItem('plotsell_theme') === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
})();
function initDarkMode() {
  const btn = document.querySelector('.js-theme-btn');
  if (!btn || btn.dataset.wired) return;
  btn.dataset.wired = '1';
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('plotsell_theme', isDark ? 'light' : 'dark');
    if (typeof Toast !== 'undefined') Toast.info(isDark ? 'Light mode' : 'Dark mode', 2000);
  });
}
document.addEventListener('DOMContentLoaded', () => setTimeout(initDarkMode, 50));
/* ============================================
   END: Dark Mode
   ============================================ */