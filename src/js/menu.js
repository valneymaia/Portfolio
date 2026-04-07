/**
 * Gerenciador de Menu Mobile
 * Toggle hamburger para telas pequenas
 */

export class MobileMenu {
  constructor() {
    this.menuBtn = document.getElementById('mobile-menu-btn');
    this.mobileNav = document.getElementById('mobile-nav');
    this.navLinks = document.querySelectorAll('#mobile-nav a');
    this.init();
  }

  init() {
    if (!this.menuBtn || !this.mobileNav) return;

    // Toggle menu
    this.menuBtn.addEventListener('click', () => this.toggle());

    // Fechar ao clicar em link
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mobile-menu-btn') && 
          !e.target.closest('#mobile-nav')) {
        this.close();
      }
    });
  }

  toggle() {
    this.mobileNav.classList.toggle('hidden');
    this.menuBtn.classList.toggle('active');
  }

  open() {
    this.mobileNav.classList.remove('hidden');
    this.menuBtn.classList.add('active');
  }

  close() {
    this.mobileNav.classList.add('hidden');
    this.menuBtn.classList.remove('active');
  }
}

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', () => {
  window.mobileMenu = new MobileMenu();
});
