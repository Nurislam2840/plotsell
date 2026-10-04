/* ============================================
   START: Plot Detail Page
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(window.location.search).get('id') || 1;
  const plot = PLOTS.find(p => p.id === parseInt(id));
  if (!plot) { window.location.href = '404.html'; return; }
  renderDetail(plot);
});
function renderDetail(p) {
  document.title = `${p.title} — PlotSell`;
  const root = document.getElementById('plot-detail-root');
  if (!root) return;
  root.innerHTML = `
    <div class="detail-grid">
      <div>
        <div class="detail-gallery">
          <img id="gallery-main" src="${p.gallery[0]}" alt="${p.title}" class="detail-gallery__main" data-lightbox="1" data-lightbox-group="detail">
          ${p.gallery.length > 1 ? `<div class="detail-gallery__thumbs">${p.gallery.map((img, i) => `<img src="${img}" data-idx="${i}" class="${i===0?'active':''}" alt="" data-lightbox="1" data-lightbox-group="detail">`).join('')}</div>` : ''}
        </div>
        <h1>${p.title}</h1>
        <p class="text-muted" style="font-size:1.05rem;margin:0.75rem 0 1.5rem;">📍 ${p.location}</p>
        <div class="detail-specs">
          <div class="spec-box"><div class="spec-box__label">Size</div><div class="spec-box__value">${p.size}</div></div>
          <div class="spec-box"><div class="spec-box__label">Facing</div><div class="spec-box__value">${p.facing}</div></div>
          <div class="spec-box"><div class="spec-box__label">Road</div><div class="spec-box__value">${p.road}</div></div>
          <div class="spec-box"><div class="spec-box__label">Badge</div><div class="spec-box__value">${p.badge}</div></div>
        </div>
        <h3>Description</h3>
        <p style="margin:1rem 0 2rem;line-height:1.8;">${p.description}</p>
        <h3>Key Features</h3>
        <div class="detail-features">${p.features.map(f => `<span class="feature-tag">✓ ${f}</span>`).join('')}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2.5rem;flex-wrap:wrap;gap:1rem;">
          <h3 style="margin:0;">Reviews</h3>
          <div class="share-buttons">
            <button class="share-btn" data-share aria-label="Share">📤</button>
            <button class="share-btn" data-share-copy aria-label="Copy link">🔗</button>
          </div>
        </div>
        <div id="reviews-list" style="margin-top:1.5rem;"></div>
      </div>
      <aside>
        <div class="sidebar-card">
          <div class="sidebar-card__price" data-price-usd="${p.price}">${p.priceLabel}</div>
          <div class="sidebar-card__price-label">Asking price</div>
          <a href="book-visit.html?plot=${p.id}" class="btn btn--primary" style="width:100%;margin-bottom:0.75rem;">Book Site Visit</a>
          <a href="emi-calculator.html?price=${p.price}" class="btn btn--outline-dark" style="width:100%;margin-bottom:0.75rem;">Calculate EMI</a>
          <a href="contact.html" class="btn btn--dark" style="width:100%;margin-bottom:0.75rem;">Contact Agent</a>
          <button class="btn btn--outline-dark" style="width:100%;margin-bottom:0.75rem;" data-qr="${window.location.href}" data-qr-title="${p.title}">🔲 Show QR Code</button>
          <button class="plot-card__fav ${Favorites.has(p.id) ? 'active' : ''}" data-fav="${p.id}" style="position:static;width:100%;height:auto;padding:0.85rem;border-radius:12px;background:rgba(200,162,74,0.1);font-size:0.9rem;font-weight:600;">♥ Save to Favorites</button>
        </div>
      </aside>
    </div>`;
  const main = document.getElementById('gallery-main');
  document.querySelectorAll('.detail-gallery__thumbs img').forEach(t => {
    t.addEventListener('click', () => {
      main.src = p.gallery[t.dataset.idx];
      document.querySelectorAll('.detail-gallery__thumbs img').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });
  if (typeof initReviews === 'function') initReviews();
  if (window.Currency) setTimeout(() => window.Currency.apply(), 100);
}
/* ============================================
   END: Plot Detail Page
   ============================================ */