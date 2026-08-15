/* ---------- tema claro/escuro ---------- */
async function initTheme(){
  let theme = null;
  try{
    const stored = await storageService.get('theme-preference', false);
    if(stored) theme = stored;
  }catch(e){}
  if(!theme){
    theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
}
async function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try{ await storageService.set('theme-preference', next, false); }catch(e){}
}

/* ---------- navegação ---------- */
function go(hash){ location.hash = hash; }
function scrollToId(id){ const el = document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); }

/* ---------- componentes compartilhados ---------- */
function themeToggleBtn(){
  return `<button type="button" class="theme-toggle" onclick="toggleTheme()" aria-label="Alternar entre modo claro e escuro">
    <svg class="icon-moon" viewBox="0 0 24 24"><path d="M21 12.4A9 9 0 1 1 11.6 3a7 7 0 0 0 9.4 9.4Z"/></svg>
    <svg class="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
  </button>`;
}
function nav(){
  return `<div class="nav"><div class="wrap nav-inner">
    <a href="#/" class="brand"><span class="brand-mark"></span>Portfólio</a>
    <ul class="nav-links">
      <li><a href="#servicos" onclick="scrollToId('servicos')">Serviços</a></li>
      <li><a href="#projetos" onclick="scrollToId('projetos')">Projetos</a></li>
      <li><a href="#processo" onclick="scrollToId('processo')">Como funciona</a></li>
    </ul>
    <a href="#contato" class="btn btn-primary" onclick="scrollToId('contato')">Falar com a gente</a>
  </div></div>`;
}

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
function footer(){
  return `<footer><div class="wrap footer-inner">
    <div class="footer-credit">
      <span class="made">Desenvolvido pela dupla</span>
      <span class="names">Carlos <span>&amp;</span> Gabriela</span>
    </div>
    <div class="footer-links">
      <a href="mailto:gabrielaalvarengc@gmail.com">contato</a>
      <a href="#/dashboard">painel de divulgação</a>
    </div>
  </div></footer>`;
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

/* ---------- LANDING PAGES ----------
 * Cada landing page é uma função de render própria, registrada em
 * LANDING_PAGES por id de projeto. Adicionar uma nova landing page:
 * 1) escrever a função de render (identidade visual própria, livre);
 * 2) registrar aqui: LANDING_PAGES['id-do-projeto'] = renderMinhaLanding;
 * 3) marcar status: PROJECT_STATUS.LIVE no case correspondente em projects.js.
 */
function demoBadge(){
  return `<a href="#/" class="demo-badge">← Voltar ao portfólio</a>`;
}

function renderLandingProfessoraIngles(){
  return `
  <div class="lp">
    ${demoBadge()}
    <nav class="lp-nav"><div class="wrap">
      <div class="lp-logo">Ana Duarte</div>
      <div style="display:flex;align-items:center;gap:12px">
        ${themeToggleBtn()}
        <a href="#agendar" class="lp-btn" onclick="scrollToId('agendar')">Agendar aula</a>
      </div>
    </div></nav>

    <section class="lp-hero">
      <div class="lp-blob" style="width:180px;height:180px;background:#E89AA0;top:20px;left:-60px"></div>
      <div class="lp-blob" style="width:120px;height:120px;background:#EBD3B6;bottom:-30px;right:10%"></div>
      <div class="wrap">
        <div class="lp-hero-copy">
          <div class="lp-eyebrow">Aulas particulares de inglês · 100% online</div>
          <h1>Fale inglês com <em>confiança</em>, no seu ritmo.</h1>
          <p>Aulas particulares para quem quer resultado real — seja para viagem, entrevista de emprego ou intercâmbio. Sem decoreba, com conversação desde o primeiro dia.</p>
          <a href="#agendar" class="lp-btn" onclick="track('contact_click','professora-ingles');scrollToId('agendar')">Agendar aula experimental gratuita</a>
        </div>
        <div class="lp-avatar-wrap"><div class="lp-avatar"></div></div>
      </div>
    </section>

    <section class="lp-section"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Método</div><h2>Aulas pensadas para conversar de verdade, não só decorar regras.</h2></div>
      <div class="lp-cols3">
        <div class="lp-card reveal"><h3>Conversação guiada</h3><p>Cada aula parte de situações reais — o foco é destravar a fala desde a primeira semana.</p></div>
        <div class="lp-card reveal d1"><h3>Material sob medida</h3><p>Conteúdo adaptado ao seu objetivo: trabalho, viagem, prova ou intercâmbio.</p></div>
        <div class="lp-card reveal d2"><h3>Acompanhamento próximo</h3><p>Feedback constante e ajustes de plano conforme sua evolução.</p></div>
      </div>
    </div></section>

    <section class="lp-section alt"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Para quem são as aulas</div><h2>Feitas para diferentes pontos de partida.</h2></div>
      <div class="lp-chips reveal d1">
        <span class="lp-chip">Iniciantes do zero</span><span class="lp-chip">Quem já estudou e travou</span>
        <span class="lp-chip">Preparação para entrevista</span><span class="lp-chip">Intercâmbio e viagem</span>
        <span class="lp-chip">Inglês para o trabalho</span>
      </div>
    </div></section>

    <section class="lp-section"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Modalidade</div><h2>Do jeito que encaixa na sua rotina.</h2></div>
      <div class="lp-cols3">
        <div class="lp-card reveal"><h3>Individual</h3><p>Aulas 1:1, 100% no seu ritmo e foco.</p></div>
        <div class="lp-card reveal d1"><h3>Duplas</h3><p>Estude com um amigo e pratique conversação junto.</p></div>
        <div class="lp-card reveal d2"><h3>Turmas pequenas</h3><p>Grupos de até 4 alunos com nível parecido.</p></div>
      </div>
    </div></section>

    <section class="lp-section alt"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Depoimentos</div><h2>O que dizem os alunos.</h2></div>
      <div class="lp-testimonials">
        <div class="lp-testi reveal"><p>Em 4 meses consegui fazer minha entrevista de emprego toda em inglês. Nunca imaginei chegar tão rápido.</p><div class="who">— Camila R., aluna há 6 meses</div></div>
        <div class="lp-testi reveal d1"><p>As aulas são leves e práticas. Aprendi mais conversando do que em anos de curso tradicional.</p><div class="who">— Diego M., aluno há 1 ano</div></div>
        <div class="lp-testi reveal d2"><p>Fui para o intercâmbio já me sentindo segura para me comunicar no dia a dia.</p><div class="who">— Beatriz L., ex-aluna</div></div>
      </div>
    </div></section>

    <section class="lp-section" id="agendar"><div class="lp-final reveal">
      <h2>Pronta para começar a falar inglês de verdade?</h2>
      <p>Agende uma aula experimental gratuita e conheça o método na prática.</p>
      <a href="mailto:contato@anaduarte-ingles.com" class="lp-btn" onclick="track('contact_click','professora-ingles')">Agendar aula experimental</a>
    </div></section>

    <div class="lp-foot">Case demonstrativo — não representa uma cliente real.<br>Desenvolvido por <strong>Carlos &amp; Gabriela</strong>.</div>
  </div>
  `;
}

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

const LANDING_PAGES = {
  'professora-ingles': renderLandingProfessoraIngles,
  'advocacia': renderLandingAdvocacia,
  'clinica': renderLandingClinica
};

function renderLanding(id){
  const renderer = LANDING_PAGES[id];
  return renderer ? renderer() : renderNotFound();
}

/* ---------- rota não encontrada ---------- */
function renderNotFound(){
  return `
  ${nav()}
  <main><section><div class="wrap" style="text-align:center;padding:4rem 0">
    <span class="eyebrow" style="justify-content:center">Página não encontrada</span>
    <h2 style="margin-top:.8rem">Esse projeto ainda não tem uma landing page pronta.</h2>
    <p style="color:var(--muted);margin-top:.8rem">Volte ao portfólio para ver os projetos disponíveis.</p>
    <a href="#/" class="btn btn-primary" style="margin-top:1.75rem">Voltar ao portfólio</a>
  </div></section></main>
  ${footer()}
  `;
}

/* ---------- observers ---------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }});
  },{threshold:0.12, rootMargin:'0px 0px -6% 0px'});
  els.forEach(e=>io.observe(e));
}
/* fire project_view quando um case entra na tela (uma vez por sessão) */
function initProjectTracking(){
  const cards = document.querySelectorAll('.case-track');
  if(!cards.length) return;
  if(!('IntersectionObserver' in window)){ cards.forEach(c=>{const id=c.dataset.project; if(!seenProjects.has(id)){seenProjects.add(id);track('project_view',id);}}); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const id = en.target.dataset.project;
        if(id && !seenProjects.has(id)){ seenProjects.add(id); track('project_view', id); }
        io.unobserve(en.target);
      }
    });
  },{threshold:0.4});
  cards.forEach(c=>io.observe(c));
}
