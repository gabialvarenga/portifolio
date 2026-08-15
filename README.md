# Portfólio de Landing Pages

Sistema de portfólio desenvolvido pela dupla **Carlos & Gabriela** para apresentar as landing pages que desenvolvemos: uma vitrine dos projetos/cases, com cada case abrindo em sua própria landing page demonstrativa.

> O nome do produto ainda não está definido. Enquanto isso, o projeto é tratado apenas como "Portfólio" / "Sistema".

## O que é

Um site único, sem build, que reúne duas partes:

1. **Portfólio** (`#/`) — vitrine dos projetos/cases de landing page, com a estrutura Desafio → O que a página resolve → Estratégia de divulgação → CTA para ver a landing page.
2. **Landing pages demonstrativas** — cada case tem (ou terá) sua própria landing page, com identidade visual independente do portfólio e do restante do site. Prontas até agora: **Professora de Inglês** (`#/landing/professora-ingles`), **Clínica Sorriso** (`#/landing/clinica`) e **Bastos & Vieira Advocacia** (`#/landing/advocacia`).

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

```
index.html          → shell HTML: <link> do CSS e <script> dos arquivos JS, em ordem
css/
  styles.css              → CSS do portfólio (sistema "blueprint") + landing da Professora (.lp) + dashboard
  landing-advocacia.css   → CSS isolado da landing da Advocacia, sob .lp-advocacia
  landing-clinica.css     → CSS isolado da landing da Clínica, sob .lp-clinica
js/
  storage.js                    → storageService: única camada que fala com window.storage
  analytics.js                   → rastreamento de eventos (congelado, ver "Fora de escopo")
  projects.js                     → dados dos cases (CASES), status de cada projeto, cards do portfólio
  dashboard.js                     → painel de divulgação (congelado, ver "Fora de escopo")
  shared.js                         → tema claro/escuro, nav()/footer() compartilhados, 404, observers
  portfolio.js                       → página inicial (renderHome) + diagrama-assinatura do hero
  landing-professora-ingles.js        → landing page da Professora de Inglês
  landing-advocacia.js                 → landing page da Advocacia
  landing-clinica.js                    → landing page da Clínica
  landing-registry.js                    → LANDING_PAGES + renderLanding(id)
  router.js                               → roteamento por hash e boot da aplicação
```

## Rotas

| Rota | Renderiza |
|---|---|
| `#/` (ou vazio) | Portfólio (`renderHome`) |
| `#/landing/:id` | Landing page do projeto, se existir (`renderLanding`) |
| `#/landing/:id` (sem landing page própria) | Página "não encontrada" (`renderNotFound`) |
| `#/dashboard` | Painel de divulgação (congelado) |

## Projetos e status

Cada projeto é uma entrada em `CASES` (`js/projects.js`), com um `status`:

- `live` — tem landing page própria, aparece com "Ver landing page →"
- `in-progress` — landing page em desenvolvimento
- `coming-soon` — landing page prevista, ainda não iniciada
- `concept` — projeto-conceito, sem landing page própria prevista

Projetos sem `status: 'live'` continuam apresentáveis no portfólio (desafio, solução, estratégia), só não têm link de landing page — mostram um selo com o estado atual em vez de parecer quebrado.

## Como adicionar uma nova landing page

1. Adicionar o case em `CASES` (`js/projects.js`), com `status: PROJECT_STATUS.LIVE`.
2. Se a landing tiver identidade visual própria com CSS extenso, criar um arquivo `css/landing-<id>.css` com todos os seletores prefixados por uma classe única (ex.: `.lp-<id> .hero{...}`) — isso evita que o CSS de uma landing vaze para outra ou para o portfólio. Ligar o arquivo em `index.html`. Para uma variação simples, dá pra reaproveitar o padrão `.lp` já existente em `css/styles.css`.
3. Criar `js/landing-<id>.js` com a função de render da landing page, HTML todo dentro de um elemento raiz com a classe usada no passo 2 (ex.: `<div class="lp-<id>">...</div>`). Componentes compartilhados (`nav()`, `footer()`, `themeToggleBtn()`, `demoBadge()`) vêm de `js/shared.js`.
4. Ligar `js/landing-<id>.js` em `index.html`, antes de `js/landing-registry.js`, e registrar a função em `LANDING_PAGES` (`js/landing-registry.js`) com a chave igual ao id do case.

Não é necessário duplicar boilerplate — o roteador (`js/router.js`) e o rastreamento de `landing_page_view` já funcionam para qualquer id novo automaticamente.

## Fora de escopo (por enquanto)

A rota `#/dashboard`, o rastreamento de eventos (`portfolio_view`, `project_view`, `landing_page_view`, `contact_click`) e a captura de UTM são uso interno da Rebeca (divulgação/campanhas). Esse código foi apenas **realocado** para `js/analytics.js` e `js/dashboard.js` durante a reorganização em arquivos — o comportamento não mudou. Não é o foco de desenvolvimento atual; evoluir rastreamento, funil, UTM ou análise de campanhas fica para uma etapa futura.

## Limitações atuais

- `window.storage` (usado pelo tema e pelo rastreamento congelado) só existe dentro do ambiente Claude Artifacts. Fora dele, `storageService` (`js/storage.js`) cai automaticamente num fallback em memória — a aplicação não quebra, mas nada persiste entre recarregamentos da página.
- 2 dos 5 projetos do portfólio (Restaurante, Marca de Moda) ainda não têm landing page própria.
- A navegação do topo (`nav-links`) fica oculta em telas estreitas, sem um menu alternativo — funciona por rolagem, mas ainda não tem um menu mobile dedicado.

## Roadmap

- [ ] Landing page do Restaurante & delivery
- [ ] Landing page da Loja de moda
- [ ] Menu de navegação para telas estreitas (mobile)
- [ ] Revisão de acessibilidade (foco por teclado, `aria-label`, contraste) nas landing pages novas
- [ ] Retomar o painel de divulgação/rastreamento como etapa própria, quando entrar no escopo

## Créditos

Desenvolvido por **Carlos & Gabriela**. Divulgação por **Rebeca**.
