/* ============================================
   START: Language Switch
   ============================================ */
const TRANSLATIONS = {
  'Home': 'হোম','Plots': 'প্লট','Compare': 'তুলনা','EMI': 'ইএমআই',
  'Investment': 'বিনিয়োগ','About': 'সম্পর্কে','Services': 'সেবাসমূহ',
  'Blog': 'ব্লগ','Contact': 'যোগাযোগ','Book a Visit': 'ভিজিট বুক করুন',
  'Rent vs Buy': 'ভাড়া vs কিনুন','Converter': 'কনভার্টার','Quiz': 'কুইজ'
};
function initLangSwitch() {
  const btn = document.querySelector('.js-lang-btn');
  if (!btn || btn.dataset.wired) return;
  btn.dataset.wired = '1';
  let lang = localStorage.getItem('plotsell_lang') || 'en';
  applyLang(lang); btn.textContent = lang.toUpperCase();
  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'bn' : 'en';
    localStorage.setItem('plotsell_lang', lang);
    applyLang(lang); btn.textContent = lang.toUpperCase();
    if (typeof Toast !== 'undefined') Toast.info(lang === 'bn' ? 'ভাষা পরিবর্তন হয়েছে' : 'Language changed', 2000);
  });
}
function applyLang(lang) {
  document.querySelectorAll('.navbar__link, .navbar__menu .btn').forEach(el => {
    if (!el.dataset.orig) el.dataset.orig = el.textContent.trim();
    const orig = el.dataset.orig;
    el.textContent = lang === 'bn' ? (TRANSLATIONS[orig] || orig) : orig;
  });
}
document.addEventListener('DOMContentLoaded', () => setTimeout(initLangSwitch, 80));
/* ============================================
   END: Language Switch
   ============================================ */