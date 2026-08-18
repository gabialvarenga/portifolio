/* Ícones de linha simples (mesmo padrão de stroke usado nas outras
 * landing pages) para os cards de "Por que pedir direto". */
function restauranteIcon(name){
  const paths = {
    percent: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>',
    gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>'
  };
  return `<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ''}</svg></span>`;
}

function restauranteMenuItem(name, price, desc){
  return `<div class="menu-item">
    <div class="menu-item-info"><h4>${name}</h4><p>${desc}</p></div>
    <div class="menu-item-price">R$ ${price}</div>
  </div>`;
}

function renderLandingRestaurante(){
  const wa = 'https://wa.me/5511999999999';
  return `
  <div class="lp-restaurante">

    <div class="nav">
      <div class="container nav-inner">
        <a href="#/landing/restaurante" class="brand">Braseiro</a>
        <ul class="nav-links">
          <li><a href="#cardapio" onclick="goToSection(event,'cardapio')">Cardápio</a></li>
          <li><a href="#combos" onclick="goToSection(event,'combos')">Combos</a></li>
        </ul>
        <a href="${wa}" class="btn btn-primary" style="padding:.6rem 1.2rem; font-size:.85rem" onclick="track('contact_click','restaurante')">Pedir agora</a>
      </div>
    </div>

    <header class="hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">Delivery direto, sem intermediário</span>
          <h1>Do fogo direto pra sua mesa — sem taxa de aplicativo no meio.</h1>
          <p class="lead">Pratos preparados na hora, com ingrediente fresco e aquele tempero que só dá em casa. Peça direto pelo WhatsApp e receba quentinho, sem pagar a mais pelas taxas dos apps de entrega.</p>
          <div class="hero-actions">
            <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','restaurante')">Pedir pelo WhatsApp</a>
            <a href="#cardapio" class="btn btn-ghost-invert" onclick="goToSection(event,'cardapio')">Ver cardápio</a>
          </div>
          <div class="trust-row">
            <div class="trust-item"><span class="trust-dot"></span>Entrega em até 40 min</div>
            <div class="trust-item"><span class="trust-dot"></span>4.8★ · +500 avaliações</div>
            <div class="trust-item"><span class="trust-dot"></span>Sem taxa de aplicativo</div>
          </div>
        </div>
        <div class="plate-visual">
          <div class="plate"></div>
          <div class="food-item main"></div>
          <div class="food-item side"></div>
          <div class="food-item garnish"></div>
          <div class="steam s1"></div>
          <div class="steam s2"></div>
          <div class="steam s3"></div>
          <div class="hero-badge"><strong>+3.000</strong><span>pedidos entregues</span></div>
        </div>
      </div>
    </header>

    <section id="sobre">
      <div class="container">
        <div class="about">
          <div>
            <span class="eyebrow">Nossa história</span>
            <h2>Comida de bairro, feita como em casa.</h2>
            <p>O Braseiro começou como uma cozinha pequena de bairro, com foco em receita de família e ingrediente fresco comprado toda manhã na feira. A gente cresceu, mas o jeito de cozinhar continua o mesmo: fogo de verdade, tempo de verdade, sabor de verdade.</p>
          </div>
          <ul class="badges">
            <li><span class="ico">✓</span>+8 anos servindo o bairro</li>
            <li><span class="ico">✓</span>Ingredientes frescos, comprados todo dia</li>
            <li><span class="ico">✓</span>Receitas de família, sem atalho</li>
            <li><span class="ico">✓</span>+3.000 pedidos entregues</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="alt" id="porque">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Por que pedir direto</span>
          <h2>Sem intermediário, todo mundo sai ganhando.</h2>
        </div>
        <div class="why-grid">
          <div class="why-card">${restauranteIcon('percent')}<h3>Sem taxa de app</h3><p>Economize até 25% pedindo direto com a gente, sem as taxas dos aplicativos de entrega.</p></div>
          <div class="why-card">${restauranteIcon('chat')}<h3>Fala direto com a cozinha</h3><p>Quer tirar um ingrediente ou pedir um ponto diferente? É só falar com a gente no WhatsApp.</p></div>
          <div class="why-card">${restauranteIcon('gift')}<h3>Promoções exclusivas</h3><p>Descontos e combos especiais que só saem por aqui, sem intermediário.</p></div>
          <div class="why-card">${restauranteIcon('zap')}<h3>Chega mais rápido</h3><p>Pedido direto sai da cozinha pra rua na hora, sem fila de outros apps no meio.</p></div>
        </div>
      </div>
    </section>

    <section id="cardapio">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Cardápio</span>
          <h2>Escolhas que valem a pena esperar.</h2>
          <p>Uma seleção dos pratos mais pedidos — o cardápio completo vem com o menu que a gente manda no WhatsApp.</p>
        </div>

        <div class="menu-category">
          <h3 class="menu-cat-title">🥟 Entradas</h3>
          ${restauranteMenuItem('Bolinho de costela desfiada', '24', 'Crocante por fora, puxa-puxa por dentro, servido com molho barbecue defumado.')}
          ${restauranteMenuItem('Pão de alho na brasa', '18', 'Assado na hora, com manteiga de ervas derretendo em cada fatia.')}
        </div>

        <div class="menu-category">
          <h3 class="menu-cat-title">🍖 Pratos principais</h3>
          ${restauranteMenuItem('Costela 12 horas', '58', 'Cozida lentamente até desmanchar no garfo, com farofa crocante e vinagrete fresco.')}
          ${restauranteMenuItem('Hambúrguer Braseiro', '39', '180g de blend na brasa, queijo derretendo, bacon crocante e molho da casa.')}
          ${restauranteMenuItem('Risoto de cogumelos', '46', 'Cremoso, finalizado com parmesão curado e um fio de azeite trufado.')}
        </div>

        <div class="menu-category">
          <h3 class="menu-cat-title">🍰 Sobremesas</h3>
          ${restauranteMenuItem('Petit gateau', '22', 'Casquinha crocante por fora, recheio quente derretendo com sorvete de creme gelado.')}
        </div>

        <div class="menu-category">
          <h3 class="menu-cat-title">🥤 Bebidas</h3>
          ${restauranteMenuItem('Limonada suíça', '12', 'Bem gelada, na medida certa entre azedinha e doce.')}
        </div>
      </div>
    </section>

    <section class="alt" id="como-funciona">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Como funciona</span>
          <h2>Do pedido até a sua porta.</h2>
        </div>
        <div class="steps">
          <div class="step-card"><span class="n">1</span><h3>Escolha no cardápio</h3><p>Dá uma olhada nos pratos e escolhe o que combina com a fome de hoje.</p></div>
          <div class="step-card"><span class="n">2</span><h3>Peça pelo WhatsApp</h3><p>Manda a mensagem com seu pedido e endereço — simples assim, sem baixar nada.</p></div>
          <div class="step-card"><span class="n">3</span><h3>Acompanhe o preparo</h3><p>A gente avisa quando o pedido entra na brasa e quando sai pra entrega.</p></div>
          <div class="step-card"><span class="n">4</span><h3>Receba quentinho</h3><p>Entrega rápida, direto na sua porta, sem taxa de aplicativo no meio.</p></div>
        </div>
      </div>
    </section>

    <section id="combos">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Combos</span>
          <h2>Peça pra mais gente e economize.</h2>
        </div>
        <div class="combos">
          <div class="combo">
            <h3>Individual</h3>
            <div class="price">R$ 49</div>
            <span class="save">economize R$ 8</span>
            <p class="desc">1 prato principal + 1 bebida.</p>
            <a href="${wa}" class="btn btn-ghost" onclick="track('contact_click','restaurante')">Pedir</a>
          </div>
          <div class="combo featured">
            <span class="combo-tag">Mais pedido</span>
            <h3>Casal</h3>
            <div class="price">R$ 129</div>
            <span class="save">economize R$ 22</span>
            <p class="desc">2 pratos principais + 1 entrada + 2 bebidas.</p>
            <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','restaurante')">Pedir</a>
          </div>
          <div class="combo">
            <h3>Família</h3>
            <div class="price">R$ 219</div>
            <span class="save">economize R$ 35</span>
            <p class="desc">3 pratos principais + 2 entradas + sobremesa + 4 bebidas.</p>
            <a href="${wa}" class="btn btn-ghost" onclick="track('contact_click','restaurante')">Pedir</a>
          </div>
        </div>
      </div>
    </section>

    <section class="alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Depoimentos</span>
          <h2>Quem já pediu, volta a pedir.</h2>
        </div>
        <div class="testimonials">
          <div class="testi"><p>“Peço toda sexta. A costela desmancha na boca e chega quentinha, igual saiu da cozinha.”</p><div class="who">— Marcos T., cliente há 2 anos</div></div>
          <div class="testi"><p>“Cancelei os apps de delivery só de tanto que peço direto aqui. Mais barato e mais rápido.”</p><div class="who">— Paula S., cliente há 1 ano</div></div>
          <div class="testi"><p>“O petit gateau é surreal. Peço sempre um a mais só pra garantir.”</p><div class="who">— Yuri H., cliente há 8 meses</div></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Dúvidas frequentes</span>
          <h2>Antes de pedir, você pode estar se perguntando</h2>
        </div>
        <div class="faq">
          <details class="faq-item"><summary>Qual a área de entrega?</summary><p>Entregamos num raio de até 5km da loja. Manda seu endereço no WhatsApp que a gente confirma na hora.</p></details>
          <details class="faq-item"><summary>Qual o tempo médio de entrega?</summary><p>Entre 30 e 40 minutos, dependendo da distância e do movimento do dia.</p></details>
          <details class="faq-item"><summary>Vocês aceitam pagamento na entrega?</summary><p>Sim — dinheiro, cartão ou Pix na entrega, ou Pix antecipado se preferir.</p></details>
          <details class="faq-item"><summary>Tem pedido mínimo?</summary><p>Pedido mínimo de R$ 30 para entrega.</p></details>
          <details class="faq-item"><summary>Preciso baixar algum aplicativo?</summary><p>Não! Todo o pedido é feito direto pelo WhatsApp, sem instalar nada.</p></details>
        </div>
      </div>
    </section>

    <section class="cta-final">
      <div class="container">
        <span class="eyebrow">Bateu a fome?</span>
        <h2>Peça agora e receba quentinho em até 40 minutos.</h2>
        <p>Chama a gente no WhatsApp — sem taxa de aplicativo, sem enrolação.</p>
        <div class="hero-actions">
          <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','restaurante')">Pedir pelo WhatsApp</a>
          <a href="#cardapio" class="btn btn-ghost-invert" onclick="goToSection(event,'cardapio')">Ver cardápio</a>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-inner">
        <span>Braseiro — Rua das Palmeiras, 245, Vila Nova · Terça a domingo, 18h às 23h</span>
        <span>Case demonstrativo desenvolvido por <strong>Carlos &amp; Gabriela</strong></span>
      </div>
    </footer>
  </div>
  `;
}
