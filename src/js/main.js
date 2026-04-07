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
  
  // Atualizar ícone do tema ao carregar
  updateThemeIcon();
  
  // Listener para mudanças de tema
  document.addEventListener('themeChanged', () => {
    updateThemeIcon();
  });
});

function updateThemeIcon() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  
  const isDark = document.body.classList.contains('theme-light');
  const icon = toggleBtn.querySelector('i');
  
  if (icon) {
    if (isDark) {
      // Modo claro: ícone de lua
      icon.className = 'fas fa-moon text-lg';
      toggleBtn.title = 'Modo escuro (Clique aqui)';
    } else {
      // Modo escuro: ícone de sol
      icon.className = 'fas fa-sun text-lg';
      toggleBtn.title = 'Modo claro (Clique aqui)';
    }
  }
}

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
