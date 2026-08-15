function renderLandingAdvocacia(){
  return `
  <div class="lp-advocacia">
    <a href="#/" class="concept-badge">← Voltar ao portfólio</a>

    <div class="nav">
      <div class="container nav-inner">
        <a href="#/landing/advocacia" class="brand">Bastos &amp; Vieira</a>
        <ul class="nav-links">
          <li><a href="#areas">Áreas de atuação</a></li>
          <li><a href="#processo">Como funciona</a></li>
        </ul>
        <a href="https://wa.me/5511999999999" class="btn btn-primary" style="padding:.6rem 1.1rem; font-size:.8rem" onclick="track('contact_click','advocacia')">Agendar consulta</a>
      </div>
    </div>

    <header class="hero">
      <div class="container hero-inner">
        <span class="eyebrow">Advocacia trabalhista &amp; cível</span>
        <h1>Orientação jurídica clara, <span class="mark">sem juridiquês</span>.</h1>
        <p class="lead">Uma conversa inicial pra entender seu caso e mostrar, com clareza, quais são os próximos passos possíveis.</p>
        <div class="hero-actions">
          <a href="https://wa.me/5511999999999" class="btn btn-primary" onclick="track('contact_click','advocacia')">Agendar consulta inicial</a>
          <a href="#areas" class="btn btn-ghost">Ver áreas de atuação</a>
        </div>
        <div class="trust-strip">
          <div class="trust-item">Atendimento inicial sem custo</div>
          <div class="trust-item">Resposta em até 24h</div>
          <div class="trust-item">Sigilo garantido</div>
        </div>
      </div>
    </header>

    <section id="areas">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Áreas de atuação</span>
          <h2>Onde podemos ajudar</h2>
        </div>
        <div class="articles">
          <div class="article"><span class="tag">Art. 1</span><div><h3>Direito Trabalhista</h3><p>Rescisões, verbas não pagas, assédio e condições de trabalho.</p></div></div>
          <div class="article"><span class="tag">Art. 2</span><div><h3>Direito Cível</h3><p>Contratos, cobranças, indenizações e questões de vizinhança.</p></div></div>
          <div class="article"><span class="tag">Art. 3</span><div><h3>Direito de Família</h3><p>Divórcio, pensão, guarda — conduzido com o cuidado que o momento pede.</p></div></div>
          <div class="article"><span class="tag">Art. 4</span><div><h3>Direito Empresarial</h3><p>Contratos, sociedades e prevenção de conflitos para pequenas empresas.</p></div></div>
        </div>
      </div>
    </section>

    <section id="processo">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Como funciona</span>
          <h2>Do primeiro contato ao plano de ação</h2>
        </div>
        <div class="steps">
          <div class="step-card"><span class="n">Passo 1</span><h3>Conversa inicial</h3><p>Sem custo, pra entender a sua situação com calma.</p></div>
          <div class="step-card"><span class="n">Passo 2</span><h3>Análise do caso</h3><p>Avaliamos os documentos e o cenário jurídico envolvido.</p></div>
          <div class="step-card"><span class="n">Passo 3</span><h3>Plano de ação</h3><p>Você recebe os caminhos possíveis, com prazos e custos claros.</p></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="cta-final">
          <span class="eyebrow">Fale com um advogado</span>
          <h2>Agende sua consulta inicial</h2>
          <p>Sem burocracia pra marcar — conte o essencial e retornamos com um horário.</p>
          <div class="hero-actions">
            <a href="https://wa.me/5511999999999" class="btn btn-primary" onclick="track('contact_click','advocacia')">Chamar no WhatsApp</a>
            <a href="mailto:contato@bastosvieira.adv.br" class="btn btn-ghost" onclick="track('contact_click','advocacia')">Enviar e-mail</a>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-inner">
        <span>Bastos &amp; Vieira Advocacia — OAB/SP nº 000.000 (exemplo)</span>
        <span>Case demonstrativo desenvolvido por <strong>Carlos &amp; Gabriela</strong></span>
      </div>
    </footer>
  </div>
  `;
}
