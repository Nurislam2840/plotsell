/* ============================================
   START: Share Buttons
   ============================================ */
function initShareButtons() {
  document.querySelectorAll('[data-share]').forEach(el => {
    el.addEventListener('click', async () => {
      const data = { title: document.title, text: 'Check out this premium plot on PlotSell', url: window.location.href };
      if (navigator.share) { try { await navigator.share(data); } catch {} }
      else { await navigator.clipboard.writeText(data.url); if (typeof Toast !== 'undefined') Toast.success('Link copied!'); }
    });
  });
  document.querySelectorAll('[data-share-copy]').forEach(el => {
    el.addEventListener('click', async () => {
      await navigator.clipboard.writeText(window.location.href);
      if (typeof Toast !== 'undefined') Toast.success('Link copied to clipboard!');
    });
  });
}
document.addEventListener('DOMContentLoaded', initShareButtons);
/* ============================================
   END: Share Buttons
   ============================================ */