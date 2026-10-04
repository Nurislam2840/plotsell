/* ============================================
   START: Multi-Currency Switcher
   ============================================ */
(function () {
  const R = {
    USD: { rate: 1, symbol: '$', label: 'US Dollar' },
    BDT: { rate: 117, symbol: '৳', label: 'Bangladeshi Taka' },
    EUR: { rate: 0.92, symbol: '€', label: 'Euro' },
    GBP: { rate: 0.79, symbol: '£', label: 'British Pound' },
    INR: { rate: 83, symbol: '₹', label: 'Indian Rupee' }
  };
  let cur = localStorage.getItem('plotsell_currency') || 'USD';
  function fp(u, c) {
    const x = R[c] || R.USD;
    const v = u * x.rate;
    if (v >= 1000000) return x.symbol + (v / 1000000).toFixed(2) + 'M';
    if (v >= 1000) return x.symbol + Math.round(v).toLocaleString();
    return x.symbol + Math.round(v);
  }
  function ap() {
    document.querySelectorAll('[data-price-usd]').forEach(e => {
      const u = parseFloat(e.dataset.priceUsd);
      if (!isNaN(u)) e.textContent = fp(u, cur);
    });
    document.querySelectorAll('.currency-switch').forEach(b => { b.textContent = cur; });
  }
  window.Currency = { formatPrice: fp, apply: ap, get: () => cur };
  document.addEventListener('DOMContentLoaded', () => {
    const m = document.createElement('div');
    m.className = 'currency-modal';
    m.innerHTML = `<div class="currency-modal__inner"><h3>Select Currency</h3><p>Prices will be converted from USD.</p><div class="currency-list">${Object.entries(R).map(([c, i]) => `<button class="currency-option ${c === cur ? 'active' : ''}" data-code="${c}"><span><span class="currency-option__code">${i.symbol}</span>${i.label}</span><span style="opacity:0.6;font-size:0.8rem;">${c}</span></button>`).join('')}</div></div>`;
    document.body.appendChild(m);
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
    m.querySelectorAll('.currency-option').forEach(o => o.addEventListener('click', () => {
      cur = o.dataset.code;
      localStorage.setItem('plotsell_currency', cur);
      m.querySelectorAll('.currency-option').forEach(z => z.classList.toggle('active', z.dataset.code === cur));
      ap();
      m.classList.remove('open');
      if (typeof Toast !== 'undefined') Toast.success('Currency: ' + cur);
    }));
    const s = document.getElementById('navbar-actions');
    if (s) {
      const b = document.createElement('button');
      b.className = 'currency-switch';
      b.textContent = cur;
      b.setAttribute('aria-label', 'Change currency');
      b.addEventListener('click', () => m.classList.add('open'));
      s.appendChild(b);
    }
    setTimeout(ap, 300);
  });
})();
/* ============================================
   END: Multi-Currency Switcher
   ============================================ */