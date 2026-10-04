/* ============================================
   START: Favorites (localStorage)
   ============================================ */
const FAV_KEY = 'plotsell_favorites';
const Favorites = {
  getAll() { try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch { return []; } },
  has(id) { return this.getAll().includes(Number(id)); },
  toggle(id) {
    id = Number(id);
    let favs = this.getAll();
    if (favs.includes(id)) favs = favs.filter(f => f !== id);
    else favs.push(id);
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    return favs.includes(id);
  },
  count() { return this.getAll().length; }
};
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-fav]');
  if (!btn) return;
  e.preventDefault();
  const nowFav = Favorites.toggle(btn.dataset.fav);
  btn.classList.toggle('active', nowFav);
});
/* ============================================
   END: Favorites (localStorage)
   ============================================ */