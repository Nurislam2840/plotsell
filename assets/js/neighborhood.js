/* ============================================
   START: Neighborhood Insights
   ============================================ */
(function () {
  const D = {
    1: { schools: 8, hospitals: 3, malls: 4, parks: 5, walk: 82, transit: 76, safety: 92 },
    2: { schools: 5, hospitals: 2, malls: 3, parks: 8, walk: 65, transit: 55, safety: 88 },
    3: { schools: 4, hospitals: 2, malls: 2, parks: 9, walk: 45, transit: 42, safety: 95 },
    4: { schools: 6, hospitals: 3, malls: 5, parks: 4, walk: 78, transit: 72, safety: 90 },
    5: { schools: 12, hospitals: 4, malls: 6, parks: 7, walk: 70, transit: 60, safety: 89 },
    6: { schools: 7, hospitals: 3, malls: 4, parks: 6, walk: 55, transit: 48, safety: 87 },
    7: { schools: 5, hospitals: 2, malls: 3, parks: 10, walk: 60, transit: 52, safety: 91 },
    8: { schools: 15, hospitals: 6, malls: 8, parks: 5, walk: 95, transit: 90, safety: 85 },
    9: { schools: 9, hospitals: 4, malls: 5, parks: 12, walk: 72, transit: 68, safety: 93 },
    10: { schools: 6, hospitals: 3, malls: 4, parks: 6, walk: 80, transit: 74, safety: 94 }
  };
  window.renderNeighborhood = function (pid) {
    const w = document.getElementById('neighborhood');
    if (!w) return;
    const d = D[pid] || D[1];
    w.innerHTML = `
      <h3 style="margin-bottom:1rem;">Neighborhood Insights</h3>
      <p class="text-muted" style="margin-bottom:1.5rem;">What's around this plot — nearby amenities and accessibility scores.</p>
      <div class="neighborhood-grid">
        <div class="nb-card"><div class="nb-card__icon">🎓</div><div class="nb-card__body"><div class="nb-card__label">Schools</div><div class="nb-card__value">${d.schools} nearby</div><div class="nb-card__dist">Avg 1.2 km</div></div></div>
        <div class="nb-card"><div class="nb-card__icon">🏥</div><div class="nb-card__body"><div class="nb-card__label">Hospitals</div><div class="nb-card__value">${d.hospitals} nearby</div><div class="nb-card__dist">Avg 2.5 km</div></div></div>
        <div class="nb-card"><div class="nb-card__icon">🛍️</div><div class="nb-card__body"><div class="nb-card__label">Shopping Malls</div><div class="nb-card__value">${d.malls} nearby</div><div class="nb-card__dist">Avg 1.8 km</div></div></div>
        <div class="nb-card"><div class="nb-card__icon">🌳</div><div class="nb-card__body"><div class="nb-card__label">Parks</div><div class="nb-card__value">${d.parks} nearby</div><div class="nb-card__dist">Avg 0.9 km</div></div></div>
      </div>
      <div class="nb-scores">
        <div class="nb-score"><div class="nb-score__value">${d.walk}</div><div class="nb-score__label">Walk Score</div></div>
        <div class="nb-score"><div class="nb-score__value">${d.transit}</div><div class="nb-score__label">Transit Score</div></div>
        <div class="nb-score"><div class="nb-score__value">${d.safety}</div><div class="nb-score__label">Safety Index</div></div>
      </div>`;
  };
})();
/* ============================================
   END: Neighborhood Insights
   ============================================ */