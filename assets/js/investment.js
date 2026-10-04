/* ============================================
   START: Investment Calculator
   ============================================ */
function initInvestment() {
  const form = document.getElementById('invest-form');
  if (!form) return;
  const calc = () => {
    const initial = +document.getElementById('inv-initial').value || 0;
    const years = +document.getElementById('inv-years').value || 0;
    const rate = (+document.getElementById('inv-rate').value || 0) / 100;
    const future = initial * Math.pow(1 + rate, years);
    const gain = future - initial;
    const roi = initial > 0 ? (gain / initial) * 100 : 0;
    document.getElementById('inv-future').textContent = '$' + Math.round(future).toLocaleString();
    document.getElementById('inv-gain').textContent = '$' + Math.round(gain).toLocaleString();
    document.getElementById('inv-roi').textContent = roi.toFixed(1) + '%';
  };
  form.addEventListener('input', calc);
  calc();
}
document.addEventListener('DOMContentLoaded', initInvestment);
/* ============================================
   END: Investment Calculator
   ============================================ */