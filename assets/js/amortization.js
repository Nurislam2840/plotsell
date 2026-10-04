/* ============================================
   START: Amortization Schedule
   ============================================ */
(function () {
  let ch;
  function calc(p, ar, y) {
    const r = ar / 100 / 12;
    const n = y * 12;
    const e = r > 0 ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : p / n;
    let b = p;
    const s = [];
    for (let i = 1; i <= y; i++) {
      let yi = 0, yp = 0;
      for (let m = 0; m < 12; m++) {
        const ii = b * r;
        const pp = e - ii;
        yi += ii; yp += pp; b -= pp;
      }
      s.push({ year: i, principal: yp, interest: yi, balance: Math.max(0, b) });
    }
    return { schedule: s, emi: e };
  }
  window.initAmortization = function () {
    const w = document.getElementById('amort-wrap');
    if (!w) return;
    const pe = document.getElementById('emi-price');
    const de = document.getElementById('emi-down');
    const re = document.getElementById('emi-rate');
    const ye = document.getElementById('emi-years');
    if (!pe) return;
    w.innerHTML = `<div class="amort-chart-wrap"><canvas id="amort-chart"></canvas></div><div class="amort-table-scroll"><table class="amort-table" id="amort-table"><thead><tr><th>Year</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead><tbody></tbody></table></div>`;
    const rn = () => {
      const p = +pe.value || 0;
      const d = +de.value || 0;
      const r = +re.value || 0;
      const y = +ye.value || 0;
      const pp = p - d;
      if (pp <= 0 || y <= 0) return;
      const { schedule } = calc(pp, r, y);
      document.querySelector('#amort-table tbody').innerHTML = schedule.map(x => `<tr><td><strong>Year ${x.year}</strong></td><td>$${Math.round(x.principal).toLocaleString()}</td><td>$${Math.round(x.interest).toLocaleString()}</td><td>$${Math.round(x.balance).toLocaleString()}</td></tr>`).join('');
      if (ch) ch.destroy();
      const ctx = document.getElementById('amort-chart');
      if (ctx && typeof Chart !== 'undefined') {
        ch = new Chart(ctx, {
          type: 'bar',
          data: { labels: schedule.map(x => 'Y' + x.year), datasets: [{ label: 'Principal', data: schedule.map(x => x.principal), backgroundColor: '#0B1F17', borderRadius: 4 }, { label: 'Interest', data: schedule.map(x => x.interest), backgroundColor: '#C8A24A', borderRadius: 4 }] },
          options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 } } } }, scales: { x: { grid: { display: false } }, y: { ticks: { callback: v => '$' + (v / 1000).toFixed(0) + 'k' } } } }
        });
      }
    };
    [pe, de, re, ye].forEach(el => el.addEventListener('input', rn));
    setTimeout(rn, 200);
  };
})();
/* ============================================
   END: Amortization Schedule
   ============================================ */