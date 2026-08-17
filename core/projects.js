/* ---------- dados dos projetos/cases do portfólio ----------
 * Adicionar um novo projeto = adicionar uma entrada aqui.
 * status:
 *   'live'         → tem landing page própria (ver LANDING_PAGES em landing-registry.js)
 *   'in-progress'  → landing page está sendo construída
 *   'coming-soon'  → landing page prevista, ainda não iniciada
 *   'concept'      → projeto-conceito, sem landing page própria prevista
 *
 * A home só renderiza os cases 'live'. Os demais ficam aqui como
 * planejamento até a sua landing page existir — sem status pendente
 * aparecendo para o visitante.
 */
const PROJECT_STATUS = {
  LIVE: 'live',
  IN_PROGRESS: 'in-progress',
  COMING_SOON: 'coming-soon',
  CONCEPT: 'concept'
};

const CASES = {
  'professora-ingles': {
    fig:'Fig. 01 — Professora de inglês', segment:'Educação', status: PROJECT_STATUS.LIVE,
    title:'Captar alunos sem depender só de indicação',
    challenge:'Aulas particulares com agenda cheia: prova social, método claro e um único CTA de contato.',
    resolves:['CTA de "agendar aula experimental" logo na primeira dobra','Método e depoimentos organizados para gerar confiança','Contato curto e direto pelo WhatsApp'],
    traffic:'Meta Ads segmentado por interesse (intercâmbio, viagem, carreira) + remarketing para quem visitou e não agendou.',
    preview:'lead'
  },
  'clinica': {
    fig:'Fig. 02 — Clínica odontológica', segment:'Saúde', status: PROJECT_STATUS.LIVE,
    title:'Serviço local com foco em agendamento',
    challenge:'Especialidades em blocos fáceis de escanear e selos de confiança na primeira dobra.',
    resolves:['CTA de "agendar avaliação" logo na primeira dobra','Especialidades em blocos fáceis de escanear','Selo de confiança (anos de atuação, bioseguridade) logo na primeira dobra'],
    traffic:'Google Ads de busca com foco local + remarketing para quem visitou e não agendou, com conversões medidas via GA4.',
    preview:'lead'
  },
  'restaurante': {
    fig:'Fig. 03 — Restaurante & delivery', segment:'Gastronomia', status: PROJECT_STATUS.LIVE,
    title:'Pedido direto, sem depender só de apps',
    challenge:'Cardápio por categoria, fotos em destaque e botão fixo de WhatsApp.',
    resolves:['Fotos dos pratos em destaque, logo no topo','Cardápio organizado por categoria','Botão fixo de pedido direto pelo WhatsApp'],
    traffic:'Meta Ads segmentado por raio de entrega, com promoções sazonais e pixel de conversão no pedido.',
    preview:'menu'
  },
  'advocacia': {
    fig:'Fig. 04 — Escritório de advocacia', segment:'Direito', status: PROJECT_STATUS.LIVE,
    title:'Consulta jurídica sem parecer distante',
    challenge:'Áreas de atuação em blocos claros, com sigilo e prazo de resposta declarados.',
    resolves:['CTA de "consulta inicial sem custo" logo na primeira dobra','Áreas de atuação organizadas em blocos fáceis de entender','Selos de confiança (sigilo, prazo de resposta) reduzindo a hesitação de quem nunca contratou um advogado'],
    traffic:'Google Ads de busca segmentado por área do direito (trabalhista, cível, família) + prova social para reduzir a hesitação do primeiro contato.',
    preview:'lead'
  }
};

function hasLandingPage(id){
  return !!(CASES[id] && CASES[id].status === PROJECT_STATUS.LIVE);
}

function projectTitle(id){
  return (CASES[id] && CASES[id].title) || id;
}

/* preview blueprint por tipo */
function previewInner(type){
  const top = `<div class="bp-top"><span class="bp-dot"></span><span class="bp-dot"></span><span class="bp-dot"></span><span class="bp-url"></span></div>`;
  const markers = `<div class="marker m1" style="top:22%;left:56%">1</div><div class="marker m2" style="top:46%;left:10%">2</div><div class="marker m3" style="bottom:13%;left:10%">3</div>`;
  if(type==='menu'){
    return top + `<div class="bp-tag">Pixel ativo</div>
      <div class="bp-hero"><div class="bp-line w70"></div><div class="bp-line w45"></div></div>
      <div class="bp-strip">
        <div class="bp-item"><div class="bp-swatch"></div><div class="bp-line w90" style="height:5px"></div></div>
        <div class="bp-item"><div class="bp-swatch"></div><div class="bp-line w90" style="height:5px"></div></div>
        <div class="bp-item"><div class="bp-swatch"></div><div class="bp-line w90" style="height:5px"></div></div>
      </div>
      <div class="bp-fab"></div>
      <div class="marker m1" style="top:15%;left:60%">1</div><div class="marker m2" style="top:52%;left:12%">2</div><div class="marker m3" style="bottom:16%;right:14%">3</div>`;
  }
  if(type==='gallery'){
    return top + `<div class="bp-hero"><div class="bp-line w45"></div></div>
      <div class="bp-row"><div class="bp-box"></div><div class="bp-box"></div><div class="bp-box"></div></div>
      <div class="bp-row"><div class="bp-box"></div><div class="bp-box"></div><div class="bp-box"></div></div>
      <div class="marker m1" style="top:36%;left:48%">1</div><div class="marker m2" style="top:36%;right:8%">2</div><div class="marker m3" style="top:14%;right:10%">3</div>`;
  }
  /* lead (hero + form) */
  return top + `<div class="bp-hero"><div class="bp-line w55"></div><div class="bp-line w35"></div><div class="bp-btn"></div></div>
    <div class="bp-row"><div class="bp-box"></div><div class="bp-box"></div><div class="bp-box"></div></div>
    <div class="bp-form"><div class="bp-line w90" style="height:6px"></div></div>` + markers;
}

function caseDetailBlocks(c){
  const resolves = c.resolves.map((r,i)=>`<li><span class="num-badge">${i+1}</span>${r}</li>`).join('');
  return `<div class="case-block"><span class="label">O que a página resolve</span><ul class="legend-list">${resolves}</ul></div>
    <div class="case-block"><span class="label">Estratégia de divulgação</span><p>${c.traffic}</p></div>`;
}

/* case com landing page real: card compacto, preview clicável, detalhe
 * completo (o que resolve + estratégia) fica atrás de um <details>. */
function caseCardLive(id){
  const c = CASES[id];
  return `<article class="case-card reveal">
    <a class="frame preview-link case-track" data-project="${id}" onclick="go('#/landing/${id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}" tabindex="0" role="button" aria-label="Abrir a landing page do case ${c.segment}">
      <div class="bp">${previewInner(c.preview)}<div class="preview-hint"><span>Abrir página</span></div></div>
    </a>
    <div class="case-body">
      <div class="case-meta">
        <span class="case-fig">${c.fig}</span>
        <span class="case-badge">Case conceitual</span>
      </div>
      <h3 class="case-title">${c.title}</h3>
      <p class="case-summary">${c.challenge}</p>
      <div class="case-foot">
        <button type="button" class="btn btn-primary" onclick="go('#/landing/${id}')">Ver página</button>
      </div>
      <details class="case-detail">
        <summary>Decisões por trás dessa página</summary>
        ${caseDetailBlocks(c)}
      </details>
    </div>
  </article>`;
}
