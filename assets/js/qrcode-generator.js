/* ============================================
   START: QR Code Generator (API-based, no library)
   ============================================ */
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const m = document.createElement('div');
    m.className = 'qr-modal';
    m.innerHTML = `<div class="qr-modal__inner"><div class="qr-modal__title">Scan to View</div><div class="qr-modal__sub">Point your phone camera at the code</div><div id="qr-canvas-wrap"></div><div style="display:flex;gap:0.5rem;justify-content:center;"><button class="btn btn--outline-dark" data-qr-close>Close</button><button class="btn btn--primary" data-qr-download>Download PNG</button></div></div>`;
    document.body.appendChild(m);

    m.addEventListener('click', e => {
      if (e.target === m || e.target.matches('[data-qr-close]')) m.classList.remove('open');
    });

    m.querySelector('[data-qr-download]').addEventListener('click', () => {
      const img = m.querySelector('#qr-canvas-wrap img');
      if (!img) {
        if (typeof Toast !== 'undefined') Toast.error('QR not ready');
        return;
      }
      // Fetch image as blob and download
      fetch(img.src)
        .then(res => res.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.download = 'plotsell-qr.png';
          a.href = url;
          a.click();
          URL.revokeObjectURL(url);
          if (typeof Toast !== 'undefined') Toast.success('QR downloaded!');
        })
        .catch(() => {
          // Fallback: open in new tab
          window.open(img.src, '_blank');
        });
    });

    window.showQRCode = function (url, title) {
      const wrap = m.querySelector('#qr-canvas-wrap');
      wrap.innerHTML = '';
      m.querySelector('.qr-modal__title').textContent = title || 'Scan to View';
      // Use QR Server API — no library needed
      const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&color=0B1F17&bgcolor=FFFFFF&data=' + encodeURIComponent(url);
      const img = document.createElement('img');
      img.src = apiUrl;
      img.alt = 'QR Code';
      img.style.display = 'block';
      img.style.width = '220px';
      img.style.height = '220px';
      img.onerror = () => {
        wrap.innerHTML = '<p style="color:#b91c1c;font-size:0.9rem;padding:1rem;">Could not load QR. Please check your internet connection.</p>';
      };
      wrap.appendChild(img);
      m.classList.add('open');
    };

    // Delegate click for QR buttons (works with dynamically added buttons)
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-qr]');
      if (!btn) return;
      e.preventDefault();
      const url = btn.dataset.qr || window.location.href;
      const title = btn.dataset.qrTitle || 'Scan to View';
      if (typeof window.showQRCode === 'function') window.showQRCode(url, title);
    });
  });
})();
/* ============================================
   END: QR Code Generator
   ============================================ */