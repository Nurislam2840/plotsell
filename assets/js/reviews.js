/* ============================================
   START: Sample Reviews
   ============================================ */
const SAMPLE_REVIEWS = [
  { name: 'Michael Ross', rating: 5, date: '2 weeks ago', text: 'Absolutely stunning property. The team at PlotSell was professional throughout.', verified: true },
  { name: 'Emily Carter', rating: 5, date: '1 month ago', text: 'Best investment decision we have made. The site visit was well organized.', verified: true },
  { name: 'David Kumar', rating: 4, date: '2 months ago', text: 'Great location and easy documentation process. Highly recommended.', verified: true }
];
function initReviews() {
  const list = document.getElementById('reviews-list');
  if (!list) return;
  list.innerHTML = SAMPLE_REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-card__head">
        <div class="review-card__avatar">${r.name.charAt(0)}</div>
        <div><div class="review-card__name">${r.name}</div><div class="review-card__date">${r.date}</div></div>
        <div class="review-card__stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      </div>
      <p class="review-card__text">${r.text}</p>
      ${r.verified ? '<span class="review-card__verified">✓ Verified Buyer</span>' : ''}
    </div>`).join('');
}
document.addEventListener('DOMContentLoaded', initReviews);
/* ============================================
   END: Sample Reviews
   ============================================ */