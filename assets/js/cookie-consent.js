/* ============================================
   START: Cookie Consent
   ============================================ */
(function () {
  const KEY = 'plotsell_cookie_consent';
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem(KEY)) return;
    const b = document.createElement('div');
    b.className = 'cookie-banner';
    b.innerHTML = `<div class="cookie-banner__inner"><div class="cookie-banner__icon">🍪</div><div class="cookie-banner__text">We use cookies to enhance your experience. <a href="privacy.html">Learn more</a></div><div class="cookie-banner__actions"><button class="btn btn--outline" data-cookie="reject">Reject</button><button class="btn btn--primary" data-cookie="accept">Accept All</button></div></div>`;
    document.body.appendChild(b);
    setTimeout(() => b.classList.add('show'), 800);
    b.querySelectorAll('[data-cookie]').forEach(x => x.addEventListener('click', () => {
      localStorage.setItem(KEY, x.dataset.cookie);
      b.classList.remove('show');
      setTimeout(() => b.remove(), 500);
      if (typeof Toast !== 'undefined') Toast.success(x.dataset.cookie === 'accept' ? 'Cookies accepted ✓' : 'Cookies rejected');
    }));
  });
})();
/* ============================================
   END: Cookie Consent
   ============================================ */