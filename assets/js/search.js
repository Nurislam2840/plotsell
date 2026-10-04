/* ============================================
   START: Live Search
   ============================================ */
function initLiveSearch() {
  const btn = document.querySelector('.js-search-btn');
  if (!btn || btn.dataset.wired) return;
  btn.dataset.wired = '1';
  const modal = document.createElement('div');
  modal.className = 'search-modal';
  modal.innerHTML = `<div class="search-modal__inner"><div class="search-modal__input-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input class="search-modal__input" type="text" placeholder="Search plots, locations..." autocomplete="off"><kbd class="search-modal__kbd">ESC</kbd></div><div class="search-modal__results"></div></div>`;
  document.body.appendChild(modal);
  const input = modal.querySelector('.search-modal__input');
  const results = modal.querySelector('.search-modal__results');
  let activeIdx = -1, currentResults = [];
  function render(list) {
    currentResults = list; activeIdx = -1;
    if (!list.length) { results.innerHTML = `<div class="search-empty">No plots found.</div>`; return; }
    results.innerHTML = list.map(p => `<div class="search-result" data-id="${p.id}"><img src="${p.image}" alt="${p.title}"><div class="search-result__info"><h4>${p.title}</h4><p>📍 ${p.location}</p></div><div class="search-result__price" data-price-usd="${p.price}">${p.priceLabel}</div></div>`).join('');
    if (window.Currency) window.Currency.apply();
    results.querySelectorAll('.search-result').forEach(el => el.addEventListener('click', () => { window.location.href = `plot-detail.html?id=${el.dataset.id}`; }));
  }
  function search(q) {
    q = q.toLowerCase().trim();
    if (!q) return render(PLOTS.slice(0, 5));
    render(PLOTS.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.badge.toLowerCase().includes(q)));
  }
  btn.addEventListener('click', () => { modal.classList.add('open'); document.body.style.overflow = 'hidden'; input.value = ''; search(''); setTimeout(() => input.focus(), 100); });
  function close() { modal.classList.remove('open'); document.body.style.overflow = ''; }
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  modal.querySelector('.search-modal__kbd').addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); modal.classList.contains('open') ? close() : btn.click(); }
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, currentResults.length - 1); updateActive(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); updateActive(); }
    if (e.key === 'Enter' && activeIdx >= 0) window.location.href = `plot-detail.html?id=${currentResults[activeIdx].id}`;
  });
  function updateActive() { results.querySelectorAll('.search-result').forEach((el, i) => el.classList.toggle('active', i === activeIdx)); }
  input.addEventListener('input', e => search(e.target.value));
}
document.addEventListener('DOMContentLoaded', () => setTimeout(initLiveSearch, 100));
/* ============================================
   END: Live Search
   ============================================ */