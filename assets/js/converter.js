/* ============================================
   START: Land Unit Converter
   ============================================ */
const AREA_UNITS = {
  sqft: { name: 'Sq Ft', toSqft: 1 },
  katha: { name: 'Katha', toSqft: 720 },
  bigha: { name: 'Bigha', toSqft: 14400 },
  acre: { name: 'Acre', toSqft: 43560 },
  shatak: { name: 'Shatak', toSqft: 435.6 },
  sqm: { name: 'Sq Meter', toSqft: 10.7639 },
  hectare: { name: 'Hectare', toSqft: 107639 }
};
function initConverter() {
  const fromEl = document.getElementById('conv-from');
  const toEl = document.getElementById('conv-to');
  const valEl = document.getElementById('conv-value');
  const outEl = document.getElementById('conv-result');
  if (!fromEl) return;
  Object.entries(AREA_UNITS).forEach(([k, u]) => {
    fromEl.insertAdjacentHTML('beforeend', `<option value="${k}">${u.name}</option>`);
    toEl.insertAdjacentHTML('beforeend', `<option value="${k}">${u.name}</option>`);
  });
  fromEl.value = 'katha'; toEl.value = 'sqft';
  const calc = () => {
    const v = +valEl.value || 0;
    const sqft = v * AREA_UNITS[fromEl.value].toSqft;
    const result = sqft / AREA_UNITS[toEl.value].toSqft;
    outEl.textContent = result.toLocaleString(undefined, { maximumFractionDigits: 4 }) + ' ' + AREA_UNITS[toEl.value].name;
  };
  [fromEl, toEl, valEl].forEach(el => el.addEventListener('input', calc));
  fromEl.addEventListener('change', calc);
  toEl.addEventListener('change', calc);
  calc();
}
document.addEventListener('DOMContentLoaded', initConverter);
/* ============================================
   END: Land Unit Converter
   ============================================ */