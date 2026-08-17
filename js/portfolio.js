/* ---------- diagrama-assinatura do hero ----------
 * Anatomia anotada de uma landing page: cada linha de chamada liga
 * uma região do wireframe a uma legenda real em .hero-legend — não
 * são pontos numerados soltos, a numeração aqui carrega informação.
 */
function heroBlueprintDiagram(){
  return `<div class="hero-diagram">
    <svg viewBox="0 0 545 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama anotado da anatomia de uma landing page: título direto, CTA sem precisar rolar, prova social e formulário curto">
      <rect class="hd-card" x="8" y="8" width="480" height="384" rx="8"/>
      <circle class="hd-dot" cx="28" cy="32" r="4"/>
      <circle class="hd-dot" cx="44" cy="32" r="4"/>
      <circle class="hd-dot" cx="60" cy="32" r="4"/>
      <rect class="hd-bar" x="84" y="27" width="380" height="10" rx="3"/>
      <line class="hd-div" x1="24" y1="48" x2="472" y2="48"/>
      <rect class="hd-headline" x="40" y="76" width="280" height="16" rx="3" opacity=".85"/>
      <rect class="hd-headline" x="40" y="100" width="170" height="16" rx="3" opacity=".55"/>
      <rect class="hd-cta" x="40" y="138" width="160" height="38" rx="5"/>
      <rect class="hd-box" x="40" y="200" width="136" height="54" rx="4" stroke-dasharray="4 3"/>
      <rect class="hd-box" x="192" y="200" width="136" height="54" rx="4" stroke-dasharray="4 3"/>
      <rect class="hd-box" x="344" y="200" width="136" height="54" rx="4" stroke-dasharray="4 3"/>
      <rect class="hd-form" x="40" y="278" width="440" height="92" rx="5" stroke-dasharray="4 3"/>
      <rect class="hd-field" x="56" y="296" width="220" height="12" rx="3"/>
      <rect class="hd-fbtn" x="56" y="330" width="130" height="28" rx="4"/>
      <line class="hd-leader" x1="320" y1="84" x2="515" y2="60" stroke-dasharray="3 3"/>
      <circle class="hd-pin" cx="515" cy="60" r="13"/>
      <text class="hd-pin-text" x="515" y="64" text-anchor="middle">1</text>
      <line class="hd-leader" x1="200" y1="157" x2="515" y2="140" stroke-dasharray="3 3"/>
      <circle class="hd-pin" cx="515" cy="140" r="13"/>
      <text class="hd-pin-text" x="515" y="144" text-anchor="middle">2</text>
      <line class="hd-leader" x1="480" y1="227" x2="515" y2="220" stroke-dasharray="3 3"/>
      <circle class="hd-pin" cx="515" cy="220" r="13"/>
      <text class="hd-pin-text" x="515" y="224" text-anchor="middle">3</text>
      <line class="hd-leader" x1="480" y1="324" x2="515" y2="300" stroke-dasharray="3 3"/>
      <circle class="hd-pin" cx="515" cy="300" r="13"/>
      <text class="hd-pin-text" x="515" y="304" text-anchor="middle">4</text>
    </svg>
  </div>`;
}

/* ---------- HOME (portfólio) ---------- */
function renderHome(){
  /* só os cases com landing page pronta entram na home; os demais
   * seguem em CASES aguardando a sua página. */
  const liveCases = Object.keys(CASES)
    .filter(id => CASES[id].status === PROJECT_STATUS.LIVE)
    .map(caseCardLive).join('');
  return `
  <div class="portfolio">
  ${nav()}
  <main>
    <section class="hero band-navy wm-host">
    ${brandWatermark('wm-hero')}
    <div class="wrap hero-grid">
      <div class="hero-anim">
        <span class="eyebrow">Landing pages &amp; divulgação</span>
        <h2 class="hero-title" style="font-size: clamp(2.5rem, 4vw, 3.35rem); line-height: 1.08;">Projetamos a página <em>antes</em> de construir.</h2>
        <p class="lead" style="font-size: 1.08rem; line-height: 1.7;">Cada seção com uma função, cada palavra com um motivo. Depois que a página entra no ar, cuidamos de quem chega nela.</p>
        <div class="hero-actions">
          <a href="#projetos" class="btn btn-primary" onclick="goToSection(event,'projetos')">Ver projetos</a>
          <a href="#contato" class="btn btn-ghost" onclick="goToSection(event,'contato')">Falar com a gente</a>
        </div>
      </div>
      <div class="hero-visual">
        ${heroBlueprintDiagram()}
        <ul class="hero-legend">
          <li><span class="num-badge">1</span>Título direto</li>
          <li><span class="num-badge">2</span>CTA sem rolar</li>
          <li><span class="num-badge">3</span>Prova social</li>
          <li><span class="num-badge">4</span>Formulário curto</li>
        </ul>
      </div>
    </div></section>

    <section id="servicos" class="band-paper"><div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">O que fazemos</span>
        <h2>Duas frentes, um só objetivo</h2>
      </div>
      <div class="services-grid">
        <div class="service-card reveal">
          <span class="idx">01</span>
          <h3>Desenvolvimento de landing pages</h3>
          <p>Páginas rápidas e responsivas, construídas em torno de um único objetivo, com rastreamento configurado desde o primeiro dia.</p>
        </div>
        <div class="service-card reveal d1">
          <span class="idx">02</span>
          <h3>Divulgação e tráfego pago</h3>
          <p>Planejamento e otimização de campanhas em Google Ads e Meta Ads, com relatórios simples de entender.</p>
        </div>
        <div class="service-card reveal d2">
          <span class="idx">03</span>
          <h3>Página e campanha juntas</h3>
          <p>As duas frentes acompanhadas pelas mesmas pessoas, para o anúncio levar exatamente ao que promete.</p>
        </div>
      </div>
    </div></section>

    <section id="projetos" class="band-navy"><div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Projetos</span>
        <h2>Algumas páginas que construímos</h2>
        <p>Os projetos apresentados são cases conceituais desenvolvidos para demonstrar diferentes possibilidades de aplicação.</p>
      </div>
      <div class="case-list">${liveCases}</div>
    </div></section>

    <section id="processo" class="band-paper"><div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Como funciona</span>
        <h2>Como uma página toma forma</h2>
      </div>
      <div class="process-grid">
        <div class="step reveal"><span class="n">01</span><h3>Diagnóstico</h3><p>Entendemos o negócio, o público e o que a página precisa fazer.</p></div>
        <div class="step reveal d1"><span class="n">02</span><h3>Landing page</h3><p>Organizamos conteúdo, estrutura e interface em torno do objetivo definido.</p></div>
        <div class="step reveal d2"><span class="n">03</span><h3>Campanha</h3><p>Quando há divulgação, conectamos a campanha à página e configuramos o acompanhamento das conversões.</p></div>
        <div class="step reveal d3"><span class="n">04</span><h3>Acompanhamento</h3><p>Acompanhamos os dados da página e das campanhas para identificar o que precisa ser ajustado.</p></div>
      </div>
    </div></section>

    <section id="faq" class="band-navy"><div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Perguntas frequentes</span>
        <h2>Antes de conversar</h2>
      </div>
      <div class="faq-list reveal">
        <details class="faq-item">
          <summary>Preciso já ter um site pronto?</summary>
          <p>Não. A landing page pode ser criada como uma página independente, mesmo que você ainda não tenha um site.</p>
        </details>
        <details class="faq-item">
          <summary>Quanto tempo leva?</summary>
          <p>O prazo depende do escopo do projeto. Definimos as etapas e a entrega antes de começar.</p>
        </details>
        <details class="faq-item">
          <summary>Como funciona o início?</summary>
          <p>Começamos entendendo o negócio, o público e o objetivo da página. A partir disso, definimos escopo, prazo e, se fizer sentido, a estratégia de divulgação.</p>
        </details>
        <details class="faq-item">
          <summary>A divulgação é obrigatória?</summary>
          <p>Não. A landing page pode ser desenvolvida de forma independente. A divulgação é uma etapa adicional, caso faça sentido para o projeto.</p>
        </details>
      </div>
    </div></section>

    <section id="contato" class="band-navy-2 wm-host">
    ${brandWatermark('wm-cta')}
    <div class="wrap">
      <div class="cta-box frame reveal">
        <span class="eyebrow" style="justify-content:center">Vamos conversar</span>
        <h2>Tem um projeto em mente?</h2>
        <p>Conte um pouco sobre o negócio e o que você precisa. A partir disso, pensamos na estrutura da página.</p>
        <div class="cta-actions">
          <a href="https://wa.me/5531999999999" class="btn btn-primary" onclick="track('contact_click', null)">Chamar no WhatsApp</a>
          <a href="mailto:gabrielaalvarengc@gmail.com" class="btn btn-ghost" onclick="track('contact_click', null)">Enviar e-mail</a>
        </div>
      </div>
    </div></section>
  </main>
  ${footer()}
  </div>
  `;
}
