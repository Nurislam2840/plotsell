/* ============================================
   START: Navbar + Footer Injection
   ============================================ */
(function () {
  const logo = `<svg width="34" height="34" viewBox="0 0 60 60" fill="none"><path d="M20 40V20C20 17.79 21.79 16 24 16H36C38.21 16 40 17.79 40 20V40" stroke="#C8A24A" stroke-width="4" stroke-linecap="round"/><path d="M40 20C40 17.79 41.79 16 44 16H56C58.21 16 60 17.79 60 20V40" stroke="#F7F5EF" stroke-width="4" stroke-linecap="round"/><line x1="20" y1="40" x2="60" y2="40" stroke="#C8A24A" stroke-width="4" stroke-linecap="round"/></svg>`;

  const navHTML = `
    <nav class="navbar">
      <div class="container navbar__inner">
        <a href="index.html" class="navbar__logo">${logo}<span class="navbar__logo-text">Plot<span class="navbar__logo-accent">Sell</span></span></a>
        <ul class="navbar__menu" id="navbar-menu">
          <li class="navbar__actions" id="navbar-actions">
            <button class="search-btn js-search-btn" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
            <button class="lang-switch js-lang-btn" aria-label="Switch language">EN</button>
            <button class="theme-toggle js-theme-btn" aria-label="Toggle theme">
              <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </button>
          </li>
          <li><a href="index.html" class="navbar__link">Home</a></li>
          <li><a href="plots.html" class="navbar__link">Plots</a></li>
          <li><a href="compare.html" class="navbar__link">Compare</a></li>
          <li><a href="emi-calculator.html" class="navbar__link">EMI</a></li>
          <li><a href="investment.html" class="navbar__link">Investment</a></li>
          <li><a href="rent-vs-buy.html" class="navbar__link">Rent vs Buy</a></li>
          <li><a href="converter.html" class="navbar__link">Converter</a></li>
          <li><a href="quiz.html" class="navbar__link">Quiz</a></li>
          <li><a href="about.html" class="navbar__link">About</a></li>
          <li><a href="services.html" class="navbar__link">Services</a></li>
          <li><a href="blog.html" class="navbar__link">Blog</a></li>
          <li><a href="contact.html" class="navbar__link">Contact</a></li>
          <li class="navbar__cta-wrap"><a href="book-visit.html" class="btn btn--primary btn--sm navbar__cta">Book a Visit</a></li>
        </ul>
        <button class="navbar__toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      </div>
    </nav>`;

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            <div class="footer__logo">${logo}Plot<span>Sell</span></div>
            <p>Premium land acquisition specialists. We connect discerning buyers with extraordinary plots of land.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="plots.html">All Plots</a></li>
              <li><a href="compare.html">Compare</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="services.html">Services</a></li>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li><a href="emi-calculator.html">EMI Calculator</a></li>
              <li><a href="investment.html">Investment</a></li>
              <li><a href="rent-vs-buy.html">Rent vs Buy</a></li>
              <li><a href="converter.html">Unit Converter</a></li>
              <li><a href="quiz.html">Mortgage Quiz</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>hello@plotsell.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Beverly Hills, CA 90210</li>
              <li><a href="documentation.html">Documentation</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">&copy; <span id="year"></span> PlotSell. All rights reserved.</div>
      </div>
    </footer>`;

  document.addEventListener('DOMContentLoaded', () => {
    const nm = document.getElementById('navbar-mount');
    const fm = document.getElementById('footer-mount');
    if (nm) nm.innerHTML = navHTML;
    if (fm) fm.innerHTML = footerHTML;
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
    if (typeof initNavbar === 'function') initNavbar();
    if (typeof initMobileMenu === 'function') initMobileMenu();
    if (typeof setActiveNavLink === 'function') setActiveNavLink();
  });
})();
/* ============================================
   END: Navbar + Footer Injection
   ============================================ */