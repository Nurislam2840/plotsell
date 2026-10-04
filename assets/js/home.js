/* ============================================
   START: Plot Card HTML
   ============================================ */
function plotCardHTML(plot) {
  return `<article class="plot-card" data-reveal>
    <div class="plot-card__image-wrap">
      <img src="${plot.image}" alt="${plot.title}" class="plot-card__image" loading="lazy">
      <span class="plot-card__badge">${plot.badge}</span>
      <button class="plot-card__fav ${Favorites.has(plot.id) ? 'active' : ''}" data-fav="${plot.id}" aria-label="Save to favorites">♥</button>
    </div>
    <div class="plot-card__body">
      <h3 class="plot-card__title">${plot.title}</h3>
      <div class="plot-card__location">📍 ${plot.location}</div>
      <div class="plot-card__footer">
        <div class="plot-card__size">📐 ${plot.size}</div>
        <div class="plot-card__price" data-price-usd="${plot.price}">${plot.priceLabel}</div>
      </div>
      <a href="plot-detail.html?id=${plot.id}" class="plot-card__btn">View Details</a>
    </div>
  </article>`;
}
/* ============================================
   END: Plot Card HTML
   ============================================ */

/* ============================================
   START: Render Featured Plots
   ============================================ */
function renderFeaturedPlots() {
  const el = document.getElementById('featured-plots');
  if (!el) return;
  el.innerHTML = PLOTS.slice(0, 3).map(plotCardHTML).join('');
  if (typeof initScrollReveal === 'function') initScrollReveal();
  if (window.Currency) window.Currency.apply();
}
/* ============================================
   END: Render Featured Plots
   ============================================ */

/* ============================================
   START: Render Testimonials
   ============================================ */
function renderTestimonials() {
  const el = document.getElementById('testimonials');
  if (!el) return;
  el.innerHTML = TESTIMONIALS.map(t => `<div class="testimonial" data-reveal><p class="testimonial__text">"${t.text}"</p><div class="testimonial__author"><img src="${t.image}" alt="${t.name}"><div><strong>${t.name}</strong><span>${t.role}</span></div></div></div>`).join('');
  if (typeof initScrollReveal === 'function') initScrollReveal();
}
/* ============================================
   END: Render Testimonials
   ============================================ */

/* ============================================
   START: Render Blog Highlights
   ============================================ */
function renderBlogHighlights() {
  const el = document.getElementById('blog-highlights');
  if (!el) return;
  el.innerHTML = BLOG_POSTS.map(p => `<article class="blog-card" data-reveal><img src="${p.image}" alt="${p.title}"><div class="blog-card__body"><span class="blog-card__date">${p.date}</span><h3>${p.title}</h3><p class="text-muted">${p.excerpt}</p></div></article>`).join('');
  if (typeof initScrollReveal === 'function') initScrollReveal();
}
/* ============================================
   END: Render Blog Highlights
   ============================================ */

/* ============================================
   START: Home Init
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedPlots();
  renderTestimonials();
  renderBlogHighlights();
});
/* ============================================
   END: Home Init
   ============================================ */