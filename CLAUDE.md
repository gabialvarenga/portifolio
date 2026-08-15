# CLAUDE.md

Guia para trabalhar neste repositório. Leia antes de alterar qualquer coisa.

## O que é o projeto

Portfólio de landing pages da dupla **Carlos & Gabriela**, com divulgação da **Rebeca**. Site único, sem build, com duas frentes:

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
- `--bp-stamp #D2452C` — acento "carimbo de revisão": CTAs, números, marcações

**Tipografia** — títulos em **Space Grotesk** (já carregada no Google Fonts do projeto, antes não usada em lugar nenhum — não adicionar Playfair Display de volta nos títulos do portfólio). Corpo continua Inter, legendas/anotações continuam JetBrains Mono.

**Ritmo das seções** — faixas alternando navy e paper, começando e terminando em navy (hero e CTA final fazem um "bookend"):
1. Hero — navy. Elemento-assinatura: diagrama estático da anatomia de uma landing page, com linhas de chamada reais ligando cada anotação à região certa (não pontinhos numerados soltos).
2. Serviços — paper.
3. Projetos/cases — navy, cards de case como folhas de papel presas na prancheta.
4. Como funciona — paper (numeração 01–04 se justifica aqui: é uma sequência real).
5. Contato (CTA final) — navy.
6. Nav — barra fixa navy translúcida com blur, constante em todas as faixas.
7. Footer — navy.

O mockup de blueprint dos cases (`previewInner()` em `js/projects.js`, classes `.bp`/`.marker`/`.frame`) já foi restilizado com os tokens `--bp-*` (ver `.portfolio .bp` etc. em `css/styles.css`) — ele só aparece dentro do portfólio (nos cards de case), nunca nas landing pages individuais.

**Landing pages individuais não seguem esse sistema** — cada uma (Professora, Clínica, Advocacia, e as futuras) mantém identidade própria, isolada por CSS escopado. O sistema "blueprint" é exclusivo da home do portfólio.

## Verificação

Não existe suíte de testes. Para validar mudanças visuais, suba um servidor estático (`.claude/launch.json` já tem `portfolio-static` configurado — mude a porta ali se estiver ocupada) e confira no navegador — nunca declare uma mudança visual pronta sem ver renderizada. Atenção a cache do navegador ao testar: um hard refresh nem sempre basta para os `<script src>`; se o conteúdo parecer desatualizado mesmo após editar o arquivo, confirme via `fetch(url, {cache:'no-store'})` e, se preciso, troque a porta do servidor para forçar uma origem sem cache.
