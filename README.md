Repositório com todas as atividades práticas, simulado e prova do primeiro semestre da faculdade de Desenvolvimento Fullstack. Cada atividade demonstra uma competency diferente de front-end web development, desde HTML semântico e CSS com flexbox/grid até Canvas API e manipulação do DOM com JavaScript vanilla.

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
