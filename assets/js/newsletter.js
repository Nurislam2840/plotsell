/* ============================================
   START: Newsletter Form
   ============================================ */
function initNewsletter() {
  document.querySelectorAll('form[data-newsletter]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input.value || !/^\S+@\S+\.\S+$/.test(input.value)) {
        if (typeof Toast !== 'undefined') Toast.error('Please enter a valid email');
        return;
      }
      if (typeof Toast !== 'undefined') Toast.success('Subscribed! Welcome to PlotSell.');
      form.reset();
    });
  });
}
document.addEventListener('DOMContentLoaded', initNewsletter);
/* ============================================
   END: Newsletter Form
   ============================================ */