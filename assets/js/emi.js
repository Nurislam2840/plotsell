/* ============================================
   START: EMI Calculator
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const priceInput = document.getElementById('emi-price');
  const priceRange = document.getElementById('emi-price-range');
  const rateInput = document.getElementById('emi-rate');
  const yearsInput = document.getElementById('emi-years');
  const downInput = document.getElementById('emi-down');
  if (!priceInput) return;
  const params = new URLSearchParams(window.location.search);
  if (params.get('price')) { priceInput.value = params.get('price'); priceRange.value = params.get('price'); }
  const calc = () => {
    const price = +priceInput.value || 0;
    const down = +downInput.value || 0;
    const rate = (+rateInput.value || 0) / 100 / 12;
    const n = (+yearsInput.value || 0) * 12;
    const principal = price - down;
    let emi = 0;
    if (rate > 0 && n > 0 && principal > 0) emi = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    else if (n > 0) emi = principal / n;
    document.getElementById('emi-result').textContent = '$' + emi.toFixed(0);
    document.getElementById('emi-principal').textContent = '$' + principal.toLocaleString();
    const totalInterest = emi * n - principal;
    document.getElementById('emi-interest').textContent = '$' + (totalInterest > 0 ? totalInterest.toFixed(0) : 0);
    document.getElementById('emi-total').textContent = '$' + (emi * n).toFixed(0);
  };
  [priceInput, priceRange, rateInput, yearsInput, downInput].forEach(el => {
    el.addEventListener('input', () => {
      if (el === priceInput) priceRange.value = priceInput.value;
      if (el === priceRange) priceInput.value = priceRange.value;
      calc();
    });
  });
  calc();
});
/* ============================================
   END: EMI Calculator
   ============================================ */