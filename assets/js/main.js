/* ============================================
   START: Navbar Scroll Effect
   ============================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const handle = () => navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
  handle();
  window.addEventListener('scroll', handle, { passive: true });
}
/* ============================================
   END: Navbar Scroll Effect
   ============================================ */

/* ============================================
   START: Mobile Menu Toggle
   ============================================ */
function initMobileMenu() {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }));
}
/* ============================================
   END: Mobile Menu Toggle
   ============================================ */

/* ============================================
   START: Active Nav Link
   ============================================ */
function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });
}
/* ============================================
   END: Active Nav Link
   ============================================ */

/* ============================================
   START: Scroll Reveal
   ============================================ */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]:not(.revealed)');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', () => initScrollReveal());
/* ============================================
   END: Scroll Reveal
   ============================================ */