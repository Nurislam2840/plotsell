/* ============================================
   START: Plots Listing Page
   ============================================ */
document.addEventListener('DOMContentLoaded', () => { populateFilters(); renderPlots(); bindFilters(); initViewToggle(); });
function populateFilters() {
  const locSel = document.getElementById('filter-location');
  if (!locSel) return;
  const locations = [...new Set(PLOTS.map(p => p.location.split(',')[1]?.trim() || p.location))];
  locations.forEach(loc => {
    const o = document.createElement('option');
    o.value = loc; o.textContent = loc;
    locSel.appendChild(o);
  });
}
function renderPlots(list = PLOTS) {
  const el = document.getElementById('plots-grid');
  const count = document.getElementById('results-count');
  if (!el) return;
  if (count) count.textContent = `${list.length} propert${list.length === 1 ? 'y' : 'ies'} found`;
  if (!list.length) { el.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><h3>No plots found</h3><p>Try adjusting your filters.</p></div>`; return; }
  el.innerHTML = list.map(plotCardHTML).join('');
  if (typeof initScrollReveal === 'function') initScrollReveal();
  if (window.Currency) window.Currency.apply();
  renderFilterChips();
}
function bindFilters() {
  const form = document.getElementById('filter-form');
  if (!form) return;
  form.addEventListener('input', applyFilters);
  form.addEventListener('change', applyFilters);
}
function applyFilters() {
  const q = document.getElementById('filter-search')?.value.toLowerCase() || '';
  const loc = document.getElementById('filter-location')?.value || '';
  const maxPrice = parseInt(document.getElementById('filter-price')?.value || 10000000);
  const minSize = parseFloat(document.getElementById('filter-size')?.value || 0);
  const filtered = PLOTS.filter(p =>
    (!q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)) &&
    (!loc || p.location.includes(loc)) && p.price <= maxPrice && p.sizeValue >= minSize
  );
  renderPlots(filtered);
}
function renderFilterChips() {
  const el = document.getElementById('active-chips');
  if (!el) return;
  const q = document.getElementById('filter-search')?.value;
  const loc = document.getElementById('filter-location')?.value;
  const chips = [];
  if (q) chips.push({ label: `"${q}"`, reset: () => { document.getElementById('filter-search').value = ''; } });
  if (loc) chips.push({ label: loc, reset: () => { document.getElementById('filter-location').value = ''; } });
  el.innerHTML = chips.map((c, i) => `<span class="filter-chip">${c.label}<button data-chip="${i}">×</button></span>`).join('');
  el.querySelectorAll('[data-chip]').forEach(btn => {
    btn.addEventListener('click', () => { chips[+btn.dataset.chip].reset(); applyFilters(); });
  });
}
function initViewToggle() {
  const toggle = document.getElementById('view-toggle');
  if (!toggle) return;
  toggle.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      toggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const grid = document.getElementById('plots-grid');
      grid.classList.toggle('plots-list', btn.dataset.view === 'list');
    });
  });
}
/* ============================================
   END: Plots Listing Page
   ============================================ */