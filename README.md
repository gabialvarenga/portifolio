# Portfólio de Landing Pages

Sistema de portfólio desenvolvido pelo trio **Carlos, Gabriela e Rebeca** para apresentar as landing pages que desenvolvemos: uma vitrine dos projetos/cases, com cada case abrindo em sua própria landing page demonstrativa. Carlos e Gabriela cuidam do desenvolvimento; Rebeca cuida da divulgação.

> O nome do produto ainda não está definido. Enquanto isso, o projeto é tratado apenas como "Portfólio" / "Sistema".

## O que é

Um site único, sem build, que reúne duas partes:

1. **Portfólio** (`#/`) — vitrine dos projetos/cases de landing page, com a estrutura Desafio → O que a página resolve → Estratégia de divulgação → CTA para ver a landing page.
2. **Landing pages demonstrativas** — cada case tem (ou terá) sua própria landing page, com identidade visual independente do portfólio e do restante do site. Prontas até agora: **Professora de Inglês** (`#/landing/professora-ingles`), **Clínica Sorriso** (`#/landing/clinica`), **Bastos & Vieira Advocacia** (`#/landing/advocacia`) e **Braseiro** (`#/landing/restaurante`).

Também existe uma rota `#/dashboard` (painel de divulgação / rastreamento de eventos) herdada da versão anterior do projeto. **Está fora do escopo de desenvolvimento no momento** — ver seção [Fora de escopo](#fora-de-escopo-por-enquanto) abaixo.

## Como rodar

Não precisa de build. Basta abrir `index.html` no navegador, ou servir a pasta (recomendado, para as fontes e o roteamento por hash funcionarem sem restrições de `file://`):

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Restrição técnica

O projeto usa exclusivamente **HTML5, CSS3 e JavaScript puro** — sem frameworks, sem TypeScript, sem processo de build e sem dependências de npm. Os arquivos JS são carregados como `<script>` simples (não como módulos ES), justamente para que o site continue abrindo direto pelo `index.html` via `file://` sem bloqueio de CORS.

## Estrutura

Cada página do site (portfólio, dashboard, cada landing page) mora na própria pasta, com o JS e o CSS dela lado a lado. Isso é deliberado: as 4 landing pages abaixo são cases demonstrativos, e a ideia é que cada uma possa ser removida — ou substituída por uma landing page real de cliente — apagando só a pasta dela, sem tocar no resto do site. Ver "Como adicionar uma nova landing page" logo abaixo.

```
index.html                     → shell HTML: <link> do CSS e <script> dos arquivos JS, em ordem
core/                          → infraestrutura compartilhada por todas as páginas
  base.css                        → tokens, reset e estilos base (nav, botões, hero, cards...) — usado pelo portfólio e pela página 404
  storage.js                      → storageService: única camada que fala com window.storage
  analytics.js                    → rastreamento de eventos (congelado, ver "Fora de escopo")
  projects.js                     → dados dos cases (CASES), status de cada projeto, cards do portfólio
  shared.js                       → tema claro/escuro, nav()/footer() compartilhados, 404, observers
  landing-registry.js             → LANDING_PAGES + renderLanding(id)
  router.js                       → roteamento por hash e boot da aplicação
portfolio/                     → página inicial, #/
  portfolio.css                   → re-skin "blueprint" sobre core/base.css, escopado sob .portfolio
  portfolio.js                    → renderHome() + diagrama-assinatura do hero
dashboard/                     → painel de divulgação, #/dashboard (congelado, ver "Fora de escopo")
  dashboard.css
  dashboard.js
landing-professora-ingles/     → #/landing/professora-ingles (case demonstrativo)
  landing-professora-ingles.css   → escopado sob .lp-professora
  landing-professora-ingles.js
landing-advocacia/             → #/landing/advocacia (case demonstrativo)
  landing-advocacia.css           → escopado sob .lp-advocacia
  landing-advocacia.js
landing-clinica/               → #/landing/clinica (case demonstrativo)
  landing-clinica.css             → escopado sob .lp-clinica
  landing-clinica.js
landing-restaurante/           → #/landing/restaurante (case demonstrativo)
  landing-restaurante.css         → escopado sob .lp-restaurante
  landing-restaurante.js
```

## Rotas

| Rota | Renderiza |
|---|---|
| `#/` (ou vazio) | Portfólio (`renderHome`) |
| `#/landing/:id` | Landing page do projeto, se existir (`renderLanding`) |
| `#/landing/:id` (sem landing page própria) | Página "não encontrada" (`renderNotFound`) |
| `#/dashboard` | Painel de divulgação (congelado) |

## Projetos e status

Cada projeto é uma entrada em `CASES` (`core/projects.js`), com um `status`:

- `live` — tem landing page própria, aparece com "Ver landing page →"
- `in-progress` — landing page em desenvolvimento
- `coming-soon` — landing page prevista, ainda não iniciada
- `concept` — projeto-conceito, sem landing page própria prevista

**A home só renderiza os projetos com `status: 'live'`.** Os demais continuam em `CASES` como planejamento (e no roadmap abaixo), mas não aparecem para o visitante — a vitrine mostra só o que está pronto, sem selos de "em breve".

## Como adicionar uma nova landing page

1. Adicionar o case em `CASES` (`core/projects.js`), com `status: PROJECT_STATUS.LIVE`.
2. Criar uma pasta `landing-<id>/` com dois arquivos:
   - `landing-<id>.css` — todos os seletores prefixados por uma classe única (ex.: `.lp-<id> .hero{...}`) — isso evita que o CSS de uma landing vaze para outra ou para o portfólio.
   - `landing-<id>.js` — função de render da landing page, HTML todo dentro de um elemento raiz com a classe usada acima (ex.: `<div class="lp-<id>">...</div>`). Componentes compartilhados (`nav()`, `footer()`, `themeToggleBtn()`, `demoBadge()`) vêm de `core/shared.js`.
3. Ligar os dois arquivos em `index.html` — o `<link>` do CSS perto dos outros `<link>`, o `<script>` do JS **antes** de `core/landing-registry.js` — e registrar a função em `LANDING_PAGES` (`core/landing-registry.js`) com a chave igual ao id do case.

Para **remover** uma landing page (ex.: trocar um case demonstrativo por um cliente real): apagar a pasta `landing-<id>/`, tirar o `<link>`/`<script>` correspondentes de `index.html` e a entrada de `LANDING_PAGES`. Se o case também não deve mais aparecer no portfólio, remover a entrada de `CASES` também.

Não é necessário duplicar boilerplate — o roteador (`core/router.js`) e o rastreamento de `landing_page_view` já funcionam para qualquer id novo automaticamente.

## Fora de escopo (por enquanto)

A rota `#/dashboard`, o rastreamento de eventos (`portfolio_view`, `project_view`, `landing_page_view`, `contact_click`) e a captura de UTM são uso interno da Rebeca (divulgação/campanhas). Esse código vive em `core/analytics.js` e `dashboard/dashboard.js` — o comportamento não mudou. Não é o foco de desenvolvimento atual; evoluir rastreamento, funil, UTM ou análise de campanhas fica para uma etapa futura.

## Limitações atuais

- `window.storage` (usado pelo tema e pelo rastreamento congelado) só existe dentro do ambiente Claude Artifacts. Fora dele, `storageService` (`core/storage.js`) cai automaticamente num fallback em memória — a aplicação não quebra, mas nada persiste entre recarregamentos da página.
- A navegação do topo (`nav-links`) fica oculta em telas estreitas, sem um menu alternativo — funciona por rolagem, mas ainda não tem um menu mobile dedicado.

## Roadmap

- [x] Landing page do Restaurante & delivery
- [ ] Menu de navegação para telas estreitas (mobile)
- [ ] Revisão de acessibilidade (foco por teclado, `aria-label`, contraste) nas landing pages novas
- [ ] Retomar o painel de divulgação/rastreamento como etapa própria, quando entrar no escopo

## Créditos

Desenvolvido por **Carlos, Gabriela e Rebeca**. Carlos e Gabriela: desenvolvimento. Rebeca: divulgação.
