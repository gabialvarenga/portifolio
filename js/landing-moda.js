/* Ícones de linha simples (mesmo padrão de stroke usado nas outras
 * landing pages) para os cards de "Por que comprar direto". */
function modaIcon(name){
  const paths = {
    percent: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>',
    tag: '<path d="M20.59 13.41 13 21l-9-9V3h9l9 9.41a2 2 0 0 1 0 2.82Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>'
  };
  return `<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ''}</svg></span>`;
}

function modaProductCard(name, price, desc, gradient, tag){
  const tagHtml = tag ? `<span class="product-tag">${tag}</span>` : '';
  return `<div class="product-card">
    <div class="product-swatch" style="background:${gradient}">${tagHtml}</div>
    <div class="product-info">
      <h4>${name}</h4>
      <p>${desc}</p>
      <div class="product-price">R$ ${price}</div>
      <a href="https://wa.me/5511999999999" class="btn btn-primary" onclick="track('contact_click','moda')">Comprar pelo WhatsApp</a>
    </div>
  </div>`;
}

function renderLandingModa(){
  const wa = 'https://wa.me/5511999999999';
  return `
  <div class="lp-moda">
    <a href="#/" class="concept-badge">← Voltar ao portfólio</a>

    <div class="nav">
      <div class="container nav-inner">
        <a href="#/landing/moda" class="brand">ALMA</a>
        <ul class="nav-links">
          <li><a href="#colecao" onclick="scrollToId('colecao')">Coleção</a></li>
          <li><a href="#como-funciona" onclick="scrollToId('como-funciona')">Como funciona</a></li>
        </ul>
        <a href="${wa}" class="btn btn-primary" style="padding:.6rem 1.1rem" onclick="track('contact_click','moda')">Comprar</a>
      </div>
    </div>

    <header class="hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">Coleção cápsula · peças limitadas</span>
          <h1>Menos peças, <em>mais intenção</em>.</h1>
          <p class="lead">Uma coleção enxuta, produzida em pequena escala e pensada peça por peça. Sem loja virtual, sem intermediário — você escolhe, confirma pelo WhatsApp e a peça é sua.</p>
          <div class="hero-actions">
            <a href="#colecao" class="btn btn-primary" onclick="scrollToId('colecao')">Ver a coleção</a>
            <a href="${wa}" class="btn btn-ghost" onclick="track('contact_click','moda')">Falar no WhatsApp</a>
          </div>
          <div class="trust-row">
            <div class="trust-item"><span class="trust-dot"></span>Edição limitada</div>
            <div class="trust-item"><span class="trust-dot"></span>Envio para todo o Brasil</div>
            <div class="trust-item"><span class="trust-dot"></span>Pagamento combinado direto</div>
          </div>
        </div>
        <div class="rack-visual">
          <div class="rail"></div>
          <div class="garment g1"><span class="hook"></span></div>
          <div class="garment g2"><span class="hook"></span></div>
          <div class="garment g3"><span class="hook"></span></div>
          <div class="garment g4"><span class="hook"></span></div>
          <div class="hero-badge"><strong>+180</strong><span>peças vendidas</span></div>
        </div>
      </div>
    </header>

    <section id="sobre">
      <div class="container">
        <div class="about">
          <div>
            <span class="eyebrow">Sobre o ateliê</span>
            <h2>Moda autoral, produzida em pequena escala.</h2>
            <p>A ALMA nasceu de um ateliê pequeno, com produção local e peças costuradas em lotes limitados — sem estoque parado, sem fast fashion. Cada coleção é pensada pra durar no guarda-roupa, não só numa temporada.</p>
          </div>
          <ul class="badges">
            <li><span class="ico">✓</span>Produção local, em pequena escala</li>
            <li><span class="ico">✓</span>Tecidos selecionados peça a peça</li>
            <li><span class="ico">✓</span>Edição limitada, sem reposição garantida</li>
            <li><span class="ico">✓</span>+180 peças vendidas nesta coleção</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="alt" id="colecao">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">A coleção</span>
          <h2>Seis peças, escolhidas com cuidado.</h2>
          <p>Estoque limitado — quando esgota, não tem reposição garantida nesta coleção.</p>
        </div>
        <div class="products">
          ${modaProductCard('Vestido Linho Bruma', '289', 'Corte solto, tecido leve, perfeito pros dias quentes.', 'linear-gradient(160deg,#C9AF85,#8C6E45)')}
          ${modaProductCard('Calça Alfaiataria Terra', '259', 'Modelagem reta, cai bem em qualquer tipo de corpo.', 'linear-gradient(160deg,#3A3530,#171410)')}
          ${modaProductCard('Blusa Seda Areia', '219', 'Caimento fluido, ideal pra compor do dia à noite.', 'linear-gradient(160deg,#E8DCC4,#C9B896)')}
          ${modaProductCard('Blazer Estruturado', '349', 'Ombro marcado, corte atemporal — a peça-chave da coleção.', 'linear-gradient(160deg,#C97B5C,#8C4A32)', 'Últimas unidades')}
          ${modaProductCard('Saia Midi Plissada', '229', 'Plissado fino, movimento em cada passo.', 'linear-gradient(160deg,#93A184,#5C6B54)', 'Últimas unidades')}
          ${modaProductCard('Conjunto Cropped + Short', '279', 'Dupla que combina sozinha, do café da manhã ao fim de tarde.', 'linear-gradient(160deg,#D9A79A,#A85F52)')}
        </div>
      </div>
    </section>

    <section id="porque">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Por que comprar direto</span>
          <h2>Sem marketplace, sem taxa no meio.</h2>
        </div>
        <div class="why-grid">
          <div class="why-card">${modaIcon('percent')}<h3>Sem taxa de marketplace</h3><p>Preço justo, direto com o ateliê — sem repasse de taxa de plataforma.</p></div>
          <div class="why-card">${modaIcon('chat')}<h3>Atendimento personalizado</h3><p>Dúvida de tamanho ou caimento? É só perguntar direto no WhatsApp.</p></div>
          <div class="why-card">${modaIcon('tag')}<h3>Estoque limitado</h3><p>Peça produzida em lote pequeno — sem garantia de reposição depois que esgota.</p></div>
          <div class="why-card">${modaIcon('zap')}<h3>Envio combinado direto</h3><p>Sem fila de plataforma — o envio é combinado direto com a gente.</p></div>
        </div>
      </div>
    </section>

    <section class="alt" id="como-funciona">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Como funciona</span>
          <h2>Da escolha até a sua porta.</h2>
        </div>
        <div class="steps">
          <div class="step-card"><span class="n">1</span><h3>Escolha a peça</h3><p>Navegue pela vitrine e escolha o que combina com você.</p></div>
          <div class="step-card"><span class="n">2</span><h3>Confirme pelo WhatsApp</h3><p>Combine tamanho e cor direto com a gente, sem carrinho de compras.</p></div>
          <div class="step-card"><span class="n">3</span><h3>Combine o pagamento</h3><p>Pix, cartão ou transferência — o que for melhor pra você.</p></div>
          <div class="step-card"><span class="n">4</span><h3>Receba em casa</h3><p>Envio pra todo o Brasil, ou retirada combinada no ateliê.</p></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Depoimentos</span>
          <h2>Quem já vestiu, recomenda.</h2>
        </div>
        <div class="testimonials">
          <div class="testi"><p>“O caimento do blazer é impecável. Já perguntaram três vezes onde comprei.”</p><div class="who">— Camila R., cliente</div></div>
          <div class="testi"><p>“Gostei de poder tirar dúvida de tamanho direto no WhatsApp antes de comprar. Chegou certinho.”</p><div class="who">— Bianca F., cliente</div></div>
          <div class="testi"><p>“Peça de qualidade, tecido bom de verdade. Não parece coisa de coleção pequena.”</p><div class="who">— Renata A., cliente</div></div>
        </div>
      </div>
    </section>

    <section class="alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Dúvidas frequentes</span>
          <h2>Antes de comprar, você pode estar se perguntando</h2>
        </div>
        <div class="faq">
          <details class="faq-item"><summary>Quais tamanhos vocês têm disponível?</summary><p>Do PP ao GG, mas a disponibilidade varia por peça — confirme direto no WhatsApp antes de fechar a compra.</p></details>
          <details class="faq-item"><summary>Posso trocar ou devolver?</summary><p>Sim, em até 7 dias após o recebimento, desde que a peça esteja sem uso e com etiqueta.</p></details>
          <details class="faq-item"><summary>Qual o prazo de entrega?</summary><p>Entre 5 e 10 dias úteis, dependendo da sua região — o prazo exato é confirmado no momento da compra.</p></details>
          <details class="faq-item"><summary>Quais formas de pagamento vocês aceitam?</summary><p>Pix, cartão de crédito (em até 3x) ou transferência bancária.</p></details>
          <details class="faq-item"><summary>Vocês repõem o estoque quando esgota?</summary><p>Nem sempre — como é uma coleção cápsula em lote limitado, algumas peças não voltam a ficar disponíveis.</p></details>
        </div>
      </div>
    </section>

    <section class="cta-final night">
      <div class="container">
        <span class="eyebrow">Peças limitadas</span>
        <h2>Antes que a coleção acabe.</h2>
        <p>Fala com a gente no WhatsApp e garanta sua peça favorita antes que esgote.</p>
        <div class="hero-actions">
          <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','moda')">Falar no WhatsApp</a>
          <a href="#colecao" class="btn btn-ghost-invert" onclick="scrollToId('colecao')">Ver coleção</a>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-inner">
        <span>ALMA Atelier — peças em edição limitada · envio para todo o Brasil</span>
        <span>Case demonstrativo desenvolvido por <strong>Carlos &amp; Gabriela</strong></span>
      </div>
    </footer>
  </div>
  `;
}
