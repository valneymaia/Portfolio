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
  initHoverTilt();
  
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

function initHoverTilt() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (prefersReduced || isTouch) return;

  const tiltItems = document.querySelectorAll('.hover-tilt');

  tiltItems.forEach((item) => {
    item.addEventListener('mousemove', (event) => {
      const rect = item.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      const rotateY = (px - 0.5) * 10;
      const rotateX = (0.5 - py) * 10;

      item.classList.add('is-active');
      item.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('is-active');
      item.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
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
