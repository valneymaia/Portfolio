# 🎨 Portfolio - Valney Maia Neto

Um portfólio moderno, responsivo e totalmente modularizado criado com **Tailwind CSS v4**, **JavaScript ES6+** e arquitetura profissional.

## 📐 Arquitetura do Projeto

```
portfolio/
├── src/                          # Código-fonte estruturado
│   ├── js/                       # JavaScript modularizado (ES6 modules)
│   │   ├── main.js              # 📌 Ponto de entrada (importa todos os módulos)
│   │   ├── theme.js             # 🌙 Gerenciador de tema claro/escuro com localStorage
│   │   ├── menu.js              # 📱 Controlador de menu mobile (hamburger)
│   │   └── form.js              # 📧 Manipulador assincrono de formulário
│   └── components/              # 🔧 Componentes reutilizáveis (para futura expansão)
├── assets/
│   └── css/
│       ├── input.css            # Entrada do Tailwind (regras customizadas)
│       └── main.css             # ✨ CSS compilado (gerado automaticamente)
├── images/                       # 🖼️ Assets de mídia
├── dist/                         # 🚀 Build de produção (quando aplicável)
├── index.html                    # 📄 Página principal (SPA)
├── tailwind.config.js            # ⚙️ Configuração Tailwind personalizada
├── package.json                  # 📦 Dependências npm
└── README.md                     # 📖 Este arquivo

```

## 🛠️ Stack Técnico

- **HTML5** - Estrutura semântica
- **Tailwind CSS v4.2.2** - Framework utilitário (compilação local)
- **JavaScript ES6+** - Módulos modernos (classes, imports)
- **Font Awesome Pro** - Ícones responsivos
- **FormSubmit.co** - Backend serverless para formulários
- **localStorage API** - Persistência de preferências

## 🚀 Quickstart

### 1️⃣ Instalação

```bash
npm install
```

### 2️⃣ Desenvolvimento Local

```bash
# Terminal 1: Watch CSS
npm run watch:css

# Terminal 2: Server
npm run dev

# Abra: http://localhost:5500
```

### 3️⃣ Produção

```bash
npm run build:css
```

## 📚 Scripts Disponíveis

- `npm run build:css` - Compilar CSS (minificado)
- `npm run watch:css` - Watch CSS em tempo real
- `npm run dev` - Iniciar servidor Python (5500)
- `npm run build` - Build completo

## 📱 Responsividade

- **< 1024px** - Menu mobile (hamburger)
- **≥ 1024px** - Menu desktop
- Mobile-first design

## ✨ Módulos JavaScript

### `theme.js` - Tema Claro/Escuro
- Toggle com ícone dinâmico
- Persistência em localStorage
- Transição suave (0.25s)

### `menu.js` - Menu Mobile
- Hamburger com 3 linhas
- Fecha ao clicar em link
- Suporte a telas pequenas

### `form.js` - Formulário
- AJAX sem page reload
- Validação HTML5
- Feedback visual (Enviando... → ✓ Enviado!)

## 📄 Licença

Pessoal. Cite ao usar como referência.

## 👨‍💻 Autor

**Valney Maia Neto**  
- 📧 valney.maia@aluno.ufca.edu.br
- 🔗 GitHub: [@valneymaia](https://github.com/valneymaia)
- 💼 LinkedIn: [Perfil](https://linkedin.com/in/valney-maia-98b5a5150/)

**Última atualização**: 7 de Abril de 2026
