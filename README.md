# Trinca — Landing Pages & Divulgação

Portfólio de landing pages desenvolvido pela dupla **Carlos & Gabriela**, com divulgação por **Rebeca**.

## O que é

Um site único (`index.html`, HTML/CSS/JS vanilla, sem build) que reúne três partes:

1. **Portfólio** — vitrine dos projetos (cases) de landing page, com estrutura Desafio → O que a página resolve → Estratégia de divulgação.
2. **Landing pages demonstrativas** — cada case tem (ou terá) sua própria landing page, com identidade visual independente do portfólio. A primeira pronta é a da **Professora de Inglês** (`#/landing/professora-ingles`).
3. **Painel de divulgação** (`#/dashboard`) — funil de conversão e métricas por projeto/campanha, calculado a partir de eventos reais (não números fixos), com captura de UTM.

## Como rodar

Não precisa de build. Basta abrir `index.html` no navegador, ou servir a pasta:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Rastreamento de eventos

Eventos (`portfolio_view`, `project_view`, `landing_page_view`, `contact_click`) são registrados via `window.storage` (API de persistência do ambiente Claude Artifacts) e agregados no painel `#/dashboard`. **Fora do Claude.ai, `window.storage` não existe** — ao portar para produção, será necessário trocar essa camada por uma API própria (ver `docs/tracking.md`, a criar) ou por analytics (GA4/Meta Pixel), como no roadmap abaixo.

## Estrutura

```
index.html      → aplicação inteira (SPA com roteamento por hash)
README.md       → este arquivo
```

## Roadmap

- [ ] Cases completos: Clínica, Restaurante, Marca de Moda (hoje são "projeto-conceito" sem landing page própria)
- [ ] Separar em múltiplos arquivos (componentização) se o projeto crescer
- [ ] Substituir `window.storage` por backend real (ou GA4/Meta Pixel) para rastreamento fora do Claude.ai
- [ ] Modo claro/escuro (implementado — revisar contraste em dark mode nas seções restantes)
- [ ] Deploy (Vercel/Netlify/GitHub Pages)

## Créditos

Desenvolvido por **Carlos & Gabriela**. Divulgação por **Rebeca**.
