/* ============================================
   START: Lightbox Gallery
   ============================================ */
const Lightbox = (() => {
  let el, imgEl, counterEl, images = [], idx = 0;
  function ensure() {
    if (el) return;
    el = document.createElement('div');
    el.className = 'lightbox';
    el.innerHTML = `<button class="lightbox__close" aria-label="Close">×</button><button class="lightbox__nav lightbox__nav--prev" aria-label="Previous">‹</button><button class="lightbox__nav lightbox__nav--next" aria-label="Next">›</button><img class="lightbox__img" alt=""><div class="lightbox__counter"></div>`;
    document.body.appendChild(el);
    imgEl = el.querySelector('.lightbox__img');
    counterEl = el.querySelector('.lightbox__counter');
    el.querySelector('.lightbox__close').addEventListener('click', close);
    el.querySelector('.lightbox__nav--prev').addEventListener('click', () => nav(-1));
    el.querySelector('.lightbox__nav--next').addEventListener('click', () => nav(1));
    el.addEventListener('click', e => { if (e.target === el) close(); });
  }
  function show(list, i = 0) { ensure(); images = list; idx = i; update(); el.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function update() { imgEl.src = images[idx]; counterEl.textContent = `${idx + 1} / ${images.length}`; }
  function nav(d) { idx = (idx + d + images.length) % images.length; update(); }
  function close() { el.classList.remove('open'); document.body.style.overflow = ''; }
  document.addEventListener('keydown', e => {
    if (!el || !el.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });
  document.addEventListener('click', e => {
    const img = e.target.closest('[data-lightbox]');
    if (!img) return;
    e.preventDefault();
    const group = img.dataset.lightboxGroup || 'default';
    const all = [...document.querySelectorAll(`[data-lightbox-group="${group}"]`)].map(x => x.src || x.dataset.src);
    const i = all.indexOf(img.src || img.dataset.src);
    show(all.length ? all : [img.src], i >= 0 ? i : 0);
  });
  return { show, close };
})();
/* ============================================
   END: Lightbox Gallery
   ============================================ */