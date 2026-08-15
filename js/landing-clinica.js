function renderLandingClinica(){
  return `
  <div class="lp-clinica">
    <a href="#/" class="concept-badge">← Voltar ao portfólio</a>

    <div class="nav">
      <div class="container nav-inner">
        <a href="#/landing/clinica" class="brand">Clínica Sorriso</a>
        <ul class="nav-links">
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#como-funciona">Como funciona</a></li>
        </ul>
        <a href="https://wa.me/5511999999999" class="btn btn-primary" style="padding:.6rem 1.2rem; font-size:.85rem" onclick="track('contact_click','clinica')">Agendar avaliação</a>
      </div>
    </div>

    <header class="hero">
      <div class="hero-blob" aria-hidden="true"></div>
      <div class="container hero-inner">
        <span class="eyebrow">Odontologia de bairro, feita com calma</span>
        <h1>Um sorriso cuidado com calma, do jeito que você merece.</h1>
        <p class="lead">Avaliação inicial sem compromisso, horários flexíveis e uma equipe que explica cada etapa do tratamento antes de começar.</p>
        <div class="hero-actions">
          <a href="https://wa.me/5511999999999" class="btn btn-primary" onclick="track('contact_click','clinica')">Agendar avaliação gratuita</a>
          <a href="#especialidades" class="btn btn-ghost">Ver especialidades</a>
        </div>
        <div class="trust-row">
          <div class="trust-item"><span class="arc-dot"></span>+12 anos cuidando de sorrisos</div>
          <div class="trust-item"><span class="arc-dot"></span>Bioseguridade em cada etapa</div>
          <div class="trust-item"><span class="arc-dot"></span>Parcelamento facilitado</div>
        </div>
      </div>
    </header>

    <section id="especialidades">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Especialidades</span>
          <h2>Tratamento pra cada fase do seu sorriso</h2>
          <span class="arc-rule"></span>
        </div>
        <div class="services-grid">
          <div class="service-card"><span class="arc-dot"></span><h3>Limpeza &amp; prevenção</h3><p>Check-ups regulares pra evitar que pequenos problemas virem grandes.</p></div>
          <div class="service-card"><span class="arc-dot"></span><h3>Ortodontia invisível</h3><p>Alinhadores discretos, com acompanhamento a cada etapa.</p></div>
          <div class="service-card"><span class="arc-dot"></span><h3>Implantes</h3><p>Planejamento detalhado, do diagnóstico à reabilitação.</p></div>
          <div class="service-card"><span class="arc-dot"></span><h3>Odontologia estética</h3><p>Clareamento e facetas pensados pro seu rosto, não por padrão.</p></div>
          <div class="service-card"><span class="arc-dot"></span><h3>Clínico geral</h3><p>Acompanhamento de rotina pra toda a família.</p></div>
          <div class="service-card"><span class="arc-dot"></span><h3>Urgência</h3><p>Atendimento prioritário quando dói e não pode esperar.</p></div>
        </div>
      </div>
    </section>

    <section id="como-funciona">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Como funciona</span>
          <h2>Três passos, sem surpresa no meio do caminho</h2>
          <span class="arc-rule"></span>
        </div>
        <div class="steps">
          <div class="step-card"><span class="step-num">1</span><h3>Avaliação</h3><p>Conversa e exame inicial pra entender o que o seu sorriso precisa.</p></div>
          <div class="step-card"><span class="step-num">2</span><h3>Plano de tratamento</h3><p>Você recebe o passo a passo e o valor, sem letras miúdas.</p></div>
          <div class="step-card"><span class="step-num">3</span><h3>Acompanhamento</h3><p>Retornos combinados com você, no seu ritmo.</p></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="cta-final">
          <span class="eyebrow" style="color:var(--accent)">Vamos conversar</span>
          <h2>Marque sua avaliação sem compromisso</h2>
          <p>Conte um pouco sobre o que está sentindo e a gente te ajuda a encontrar o melhor horário.</p>
          <div class="hero-actions">
            <a href="https://wa.me/5511999999999" class="btn btn-primary" onclick="track('contact_click','clinica')">Chamar no WhatsApp</a>
            <a href="mailto:ola@clinicasorriso.com.br" class="btn btn-ghost" onclick="track('contact_click','clinica')">Enviar e-mail</a>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-inner">
        <span>© 2026 Clínica Sorriso</span>
        <span>Case demonstrativo desenvolvido por <strong>Carlos &amp; Gabriela</strong></span>
      </div>
    </footer>
  </div>
  `;
}
