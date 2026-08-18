<div align="center">

<p align="center">
  <img src="atividade-principal/imagens/logo%20urubu.png" alt="Logo" width="120">
</p>

# Atividade Fullstack — 1º Semestre

<strong>Portfólio de atividades de Desenvolvimento Fullstack.</strong>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Canvas_API-FF6F00?style=flat" alt="Canvas API">
  <img src="https://img.shields.io/badge/Responsive-Design-blueviolet?style=flat" alt="Responsive Design">
</p>

<p align="center">
  <a href="#preview">Preview</a> ·
  <a href="#atividades">Atividades</a> ·
  <a href="#provas">Provas</a> ·
  <a href="#estrutura">Estrutura</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#rodando">Rodando</a>
</p>

</div>

---

Repositório com todas as atividades práticas, simulado e prova do primeiro semestre da faculdade de Desenvolvimento Fullstack. Cada atividade demonstra uma competency diferente de front-end web development, desde HTML semântico e CSS com flexbox/grid até Canvas API e manipulação do DOM com JavaScript vanilla.

## Preview

<p align="center">
  <img src="atividade-principal/imagens/logouser.png" alt="Atividade Principal" width="80">
</p>

<p align="center">
  <em>Hub principal com cards responsivos que linkam para cada atividade.</em>
</p>

```
┌─────────────────────────────────────────────────────────┐
│  🐦  RAFAELmagalhães_barreto                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │  Sobre Mim       │  │  Cópia do Site    │            │
│  │  Atividade 3     │  │  Atividade 3      │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │  Adivinhação     │  │  Canvas           │            │
│  │  Atividade 4     │  │  Atividade 5      │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │  Animação        │  │  Cadastro         │            │
│  │  Atividade 6     │  │  Atividade 8      │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Atividades

| # | Atividade | O que demonstra |
|---|---|---|
| 3 | **Cópia do Site** | HTML semântico, tabelas, iframes (YouTube + Google Maps), hyperlinks, imagens |
| 4 | **Jogo da Adivinhação** | JavaScript vanilla: `Math.random()`, validação de input, manipulação do DOM, contagem de tentativas |
| 5 | **Canvas — Desenho** | HTML5 Canvas API: `fillRect`, `arc`, `lineTo`, `beginPath` — cena com casa, árvore, sol e carro |
| 6 | **Canvas — Animação** | `requestAnimationFrame`, tracking de mouse, trail com transparência progressiva |
| 8 | **Formulário / Servidor** | HTML forms (GET/POST), validação com `required`, confirmação antes de envio |
| — | **Sobre Mim** | Hero banner com imagem desfocada, tipografia e layout responsivo |

## Provas

| Prova | O que é |
|---|---|
| **Simulado (p1simulado/)** | Clone da página do jornal "Correio 24 Horas" — navbar, grid de notícias, iframe do YouTube, footer |
| **Prova Oficial (p1oficial/)** | Clone da landing page "Clipboard" — flexbox, gradientes, SVG icons, botões com hover, footer responsivo |

## Estrutura

```
atividade_fullstack_1semestre/
│
├── index.html                         # Redirect → atividade-principal/
├── README.md
│
├── atividade-principal/               # Hub principal
│   ├── common.css                     # CSS compartilhado (reset, navbar, responsivo)
│   ├── index.html → 1home.html        # Página inicial com grid de cards
│   ├── 1home.html                     # Home page
│   ├── 1style.css                     # Estilos da home + about me
│   ├── 1script.js                     # JS auxiliar
│   ├── 2sobremim.html                 # Página "Sobre Mim"
│   ├── 3atividade.html                # Atividade 3: C++ e Java
│   ├── 3style.css
│   ├── 4home.html                     # Atividade 4: Jogo da Adivinhação
│   ├── 4style.css
│   ├── 4script.js                     # Lógica do jogo (validação, tentativas, novo jogo)
│   ├── 5atividade.html                # Atividade 5: Canvas Desenho
│   ├── 5style.css
│   ├── 5script.js                     # Desenho da cena com Canvas API
│   ├── 6atividade.html                # Atividade 6: Canvas Animação
│   ├── 6style.css
│   ├── 6script.js                     # Círculo que segue o mouse com trail
│   ├── 8atividade.html                # Atividade 8: Formulários
│   ├── 8style.css
│   ├── 8script.js                     # Validação e confirmação de formulários
│   └── imagens/                       # Assets de imagem
│
├── p1simulado/                        # Simulado: clone do Correio 24 Horas
│   ├── home.html
│   ├── style.css
│   └── *.png                          # Imagens do jornal
│
├── p1oficial/                         # Prova: clone da landing page Clipboard
│   ├── home.html
│   ├── style.css
│   └── Imagens/                       # SVGs e PNGs do Clipboard
│
└── .gitignore
```

## Tech Stack

| Camada | Tecnologia |
|---|---|
| Markup | HTML5 semântico (`<main>`, `<section>`, `<article>`, `<nav>`, `<figure>`) |
| Estilo | CSS3 — Flexbox, Grid, gradients, `mask-image`, transições, media queries |
| Scripting | JavaScript vanilla — DOM API, Canvas 2D, `requestAnimationFrame` |
| Responsividade | CSS Grid + Flexbox + media queries (mobile-first) |
| Acessibilidade | `lang="pt-BR"`, `alt` text em todas as imagens, navegação por `<a href>` |
| Versionamento | Git + GitHub |

## Rodando

O projeto é estático — não precisa de build tools nem servidor para rodar. Basta abrir `index.html` no navegador.

```bash
# Clone o repositório
git clone https://github.com/usuario/atividade_fullstack_1semestre.git
cd atividade_fullstack_1semestre

# Abra no navegador
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux
```

> **Dica:** para testar a página de formulários (Atividade 8), que faz requisições para `/inicio` e `/cadastro`, é necessário um servidor backend. O arquivo `Servidor.zip` contém a implementação do servidor.

### Com Live Server (VS Code)

```bash
# Instale a extensão "Live Server" no VS Code
# Clique com botão direito em index.html → "Open with Live Server"
```

## Funcionalidades Principais

| Feature | Descrição |
|---|---|
| **Navegação por links** | Navegação semântica via `<a href>` — acessível, bookmarkável, funciona com botão direito |
| **Grid responsivo** | Layout de cards com CSS Grid que se adapta de 2 colunas → 1 coluna em mobile |
| **Navbar compartilhada** | CSS comum (`common.css`) eliminando duplicação da barra de navegação |
| **Jogo completo** | Validação de input, contador de tentativas, botão "Novo Jogo", suporte a tecla Enter |
| **Canvas desenho** | Cena completa desenhada via Canvas API (casa, árvore, sol, carro, céu) |
| **Canvas animação** | Círculo que segue o mouse com efeito de trail (rastro fading) |
| **Formulários** | Campos obrigatórios, confirmação antes de enviar, layout estilizado |
| **Acessibilidade** | `lang="pt-BR"`, `alt` text descritivos, contraste de cores, HTML semântico |

## Melhorias Aplicadas

O projeto passou por uma revisão completa. As principais melhorias foram:

| Antes | Depois |
|---|---|
| `lang="en"` em todas as páginas | `lang="pt-BR"` |
| `<title>Document</title>` | Títulos descritivos por página |
| Navegação via `onclick` + `window.location.href` | Links `<a href>` semânticos |
| CSS duplicado 6x (navbar) | Arquivo `common.css` compartilhado |
| `height: 300` (sem unidade) | `height: 300px` |
| Layout fixo 1905px | Layout responsivo com `max-width` e media queries |
| Jogo sem validação | Validação completa + botão "Novo Jogo" |
| Links W3Schools todos iguais | Links corretos para HTML, CSS e JavaScript |
| `<P>` maiúsculo | `<p>` minúsculo (padrão HTML) |
| Typo "compy" | Corrigido para "copy" |
| Typo "Formulálio" / "Fomulário" | Corrigido para "Formulário" |
| `8script.js` vazio | Validação de formulário com confirmação |
| Sem `.gitignore` | `.gitignore` adicionado |
| Canvas responsivo com coordenadas erradas | Coordenadas calculadas via `scaleX/scaleY` |

## License

Projeto acadêmico — uso livre para fins educacionais.
