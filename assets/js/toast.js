/* ============================================
   START: Toast Notifications
   ============================================ */
const Toast = (() => {
  let container;
  function ensure() {
    if (container) return;
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = {
    success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>',
    error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
  };
  function show(message, type = 'success', duration = 3500) {
    ensure();
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<span class="toast__icon">${icons[type] || icons.info}</span><span>${message}</span><button class="toast__close" aria-label="Close">×</button>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    const remove = () => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); };
    toast.querySelector('.toast__close').addEventListener('click', remove);
    setTimeout(remove, duration);
  }
  return {
    success: (m, d) => show(m, 'success', d),
    error: (m, d) => show(m, 'error', d),
    info: (m, d) => show(m, 'info', d),
    favorite: (m, d) => show(m, 'success', d)
  };
})();
/* ============================================
   END: Toast Notifications
   ============================================ */