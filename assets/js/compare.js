/* ============================================
   START: Compare Plots
   ============================================ */
const COMPARE_KEY = 'plotsell_compare';
function getCompare() { try { return JSON.parse(localStorage.getItem(COMPARE_KEY)) || []; } catch { return []; } }
function setCompare(arr) { localStorage.setItem(COMPARE_KEY, JSON.stringify(arr.slice(0, 3))); }
document.addEventListener('DOMContentLoaded', () => { renderCompareSelectors(); renderCompareTable(); });
function renderCompareSelectors() {
  const el = document.getElementById('compare-selectors');
  if (!el) return;
  el.innerHTML = PLOTS.map(p => `<label style="display:flex;align-items:center;gap:0.5rem;padding:0.6rem;background:#fff;border-radius:8px;cursor:pointer;"><input type="checkbox" value="${p.id}" ${getCompare().includes(p.id) ? 'checked' : ''}><span style="font-size:0.9rem;">${p.title}</span></label>`).join('');
  el.addEventListener('change', e => {
    const id = parseInt(e.target.value);
    let cur = getCompare();
    if (e.target.checked) {
      if (cur.length >= 3) { e.target.checked = false; if (typeof Toast !== 'undefined') Toast.error('You can compare up to 3 plots.'); return; }
      cur.push(id);
    } else cur = cur.filter(x => x !== id);
    setCompare(cur); renderCompareTable();
  });
}
function renderCompareTable() {
  const el = document.getElementById('compare-table-wrap');
  if (!el) return;
  const ids = getCompare();
  if (ids.length === 0) { el.innerHTML = `<div class="empty-state"><h3>No plots selected</h3><p>Select up to 3 plots above to compare them side by side.</p></div>`; return; }
  const items = ids.map(id => PLOTS.find(p => p.id === id));
  const rows = [
    ['Image', p => `<img src="${p.image}" alt="${p.title}">`],
    ['Title', p => `<strong>${p.title}</strong>`],
    ['Location', p => p.location],
    ['Size', p => p.size],
    ['Price', p => `<span class="text-gold" style="font-weight:700;">${p.priceLabel}</span>`],
    ['Facing', p => p.facing],
    ['Road', p => p.road],
    ['Badge', p => p.badge]
  ];
  el.innerHTML = `<table class="compare-table"><thead><tr><th>Feature</th>${items.map(p => `<th>${p.title}</th>`).join('')}</tr></thead><tbody>${rows.map(([label, fn]) => `<tr><td><strong>${label}</strong></td>${items.map(p => `<td>${fn(p)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
/* ============================================
   END: Compare Plots
   ============================================ */