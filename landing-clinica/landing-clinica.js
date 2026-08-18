/* Ícones de linha simples (mesmo padrão de stroke usado em lpIcon(),
 * js/landing-professora-ingles.js) para os cards de especialidade. */
function clinicaIcon(name){
  const paths = {
    tooth: '<path d="M12 3c-2.5 0-4.5 1.6-5.5 2.7C5.6 6.7 5 8.3 5 10c0 2 .8 3.6 1.3 5.4.4 1.6.7 3.6 1.7 4.4.6.5 1.4.2 1.7-.5.4-.9.6-2.6 1.3-2.6s.9 1.7 1.3 2.6c.3.7 1.1 1 1.7.5 1-.8 1.3-2.8 1.7-4.4.5-1.8 1.3-3.4 1.3-5.4 0-1.7-.6-3.3-1.5-4.3C16.5 4.6 14.5 3 12 3Z"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 13.5s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9" y2="9.01"/><line x1="15" y1="9" x2="15" y2="9.01"/>',
    anchor: '<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6Z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>'
  };
  return `<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ''}</svg></span>`;
}

function renderLandingClinica(){
  const wa = 'https://wa.me/5511999999999';
  return `
  <div class="lp-clinica">

    <div class="nav">
      <div class="container nav-inner">
        <a href="#/landing/clinica" class="brand">Clínica Sorriso</a>
        <ul class="nav-links">
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#como-funciona">Como funciona</a></li>
        </ul>
        <a href="${wa}" class="btn btn-primary" style="padding:.6rem 1.2rem; font-size:.85rem" onclick="track('contact_click','clinica')">Agendar avaliação</a>
      </div>
    </div>

    <header class="hero">
      <div class="hero-blob" aria-hidden="true"></div>
      <div class="container hero-inner">
        <span class="eyebrow">Odontologia de bairro, feita com calma</span>
        <h1>Um sorriso cuidado com calma, do jeito que você merece.</h1>
        <p class="lead">Avaliação inicial sem compromisso, horários flexíveis e uma equipe que explica cada etapa do tratamento antes de começar.</p>
        <div class="hero-actions">
          <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','clinica')">Agendar avaliação gratuita</a>
          <a href="#especialidades" class="btn btn-ghost">Ver especialidades</a>
        </div>
        <div class="trust-row">
          <div class="trust-item"><span class="arc-dot"></span>+12 anos cuidando de sorrisos</div>
          <div class="trust-item"><span class="arc-dot"></span>Bioseguridade em cada etapa</div>
          <div class="trust-item"><span class="arc-dot"></span>Parcelamento facilitado</div>
        </div>
      </div>
      <div class="hero-badge"><strong>+1.200</strong><span>pacientes atendidos</span></div>
    </header>

    <section id="sobre">
      <div class="container">
        <div class="about">
          <div>
            <span class="eyebrow">Quem cuida do seu sorriso</span>
            <h2>Uma equipe que explica antes de agir.</h2>
            <span class="arc-rule"></span>
            <p>Somos uma clínica de bairro com foco em atendimento próximo e sem pressa — cada tratamento começa com uma explicação clara do que precisa ser feito e por quê, antes de qualquer procedimento.</p>
            <p>Mais de 12 anos cuidando de famílias inteiras, dos primeiros dentinhos ao acompanhamento na terceira idade.</p>
          </div>
          <ul class="credentials">
            <li><span class="ico">✓</span>Equipe registrada no CRO/SP</li>
            <li><span class="ico">✓</span>+12 anos de atuação no bairro</li>
            <li><span class="ico">✓</span>+1.200 pacientes atendidos</li>
            <li><span class="ico">✓</span>Protocolo de bioseguridade em cada etapa</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="especialidades">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Especialidades</span>
          <h2>Tratamento pra cada fase do seu sorriso</h2>
          <span class="arc-rule"></span>
        </div>
        <div class="services-grid">
          <div class="service-card">${clinicaIcon('tooth')}<h3>Limpeza &amp; prevenção</h3><p>Check-ups regulares pra evitar que pequenos problemas virem grandes.</p></div>
          <div class="service-card">${clinicaIcon('smile')}<h3>Ortodontia invisível</h3><p>Alinhadores discretos, com acompanhamento a cada etapa.</p></div>
          <div class="service-card">${clinicaIcon('anchor')}<h3>Implantes</h3><p>Planejamento detalhado, do diagnóstico à reabilitação.</p></div>
          <div class="service-card">${clinicaIcon('sparkle')}<h3>Odontologia estética</h3><p>Clareamento e facetas pensados pro seu rosto, não por padrão.</p></div>
          <div class="service-card">${clinicaIcon('heart')}<h3>Clínico geral</h3><p>Acompanhamento de rotina pra toda a família.</p></div>
          <div class="service-card">${clinicaIcon('zap')}<h3>Urgência</h3><p>Atendimento prioritário quando dói e não pode esperar.</p></div>
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
        <div class="section-head">
          <span class="eyebrow">Depoimentos</span>
          <h2>O que dizem nossos pacientes</h2>
          <span class="arc-rule"></span>
        </div>
        <div class="testimonials">
          <div class="testi"><p>“Fui super bem acolhida, explicaram tudo antes de fazer qualquer procedimento. Nunca mais tive medo de ir ao dentista.”</p><div class="who">— Fernanda O., paciente há 3 anos</div></div>
          <div class="testi"><p>“Meus filhos adoram vir aqui — o atendimento é leve, sem aquele climão de consultório.”</p><div class="who">— Ricardo M., paciente há 2 anos</div></div>
          <div class="testi"><p>“Marquei uma urgência numa sexta à noite e fui atendido no mesmo dia. Isso não tem preço.”</p><div class="who">— Juliana A., paciente há 1 ano</div></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Dúvidas frequentes</span>
          <h2>Antes de marcar, você pode estar se perguntando</h2>
          <span class="arc-rule"></span>
        </div>
        <div class="faq">
          <details class="faq-item"><summary>A avaliação inicial tem algum custo?</summary><p>Não, a primeira avaliação é gratuita e sem compromisso.</p></details>
          <details class="faq-item"><summary>Vocês atendem por convênio ou plano odontológico?</summary><p>Atendemos particular e alguns convênios — confirma com a gente pelo WhatsApp antes de agendar.</p></details>
          <details class="faq-item"><summary>Quanto tempo dura uma consulta?</summary><p>Uma avaliação leva cerca de 30 a 40 minutos, incluindo o exame e a conversa sobre o plano de tratamento.</p></details>
          <details class="faq-item"><summary>Vocês atendem emergência no mesmo dia?</summary><p>Sim, sempre que possível priorizamos casos de dor ou urgência no mesmo dia.</p></details>
          <details class="faq-item"><summary>Preciso levar algum exame pra primeira consulta?</summary><p>Não é obrigatório — se você já tiver radiografias recentes, é só trazer, mas não é pré-requisito.</p></details>
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
            <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','clinica')">Chamar no WhatsApp</a>
            <a href="mailto:ola@clinicasorriso.com.br" class="btn btn-ghost" onclick="track('contact_click','clinica')">Enviar e-mail</a>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-inner">
        <span>© 2026 Clínica Sorriso — CRO/SP nº 00000 (exemplo)</span>
        <span>Case demonstrativo desenvolvido por <strong>Carlos &amp; Gabriela</strong></span>
      </div>
    </footer>
  </div>
  `;
}
