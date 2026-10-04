/* ============================================
   START: Master Features Init
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.detail-gallery__main, .detail-gallery__thumbs img, .gallery-grid img').forEach(img => {
      img.setAttribute('data-lightbox', '1');
      img.setAttribute('data-lightbox-group', 'gallery');
      img.style.cursor = 'zoom-in';
    });
  }, 800);
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-fav]');
    if (!btn) return;
    const id = parseInt(btn.dataset.fav);
    const plot = typeof PLOTS !== 'undefined' ? PLOTS.find(p => p.id === id) : null;
    const name = plot ? plot.title : 'Plot';
    if (typeof Toast !== 'undefined' && typeof Favorites !== 'undefined') {
      if (Favorites.has(id)) Toast.favorite(`"${name}" added to favorites ♥`);
      else Toast.info(`"${name}" removed from favorites`);
    }
  }, true);
});
/* ============================================
   END: Master Features Init
   ============================================ */