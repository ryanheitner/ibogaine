/**
 * Mobile nav: hamburger toggle, tap-outside backdrop, Escape to close.
 * Exposes window.closeMobileMenu for applyLang (main.js) on the homepage.
 */
(function () {
  const MQ = '(max-width: 900px)';

  function closeMobileMenu() {
    document.body.classList.remove('nav-mobile-menu-open');
    document.querySelector('.nav-links')?.classList.remove('open');
  }

  function openMobileMenu(navLinks) {
    navLinks.classList.add('open');
    document.body.classList.add('nav-mobile-menu-open');
  }

  function initMobileNavMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    let backdrop = document.querySelector('.nav-menu-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'nav-menu-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }
    backdrop.addEventListener('click', closeMobileMenu);

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navLinks.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu(navLinks);
      }
    });

    hamburger.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      hamburger.click();
    });

    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', closeMobileMenu);
    });

    const mq = window.matchMedia(MQ);
    mq.addEventListener('change', () => {
      if (!mq.matches) closeMobileMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('nav-mobile-menu-open')) {
        closeMobileMenu();
      }
    });
  }

  window.closeMobileMenu = closeMobileMenu;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavMenu);
  } else {
    initMobileNavMenu();
  }
})();
