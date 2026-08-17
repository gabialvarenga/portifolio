# CLAUDE.md

Guia para trabalhar neste repositório. Leia antes de alterar qualquer coisa.

## O que é o projeto

Portfólio de landing pages do trio **Carlos, Gabriela e Rebeca** — Carlos e Gabriela cuidam do desenvolvimento, Rebeca cuida da divulgação. Site único, sem build, com duas frentes:

1. **Portfólio** (`#/`) — vitrine dos projetos/cases.
2. **Landing pages demonstrativas** (`#/landing/:id`) — cada case pode ter a sua, com identidade visual própria.

Detalhes de rotas, arquitetura de arquivos e como rodar: ver [README.md](README.md).

## Regra de nome do produto

**Não existe nome de marca definido para este sistema.** Nunca introduza um nome de produto/placeholder (ex.: "Trinca", "Traço" ou qualquer outro) em código, textos, commits ou documentação. Use termos genéricos: "Portfólio", "Sistema", "Plataforma". Se um arquivo trazido de fora (ex.: um HTML pronto) contiver um nome desses, remova antes de integrar.

## Restrição técnica (inegociável)

- HTML5 + CSS3 + JavaScript puro. Sem frameworks, sem TypeScript, sem build, sem npm.
- Scripts em `<script src="...">` simples — **nunca `type="module"`** — porque o site precisa continuar abrindo direto via duplo-clique no `index.html` (`file://`), e módulos ES quebram por CORS nesse protocolo.
- Qualquer novo arquivo JS/CSS entra como mais um `<link>`/`<script>` no `index.html`, carregado na ordem certa (dependências antes de quem depende delas).

## Escopo atual: fora de escopo por enquanto

A rota `#/dashboard` e todo o rastreamento de eventos (`js/analytics.js`, `js/dashboard.js`: `portfolio_view`, `project_view`, `landing_page_view`, `contact_click`, captura de UTM) são uso interno da Rebeca e estão **congelados** — não desenvolva, não expanda, não refatore essa parte a menos que o usuário peça explicitamente para tirá-la desse estado. Pode continuar *chamando* o `track()` existente a partir de conteúdo novo (ex.: CTA de uma landing page nova) — isso é reuso, não é expandir a feature.

## Como adicionar uma landing page nova

1. Case novo em `CASES` (`js/projects.js`), `status: PROJECT_STATUS.LIVE`.
2. Se tiver identidade visual própria (CSS extenso), criar `css/landing-<id>.css` com **todo seletor prefixado por uma classe única** (`.lp-<id> .hero{...}`, `.lp-<id> h1{...}`, etc.) — inclusive seletores de elemento (`body`, `section`, `footer`, `h1,h2,h3`, `p`, `a`) que no arquivo original não eram escopados. Sem isso, o CSS vaza pro resto da SPA (é tudo uma stylesheet global, não por rota). Ligar o arquivo em `index.html`.
3. Função de render em `js/landing-<id>.js` (arquivo próprio, um por landing page), HTML todo dentro de `<div class="lp-<id>">...</div>`. Trocar qualquer link/texto de "voltar" para `#/` e créditos para "Carlos & Gabriela" (nunca reaproveitar nome de marca de um arquivo externo). Componentes compartilhados (`nav()`, `footer()`, `themeToggleBtn()`, `demoBadge()`) vêm de `js/shared.js`.
4. Ligar `js/landing-<id>.js` em `index.html`, **antes** de `js/landing-registry.js`, e registrar a função lá: `LANDING_PAGES['<id>'] = renderMinhaLanding`.

O roteador e o `track('landing_page_view', id)` já funcionam pra qualquer id novo automaticamente — não precisa mexer em `js/router.js`.

## Sistema visual do portfólio ("blueprint")

O portfólio (home, `#/`, código em `js/portfolio.js`) tem identidade própria e fixa — **não** segue mais o alternador claro/escuro (esse toggle foi removido só do portfólio; `toggleTheme()` em `js/shared.js` continua existindo e é usado pela landing da Professora e pelo dashboard, que mantêm seus próprios esquemas).

Conceito: a home parece uma prancheta de desenho técnico — o produto de vocês é literalmente desenhar a página antes de construir, e o visual leva isso ao pé da letra.

**Cor** (tokens dedicados, prefixo `--bp-`, não confundir com `--ink`/`--paper` do sistema antigo que o dashboard ainda usa):
- `--bp-navy #0E2A47` — fundo das faixas escuras
- `--bp-navy-2 #163A5E` — superfícies sobre navy (nav, cards escuros)
- `--bp-line #6FA8C7` — grade/hairlines ciano sobre navy
- `--bp-paper #EAF2F6` — fundo das faixas claras / cards "de papel" flutuando sobre navy
- `--bp-paper-2 #DCE8ED` — tom secundário de papel
- `--bp-ink #0B1B2B` — texto sobre paper
- `--bp-chalk #F3F7FA` — texto sobre navy
- `--bp-stamp #0891B2` — acento (teal/ciano saturado, combina com `--bp-line`): CTAs, números, marcações

**Tipografia** — títulos em **Poppins** (carregada no Google Fonts do projeto). Corpo continua Inter, legendas/anotações continuam JetBrains Mono.

**Marca** — símbolo abstrato do próprio vocabulário de desenho técnico (corte de canto de prancheta + linha de cota com pino), não um nome de produto (ver "Regra de nome do produto" acima). Definido em `brandMark()` (`js/shared.js`), usado em três escalas: pequeno no nav (dentro de `.brand`), grande e bem sutil como marca-d'água nas faixas navy (`brandWatermark()`, classes `.wm-host`/`.bp-watermark`) e pequeno de novo como marca de canto nos cards da seção "quem faz" (`.team-mark`). Ao criar uma nova aplicação da marca, reaproveite `brandMark()` — não desenhe um símbolo novo solto.

**Ritmo das seções** — faixas alternando navy e paper, começando e terminando em navy (hero e contato fazem um "bookend"):
1. Hero — navy. Elemento-assinatura: diagrama estático da anatomia de uma landing page, com linhas de chamada reais ligando cada anotação à região certa (não pontinhos numerados soltos). Também carrega a marca-d'água (`wm-hero`).
2. Serviços — paper. Três cards numerados 01–03 (`.services-grid`/`.service-card`). **Esses seletores são escopados sob `.portfolio` de propósito**: a landing da Clínica usa as mesmas classes no seu markup, e um seletor global vazaria para dentro dela.
3. Projetos/cases — navy. **Só entram os cases com `status: LIVE`** (`renderHome()` filtra). Linhas largas empilhadas (`.case-list`/`.case-card`, grid de duas colunas): preview clicável à esquerda; à direita a etiqueta "Case conceitual", título, resumo, botão "Ver página" e um `<details>` discreto com as decisões. Cases sem landing page ficam em `CASES` como planejamento e não aparecem na home — nada de selo "em breve" para o visitante.
4. Como funciona — paper. Etapas 01–04 (`.process-grid`/`.step`), com a linha superior animando ao entrar na tela.
5. FAQ — navy. Acordeão (`.faq-list`, `<details>`), itens em largura total da faixa, com o `<summary>` ocupando a linha inteira como área de clique.
6. Contato (CTA final) — `band-navy-2`, com a marca-d'água (`wm-cta`). Como FAQ e contato são duas faixas escuras vizinhas, o contato usa o navy secundário (`--bp-navy-2`) mais uma hairline no topo: só o navy puro fazia as duas lerem como uma faixa contínua.
7. Nav — barra fixa navy translúcida com blur, constante em todas as faixas.
8. Footer — navy. Inclui o carimbo decorativo `.bp-stamp-mark` ("Prancha 01 · Rev. ..."), visível só dentro do portfólio (`display:none` fora de `.portfolio`, já que o `footer()` é compartilhado com as landing pages e o dashboard).

O mockup de blueprint dos cases (`previewInner()` em `js/projects.js`, classes `.bp`/`.marker`/`.frame`) já foi restilizado com os tokens `--bp-*` (ver `.portfolio .bp` etc. em `css/styles.css`) — ele só aparece dentro do portfólio (nos cards de case), nunca nas landing pages individuais.

**Âncoras internas da home** — duas armadilhas, ambas já resolvidas em `js/shared.js`:

1. O roteador é por hash, então um `href="#secao"` que siga seu curso normal dispara `hashchange`, cai no `else` do `render()` e redesenha a home com `scrollTo(0,0)` (o clique parece não fazer nada). Toda âncora interna usa `goToSection(event, id)`, que cancela o default e só rola.
2. A barra do topo é sticky, então rolar até uma seção escondia o título dela atrás da barra. `syncNavHeight()` mede a altura real da barra e publica em `--nav-h`; o CSS usa `section[id]{scroll-margin-top:calc(var(--nav-h) + 1.25rem)}`. É medido, não chutado, porque a barra muda de altura conforme a largura da tela — ao mexer no nav, não é preciso ajustar número nenhum.

**Landing pages individuais não seguem esse sistema** — cada uma (Professora, Clínica, Advocacia, e as futuras) mantém identidade própria, isolada por CSS escopado. O sistema "blueprint" é exclusivo da home do portfólio.

## Verificação

Não existe suíte de testes. Para validar mudanças visuais, suba um servidor estático (`.claude/launch.json` já tem `portfolio-static` configurado — mude a porta ali se estiver ocupada) e confira no navegador — nunca declare uma mudança visual pronta sem ver renderizada. Atenção a cache do navegador ao testar: um hard refresh nem sempre basta para os `<script src>`; se o conteúdo parecer desatualizado mesmo após editar o arquivo, confirme via `fetch(url, {cache:'no-store'})` e, se preciso, troque a porta do servidor para forçar uma origem sem cache.
