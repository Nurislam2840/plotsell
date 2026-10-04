/* ============================================
   START: Form Validation
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll('[required]').forEach(inp => {
        const wrap = inp.closest('.form-group');
        if (!inp.value.trim()) { ok = false; wrap.style.color = '#b91c1c'; inp.style.borderColor = '#b91c1c'; }
        else { wrap.style.color = ''; inp.style.borderColor = ''; }
        if (inp.type === 'email' && inp.value && !/^\S+@\S+\.\S+$/.test(inp.value)) { ok = false; inp.style.borderColor = '#b91c1c'; }
      });
      if (!ok) return;
      const success = document.getElementById('form-success');
      if (success) { success.style.display = 'block'; success.textContent = '✓ Thank you! Your request has been received. We will contact you shortly.'; }
      if (typeof Toast !== 'undefined') Toast.success('Submitted successfully!');
      form.reset();
    });
  });
});
/* ============================================
   END: Form Validation
   ============================================ */