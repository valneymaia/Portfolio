/**
 * Portfolio - Script Principal
 * Importa todos os módulos
 */

import { ThemeManager } from './theme.js';
import { MobileMenu } from './menu.js';
import { ContactForm } from './form.js';

// Inicialização global
window.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio carregado');
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Export para uso global se necessário
export { ThemeManager, MobileMenu, ContactForm };
