/* Ícones de linha simples (mesmo padrão de stroke usado nas outras
 * landing pages) para os cards de "Áreas de atuação". */
function advocaciaIcon(name){
  const paths = {
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>',
    home: '<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/>',
    building: '<rect x="4" y="2" width="16" height="20"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/>'
  };
  return `<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ''}</svg></span>`;
}

/* balança da justiça — visual-assinatura do hero */
function advocaciaScaleVisual(){
  return `<div class="scale-visual">
    <svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de uma balança da justiça">
      <rect class="scale-base" x="130" y="246" width="60" height="6" rx="3"/>
      <line class="scale-post" x1="160" y1="248" x2="160" y2="55"/>
      <circle class="scale-pivot" cx="160" cy="52" r="6"/>
      <g class="scale-group">
        <line class="scale-beam" x1="70" y1="60" x2="250" y2="60"/>
        <circle class="scale-dot" cx="70" cy="60" r="3"/>
        <circle class="scale-dot" cx="250" cy="60" r="3"/>
        <line class="scale-chain" x1="70" y1="60" x2="70" y2="120"/>
        <path class="scale-pan" d="M40 120 Q70 148 100 120"/>
        <line class="scale-chain" x1="250" y1="60" x2="250" y2="120"/>
        <path class="scale-pan" d="M220 120 Q250 148 280 120"/>
      </g>
    </svg>
  </div>`;
}

function renderLandingAdvocacia(){
  const wa = 'https://wa.me/5511999999999';
  return `
  <div class="lp-advocacia">

    <div class="nav">
      <div class="container nav-inner">
        <a href="#/landing/advocacia" class="brand">Bastos &amp; Vieira</a>
        <ul class="nav-links">
          <li><a href="#areas">Áreas de atuação</a></li>
          <li><a href="#processo">Como funciona</a></li>
          <li><a href="#planos">Planos</a></li>
        </ul>
        <a href="${wa}" class="btn btn-primary" style="padding:.6rem 1.1rem; font-size:.8rem" onclick="track('contact_click','advocacia')">Agendar consulta</a>
      </div>
    </div>

    <header class="hero">
      <div class="container hero-grid">
        <div class="hero-inner">
          <span class="eyebrow">Advocacia trabalhista &amp; cível</span>
          <h1>Orientação jurídica clara, <span class="mark">sem juridiquês</span>.</h1>
          <p class="lead">Uma conversa inicial pra entender seu caso e mostrar, com clareza, quais são os próximos passos possíveis.</p>
          <div class="hero-actions">
            <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','advocacia')">Agendar consulta inicial</a>
            <a href="#areas" class="btn btn-ghost">Ver áreas de atuação</a>
          </div>
          <div class="trust-strip">
            <div class="trust-item">Atendimento inicial sem custo</div>
            <div class="trust-item">Resposta em até 24h</div>
            <div class="trust-item">Sigilo garantido</div>
          </div>
        </div>
        <div style="position:relative">
          ${advocaciaScaleVisual()}
          <div class="hero-badge"><strong>+500</strong><span>casos atendidos</span></div>
        </div>
      </div>
    </header>

    <section id="sobre">
      <div class="container">
        <div class="about">
          <div>
            <span class="eyebrow">Sobre o escritório</span>
            <h2>Duas trajetórias, um mesmo compromisso: clareza.</h2>
            <p>O Bastos &amp; Vieira nasceu da união de duas advogadas com mais de 15 anos de atuação combinada, unidas pela mesma convicção: cliente que entende a própria situação decide melhor. Cada caso começa com uma explicação clara do cenário jurídico, antes de qualquer estratégia.</p>
          </div>
          <ul class="credentials">
            <li><span class="ico">✓</span>+15 anos de atuação combinada</li>
            <li><span class="ico">✓</span>Registro ativo na OAB/SP</li>
            <li><span class="ico">✓</span>+500 casos atendidos</li>
            <li><span class="ico">✓</span>Atendimento presencial e remoto</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="areas">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Áreas de atuação</span>
          <h2>Onde podemos ajudar</h2>
        </div>
        <div class="articles">
          <div class="article"><div class="tag-col">${advocaciaIcon('briefcase')}<span class="tag">Art. 1</span></div><div><h3>Direito Trabalhista</h3><p>Rescisões, verbas não pagas, assédio e condições de trabalho.</p></div></div>
          <div class="article"><div class="tag-col">${advocaciaIcon('file')}<span class="tag">Art. 2</span></div><div><h3>Direito Cível</h3><p>Contratos, cobranças, indenizações e questões de vizinhança.</p></div></div>
          <div class="article"><div class="tag-col">${advocaciaIcon('home')}<span class="tag">Art. 3</span></div><div><h3>Direito de Família</h3><p>Divórcio, pensão, guarda — conduzido com o cuidado que o momento pede.</p></div></div>
          <div class="article"><div class="tag-col">${advocaciaIcon('building')}<span class="tag">Art. 4</span></div><div><h3>Direito Empresarial</h3><p>Contratos, sociedades e prevenção de conflitos para pequenas empresas.</p></div></div>
        </div>
      </div>
    </section>

    <section class="alt" id="processo">
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

    <section id="planos">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Planos</span>
          <h2>Atendimento sob medida pro seu momento</h2>
        </div>
        <div class="plans">
          <div class="plan">
            <h3>Consulta Avulsa</h3>
            <div class="price">R$ 250</div>
            <p class="desc">Orientação pontual pra entender seus direitos e os próximos passos.</p>
            <ul>
              <li>1 consulta de 50 minutos</li>
              <li>Análise preliminar do caso</li>
              <li>Encaminhamento por escrito</li>
            </ul>
            <a href="${wa}" class="btn btn-ghost" onclick="track('contact_click','advocacia')">Agendar</a>
          </div>
          <div class="plan featured">
            <span class="plan-tag">Mais procurado</span>
            <h3>Acompanhamento Processual</h3>
            <div class="price">Sob consulta</div>
            <p class="desc">Condução completa do seu processo, do início ao fim.</p>
            <ul>
              <li>Análise completa do caso</li>
              <li>Atualizações periódicas</li>
              <li>Atendimento direto com a advogada responsável</li>
              <li>Honorários combinados por caso</li>
            </ul>
            <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','advocacia')">Agendar consulta</a>
          </div>
          <div class="plan">
            <h3>Assessoria Empresarial</h3>
            <div class="price">R$ 890<span>/mês</span></div>
            <p class="desc">Consultoria jurídica recorrente pra pequenas empresas.</p>
            <ul>
              <li>Revisão de contratos</li>
              <li>Suporte jurídico sob demanda</li>
              <li>Prioridade de atendimento</li>
            </ul>
            <a href="${wa}" class="btn btn-ghost" onclick="track('contact_click','advocacia')">Agendar</a>
          </div>
        </div>
        <p class="plans-note">Valores fictícios — exemplo de estrutura de planos para o case demonstrativo. Honorários reais variam conforme a complexidade do caso, respeitando a tabela da OAB.</p>
      </div>
    </section>

    <section class="alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Depoimentos</span>
          <h2>O que dizem nossos clientes</h2>
        </div>
        <div class="testimonials">
          <div class="testi"><p>“Explicaram cada etapa do processo antes de agir. Me senti segura do início ao fim.”</p><div class="who">— Cliente atendida, Direito de Família</div></div>
          <div class="testi"><p>“Resolveram uma rescisão que eu achava impossível de reverter. Resposta rápida e direta.”</p><div class="who">— Cliente atendido, Direito Trabalhista</div></div>
          <div class="testi"><p>“Suporte jurídico constante pra minha empresa, sem burocracia. Vale cada centavo.”</p><div class="who">— Cliente atendido, Direito Empresarial</div></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Dúvidas frequentes</span>
          <h2>Antes de agendar, você pode estar se perguntando</h2>
        </div>
        <div class="faq">
          <details class="faq-item"><summary>A consulta inicial tem algum custo?</summary><p>Não, o primeiro contato pra entender sua situação é sem custo.</p></details>
          <details class="faq-item"><summary>Quanto tempo demora um processo?</summary><p>Varia bastante conforme a área e a complexidade do caso — na análise inicial, damos uma estimativa realista de prazo.</p></details>
          <details class="faq-item"><summary>O atendimento é só presencial?</summary><p>Não, atendemos presencial e remotamente, por videochamada — o que for mais prático pra você.</p></details>
          <details class="faq-item"><summary>Como funciona o pagamento de honorários?</summary><p>Depende do tipo de caso — pode ser valor fechado, parcelado ou percentual sobre êxito, sempre explicado com clareza antes de qualquer contrato.</p></details>
          <details class="faq-item"><summary>Vocês atendem em todo o Brasil?</summary><p>Atendemos remotamente em todo o Brasil; o atendimento presencial é limitado à região de São Paulo.</p></details>
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
            <a href="${wa}" class="btn btn-primary" onclick="track('contact_click','advocacia')">Chamar no WhatsApp</a>
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
