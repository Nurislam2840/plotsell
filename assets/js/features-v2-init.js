/* ============================================
   START: v2.0 Master Init
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const pid = new URLSearchParams(location.search).get('id') || 1;
    if (document.getElementById('tour-container') && typeof initVirtualTour === 'function') initVirtualTour('tour-container', pid);
    if (document.getElementById('neighborhood') && typeof renderNeighborhood === 'function') renderNeighborhood(parseInt(pid));
    if (document.getElementById('amort-wrap') && typeof initAmortization === 'function') initAmortization();
    if (document.getElementById('rvb-form') && typeof initRentVsBuy === 'function') initRentVsBuy();
  }, 600);
});
/* ============================================
   END: v2.0 Master Init
   ============================================ */