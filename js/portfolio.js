/* ---------- diagrama-assinatura do hero ----------
 * Anatomia anotada de uma landing page: cada linha de chamada liga
 * uma região do wireframe a uma legenda real em .hero-legend — não
 * são pontos numerados soltos, a numeração aqui carrega informação.
 */
function heroBlueprintDiagram(){
  return `<div class="hero-diagram">
    <svg viewBox="0 0 545 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama anotado da anatomia de uma landing page: título, CTA, prova social e formulário">
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
  const cases = Object.keys(CASES).map(caseCard).join('');
  return `
  <div class="portfolio">
  ${nav()}
  <main>
    <section class="hero band-navy"><div class="wrap hero-grid">
      <div class="hero-anim">
        <span class="eyebrow">Landing pages &amp; divulgação</span>
        <h1>Projetamos a página antes de construir. Depois, cuidamos de quem chega nela.</h1>
        <p class="lead">Uma dupla enxuta: desenvolvemos landing pages com foco em conversão e trabalhamos junto da divulgação para levar as pessoas certas até elas — página e campanha pensadas como <em>uma coisa só</em>.</p>
        <div class="hero-actions">
          <a href="#projetos" class="btn btn-primary" onclick="scrollToId('projetos')">Ver projetos</a>
          <a href="#contato" class="btn btn-ghost" onclick="scrollToId('contato')">Falar com a gente</a>
        </div>
      </div>
      <div class="hero-visual">
        ${heroBlueprintDiagram()}
        <ul class="hero-legend">
          <li><span class="num-badge">1</span> Título direto, sem enrolação</li>
          <li><span class="num-badge">2</span> CTA visível sem precisar rolar a página</li>
          <li><span class="num-badge">3</span> Prova social logo abaixo da dobra</li>
          <li><span class="num-badge">4</span> Formulário curto — só o essencial</li>
        </ul>
      </div>
    </div></section>

    <section id="servicos" class="band-paper"><div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">O que fazemos</span>
        <h2>Duas frentes, um só objetivo: trazer resultado</h2>
      </div>
      <div class="services-grid">
        <div class="service-card reveal"><span class="idx">01</span><h3>Desenvolvimento de landing pages</h3><p>Páginas rápidas, responsivas e construídas em torno de um único objetivo por página. Rastreamento configurado desde o primeiro dia, não depois.</p></div>
        <div class="service-card reveal d1"><span class="idx">02</span><h3>Divulgação e tráfego pago</h3><p>Planejamento e otimização de campanhas em Google Ads e Meta Ads, com relatórios simples de entender — o que está trazendo retorno e o que precisa mudar.</p></div>
        <div class="service-card reveal d2"><span class="idx">03</span><h3>Página + campanha juntas</h3><p>Página e divulgação rodando lado a lado, acompanhadas pela mesma equipe — para o anúncio levar exatamente para o que ele promete.</p></div>
      </div>
    </div></section>

    <section id="projetos" class="band-navy"><div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Portfólio</span>
        <h2>Projetos-conceito, por tipo de negócio</h2>
        <p>Como ainda estamos começando, estes são projetos desenvolvidos para mostrar como aplicaríamos nosso processo a diferentes tipos de negócio — não são clientes reais.</p>
      </div>
      <div class="concept-note reveal">
        <span>◆</span>
        <span><strong>Sobre estes projetos:</strong> cada um foi construído para demonstrar decisões de estrutura e estratégia, não como um trabalho entregue a um cliente. Contamos isso com transparência em qualquer apresentação.</span>
      </div>
      ${cases}
    </div></section>

    <section id="processo" class="band-paper"><div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Como funciona</span>
        <h2>Da conversa inicial à campanha rodando</h2>
      </div>
      <div class="process-grid">
        <div class="step reveal"><span class="n">01</span><h3>Diagnóstico</h3><p>Entendemos o negócio, o objetivo e o público antes de desenhar qualquer tela.</p></div>
        <div class="step reveal d1"><span class="n">02</span><h3>Design &amp; desenvolvimento</h3><p>Landing page construída sob medida, com rastreamento configurado desde o início.</p></div>
        <div class="step reveal d2"><span class="n">03</span><h3>Configuração de divulgação</h3><p>Campanhas estruturadas com base no objetivo definido no diagnóstico.</p></div>
        <div class="step reveal d3"><span class="n">04</span><h3>Otimização contínua</h3><p>Acompanhamento de métricas e ajustes periódicos — nada roda no piloto automático.</p></div>
      </div>
    </div></section>

    <section id="contato" class="band-navy"><div class="wrap">
      <div class="cta-box frame reveal">
        <span class="eyebrow" style="justify-content:center">Vamos conversar</span>
        <h2>Vamos falar sobre o seu projeto</h2>
        <p>Conte um pouco sobre o seu negócio e a gente te mostra como aplicaríamos esse mesmo processo a ele.</p>
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
