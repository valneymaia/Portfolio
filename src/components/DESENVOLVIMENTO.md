/**
 * GUIA DE DESENVOLVIMENTO - Portfolio
 * 
 * Este arquivo documenta como estender e manter os módulos JS
 */

// ============================================
// 1. ESTRUTURA DOS MÓDULOS
// ============================================

/*
src/js/
├── main.js          → Ponto de entrada, importa todos os módulos
├── theme.js         → Classe ThemeManager
├── menu.js          → Classe MobileMenu
└── form.js          → Classe ContactForm

Cada módulo:
✓ Exporta uma classe (PascalCase)
✓ Inicia automaticamente no DOMContentLoaded
✓ Expõe instância global em window
✓ Não possui dependências externas
*/

// ============================================
// 2. CRIAR UM NOVO MÓDULO
// ============================================

/*
PASSO 1: Criar arquivo em src/js/novo-modulo.js

export class NovoModulo {
  constructor() {
    console.log('NovoModulo inicializado');
    this.config = {
      // suas opções...
    };
  }

  metodo() {
    // sua lógica...
  }

  outroMetodo() {
    // sua lógica...
  }
}

// Inicializar automaticamente
document.addEventListener('DOMContentLoaded', () => {
  window.novoModulo = new NovoModulo();
});

---

PASSO 2: Importar em src/js/main.js

import { NovoModulo } from './novo-modulo.js';

---

PASSO 3: Usar no HTML

<button onclick="window.novoModulo.metodo()">Ativar</button>

ou

<script type="module">
  import { NovoModulo } from './src/js/novo-modulo.js';
  // usar NovoModulo aqui...
</script>
*/

// ============================================
// 3. API DOS MÓDULOS ATUAIS
// ============================================

/*
THEME MANAGER
============

Propriedades:
- window.themeManager.storageKey = 'portfolio-theme'
- window.themeManager.lightClass = 'theme-light'
- window.themeManager.darkClass = 'theme-dark'

Métodos:
- window.themeManager.setTheme('light' | 'dark')
- window.themeManager.toggle()
- window.themeManager.getCurrent() → 'light' | 'dark'

Eventos:
- document.body.classList add/remove 'theme-light' ou 'theme-dark'
- localStorage atualizado automaticamente

Exemplo:
  window.themeManager.toggle(); // Alternar tema
  console.log(window.themeManager.getCurrent()); // 'light' ou 'dark'
*/

/*
MOBILE MENU
===========

Seletores esperados no HTML:
- button#mobile-menu-btn   → Hamburger button
- nav#mobile-nav           → Mobile navigation container
- nav#mobile-nav a         → Links de navegação

Métodos:
- window.mobileMenu.toggle()
- window.mobileMenu.open()
- window.mobileMenu.close()

Classes CSS aplicadas:
- #mobile-nav: 'hidden' ou 'visible'
- #mobile-menu-btn: 'active' (quando menu aberto)

Auto-comportamentos:
- Fecha menu ao clicar em link
- Fecha menu ao clicar fora dele
- Links desativam propagação

Exemplo:
  window.mobileMenu.toggle(); // Alternar hamburger
*/

/*
CONTACT FORM
============

Seletores esperados no HTML:
- form#contact-form        → Formulário
- form#contact-form input  → Campos de entrada
- form button[type="submit"] → Botão enviar

Atributos do form:
- action="https://formsubmit.co/ajax/..."

Métodos:
- window.contactForm.handleSubmit(event)

Fluxo de envio:
1. Usuário clica em submit
2. AJAX POST para FormSubmit.co
3. Botão muda texto: "Enviando..."
4. Resposta OK: "✓ Enviado com sucesso!"
5. Erro: "✗ Erro ao enviar"
6. Volta ao normal após 3s

Estados do botão:
- Padrão: "Enviar Mensagem"
- Enviando: "Enviando..." (disabled)
- Sucesso: "✓ Enviado com sucesso!" (disabled por 3s)
- Erro: "✗ Erro ao enviar" (disabled por 3s)

Exemplo:
  // Usar HTML normalmente, tudo é automático
*/

// ============================================
// 4. ARQUITETURA DE PASTAS (FUTURA)
// ============================================

/*
src/
├── js/
│   ├── main.js
│   ├── utils/
│   │   ├── dom.js        → Helpers para DOM
│   │   ├── api.js        → Requisições HTTP
│   │   └── storage.js    → localStorage wrapper
│   ├── services/
│   │   ├── theme.js
│   │   ├── menu.js
│   │   └── form.js
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Card.js
│   │   └── Modal.js
│   └── hooks/
│       ├── useLocalstorage.js
│       └── useMediaQuery.js
└── css/
    ├── input.css
    └── utils/
        ├── colors.css
        ├── typography.css
        └── animations.css
*/

// ============================================
// 5. PADRÕES DE CODIFICAÇÃO
// ============================================

/*
Classes: sempre PascalCase
  ✓ ThemeManager
  ✓ MobileMenu
  ✗ themeManager
  ✗ mobile_menu

Métodos: sempre camelCase
  ✓ setTheme()
  ✓ handleSubmit()
  ✗ SetTheme()
  ✗ handle_submit()

Constantes: SCREAMING_SNAKE_CASE
  ✓ MOBILE_BREAKPOINT = 1024
  ✓ THEME_KEY = 'portfolio-theme'
  ✗ mobileBreakpoint
  ✗ theme_key

Variáveis privadas: prefixo #
  ✓ #config
  ✓ #initialized
  ✗ _config
  ✗ config_

Comentários JSDoc:
  /**
   * Descrição breve
   * @param {type} name - Descrição do param
   * @returns {type} Descrição do retorno
   */

Evitar:
  ✗ console.log() em produção
  ✗ var (usar const/let)
  ✗ Function expressions (usar arrow functions)
  ✗ Modificar window diretamente fora de inicialização
*/

// ============================================
// 6. TESTING (FUTURA EXPANSÃO)
// ============================================

/*
Quando expandir, considerar adicionar testes:

// test/theme.test.js
import { ThemeManager } from '../src/js/theme.js';

describe('ThemeManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve alternar tema', () => {
    const tm = new ThemeManager();
    tm.setTheme('light');
    expect(tm.getCurrent()).toBe('light');
  });

  it('deve persistir no localStorage', () => {
    const tm = new ThemeManager();
    tm.setTheme('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });
});

npm install --save-dev @testing-library/dom @testing-library/jest-dom vitest
npm run test
*/

// ============================================
// 7. PERFORMANCE (OTIMIZAÇÕES)
// ============================================

/*
Implementadas:
✓ Code splitting (módulos separados)
✓ Lazy initialization (DOMContentLoaded)
✓ classList vs className (mais rápido)
✓ Event delegation (no menu)
✓ localStorage cache (tema)

Futuras:
□ Intersection Observer (lazy load sections)
□ requestAnimationFrame (smooth scroll)
□ Web Workers (heavy computations)
□ Service Worker (offline support)
□ Image compression (WebP/AVIF)
*/

// ============================================
// 8. TROUBLESHOOTING
// ============================================

/*
Problema: Módulos não funcionam
Solução:
  1. Checar console.log para erros
  2. Verificar que <script type="module" src="..."></script> está no final do body
  3. Confirmar que DOMContentLoaded foi disparado
  4. Verificar que window.moduleName existe

Problema: Tema não persiste
Solução:
  1. Verificar localStorage habilitado (npm run dev)
  2. Verificar chave correta: localStorage.getItem('portfolio-theme')
  3. Reload page para confirmar persistência

Problema: Menu mobile não abre
Solução:
  1. Verificar IDs corretos (#mobile-menu-btn, #mobile-nav)
  2. Verified classes CSS (hidden no Tailwind)
  3. Check z-index conflicts
  4. Teste com elementos hardcoded

Problema: Formulário não envia
Solução:
  1. Verificar que FormSubmit.co está acessível
  2. Conferir email correto no action="" do form
  3. Verificar localStorage de usuário (Form data cache)
  4. Testar endpoint: curl -X POST https://formsubmit.co/ajax/email@email.com
*/

// ============================================
// 9. DEPLOYMENT
// ============================================

/*
GitHub Pages (desde origin/main):
  1. npm run build:css
  2. git add -A && git commit -m "build"
  3. git push origin main
  4. GitHub Actions (se configurado) ou manual deploy
  5. Site: https://valneymaia.github.io/Portfolio

Vercel:
  1. vercel link (conectar repo)
  2. Build: npm run build:css
  3. Output: ./
  4. Deploy automático em push

Netlify:
  1. netlify init
  2. Build: npm run build:css
  3. Deploy automático

Docker:
  # Dockerfile
  FROM node:18-alpine
  WORKDIR /app
  COPY . .
  RUN npm install && npm run build:css
  EXPOSE 5500
  CMD ["npm", "run", "dev"]

  # Build: docker build -t portfolio .
  # Run: docker run -p 5500:5500 portfolio
*/

// ============================================
// 10. COMANDOS ÚTEIS
// ============================================

/*
Desenvolvimento:
  npm run watch:css          # Do livro: CSS em tempo real
  npm run dev                # Terminal 2: servidor

Build:
  npm run build:css          # CSS minificado
  npm run build              # Build completo

Limpeza:
  rm -rf node_modules package-lock.json
  npm install

Performance:
  npm ls                     # Ver versões instaladas
  npm outdated              # Ver pacotes desatualizados
  npm audit                 # Verificar vulnerabilidades
  npm audit fix             # Corrigir vulnerabilidades

Git:
  git log --oneline         # Ver histórico
  git diff                  # Ver mudanças
  git status                # Status atual
  git branch                # Ver branches
*/
