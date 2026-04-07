/**
 * Gerenciador de Tema (Claro/Escuro)
 * Salva preferência em localStorage
 */

export class ThemeManager {
  constructor() {
    this.storageKey = 'portfolio-theme';
    this.lightClass = 'theme-light';
    this.darkClass = 'theme-dark';
    this.init();
  }

  init() {
    // Carrega tema salvo ou usa preferência do sistema
    const saved = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = saved ? saved === 'dark' : prefersDark;
    this.setTheme(isDark ? 'dark' : 'light');
  }

  setTheme(theme) {
    const isDark = theme === 'dark';
    const body = document.body;

    if (isDark) {
      body.classList.remove(this.lightClass);
      body.classList.add(this.darkClass);
    } else {
      body.classList.remove(this.darkClass);
      body.classList.add(this.lightClass);
    }

    localStorage.setItem(this.storageKey, theme);
    document.body.setAttribute('data-theme', theme);
  }

  toggle() {
    const current = localStorage.getItem(this.storageKey) || 'dark';
    this.setTheme(current === 'dark' ? 'light' : 'dark');
    
    // Disparar evento para atualizar UI
    document.dispatchEvent(new CustomEvent('themeChanged'));
  }

  getCurrent() {
    return localStorage.getItem(this.storageKey) || 'dark';
  }
}

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
  
  // Botão de toggle
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => window.themeManager.toggle());
  }
});
