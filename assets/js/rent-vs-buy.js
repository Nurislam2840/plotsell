/* ============================================
   START: Rent vs Buy Calculator
   ============================================ */
(function () {
  function f(n) { return '$' + Math.round(n).toLocaleString(); }
  window.initRentVsBuy = function () {
    const form = document.getElementById('rvb-form');
    if (!form) return;
    const c = () => {
      const p = +document.getElementById('rvb-price').value || 0;
      const d = +document.getElementById('rvb-down').value || 0;
      const r = +document.getElementById('rvb-rate').value || 0;
      const y = +document.getElementById('rvb-years').value || 0;
      const rt = +document.getElementById('rvb-rent').value || 0;
      const rg = +document.getElementById('rvb-rent-growth').value || 0;
      const ap = +document.getElementById('rvb-appreciation').value || 0;
      const pr = p - d;
      const m = r / 100 / 12;
      const n = y * 12;
      const emi = m > 0 ? (pr * m * Math.pow(1 + m, n)) / (Math.pow(1 + m, n) - 1) : pr / n;
      const tp = emi * n + d;
      const fv = p * Math.pow(1 + ap / 100, y);
      const bc = tp - (fv - pr - d);
      let tr = 0, cr = rt;
      for (let i = 0; i < y; i++) { tr += cr * 12; cr *= 1 + rg / 100; }
      const inv = d * Math.pow(1 + ap / 100, y);
      const rc = tr - (inv - d);
      const bw = bc < rc;
      document.getElementById('rvb-buy-total').textContent = f(bc);
      document.getElementById('rvb-rent-total').textContent = f(rc);
      document.getElementById('rvb-emi').textContent = f(emi) + '/mo';
      document.getElementById('rvb-rent-mo').textContent = f(rt) + '/mo';
      document.getElementById('rvb-result-badge').textContent = bw ? 'Buying Wins' : 'Renting Wins';
      document.getElementById('rvb-result-title').textContent = bw ? `Buying saves ${f(rc - bc)}` : `Renting saves ${f(bc - rc)}`;
      document.getElementById('rvb-buy-box').classList.toggle('rvb-result__box--winner', bw);
      document.getElementById('rvb-rent-box').classList.toggle('rvb-result__box--winner', !bw);
    };
    form.addEventListener('input', c);
    c();
  };
})();
/* ============================================
   END: Rent vs Buy Calculator
   ============================================ */