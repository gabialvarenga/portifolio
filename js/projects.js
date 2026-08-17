/* ---------- dados dos projetos/cases do portfólio ----------
 * Adicionar um novo projeto = adicionar uma entrada aqui.
 * status:
 *   'live'         → tem landing page própria (ver LANDING_PAGES em app.js)
 *   'in-progress'  → landing page está sendo construída
 *   'coming-soon'  → landing page prevista, ainda não iniciada
 *   'concept'      → projeto-conceito, sem landing page própria prevista
 */
const PROJECT_STATUS = {
  LIVE: 'live',
  IN_PROGRESS: 'in-progress',
  COMING_SOON: 'coming-soon',
  CONCEPT: 'concept'
};

const STATUS_META = {
  [PROJECT_STATUS.LIVE]:         { label: 'Landing page disponível', cssClass: '' },
  [PROJECT_STATUS.IN_PROGRESS]:  { label: 'Em desenvolvimento',      cssClass: 'is-progress' },
  [PROJECT_STATUS.COMING_SOON]:  { label: 'Landing page em breve',   cssClass: 'is-soon' },
  [PROJECT_STATUS.CONCEPT]:      { label: 'Projeto-conceito',        cssClass: '' }
};

const CASES = {
  'professora-ingles': {
    fig:'Fig. 01 — Professora de inglês', segment:'Educação', status: PROJECT_STATUS.LIVE,
    title:'Captar alunos sem depender só de indicação',
    challenge:'Professora particular que dependia quase só de boca a boca e queria começar a captar alunos ativamente pela internet.',
    resolves:['CTA de "agendar aula experimental" logo na primeira dobra','Método e depoimentos organizados para gerar confiança','Contato curto e direto pelo WhatsApp'],
    traffic:'Meta Ads segmentado por interesse (intercâmbio, viagem, carreira) + remarketing para quem visitou e não agendou.',
    preview:'lead'
  },
  'clinica': {
    fig:'Fig. 02 — Clínica odontológica', segment:'Saúde', status: PROJECT_STATUS.LIVE,
    title:'Serviço local com foco em agendamento',
    challenge:'Consultório que dependia quase só de indicação, com poucos agendamentos vindo da internet.',
    resolves:['CTA de "agendar avaliação" logo na primeira dobra','Especialidades em blocos fáceis de escanear','Selo de confiança (anos de atuação, bioseguridade) logo na primeira dobra'],
    traffic:'Google Ads de busca com foco local + remarketing para quem visitou e não agendou, com conversões medidas via GA4.',
    preview:'lead'
  },
  'restaurante': {
    fig:'Fig. 03 — Restaurante & delivery', segment:'Gastronomia', status: PROJECT_STATUS.LIVE,
    title:'Pedido direto, sem depender só de apps',
    challenge:'Delivery concentrado em aplicativos de terceiros, com taxas altas comendo a margem de cada pedido.',
    resolves:['Fotos dos pratos em destaque, logo no topo','Cardápio organizado por categoria','Botão fixo de pedido direto pelo WhatsApp'],
    traffic:'Meta Ads segmentado por raio de entrega, com promoções sazonais e pixel de conversão no pedido.',
    preview:'menu'
  },
  'moda': {
    fig:'Fig. 04 — Loja de moda', segment:'Moda', status: PROJECT_STATUS.CONCEPT,
    title:'Testar venda online sem montar um e-commerce inteiro',
    challenge:'Loja física querendo vender uma coleção específica online, sem investir numa loja virtual completa ainda.',
    resolves:['Vitrine enxuta com os produtos da coleção','Compra finalizada direto pelo WhatsApp','Rastreamento pronto para remarketing'],
    traffic:'Google Shopping + remarketing dinâmico para quem viu peças específicas e não finalizou a compra.',
    preview:'gallery'
  },
  'advocacia': {
    fig:'Fig. 05 — Escritório de advocacia', segment:'Direito', status: PROJECT_STATUS.LIVE,
    title:'Consulta jurídica sem parecer distante',
    challenge:'Escritório que queria atrair clientes pela internet sem parecer burocrático ou intimidador logo no primeiro contato.',
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

function caseCard(id){
  const c = CASES[id];
  const status = STATUS_META[c.status] || STATUS_META[PROJECT_STATUS.CONCEPT];
  const resolves = c.resolves.map((r,i)=>`<li><span class="num-badge">${i+1}</span>${r}</li>`).join('');
  const live = c.status === PROJECT_STATUS.LIVE;
  const preview = live
    ? `<a class="frame preview-link case-track" data-project="${id}" onclick="go('#/landing/${id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}" tabindex="0" role="button" aria-label="Abrir a landing page do case ${c.segment}">
         <div class="bp">${previewInner(c.preview)}<div class="preview-hint"><span>Ver landing page →</span></div></div>
       </a>`
    : `<div class="frame case-track" data-project="${id}"><div class="bp">${previewInner(c.preview)}</div></div>`;
  const foot = live
    ? `<div class="case-foot"><button type="button" class="btn btn-ghost" onclick="go('#/landing/${id}')">Ver landing page →</button></div>`
    : `<div class="case-foot"><span class="case-status ${status.cssClass}">◆ ${status.label}</span></div>`;
  return `<article class="case-card reveal">
    ${preview}
    <div>
      <span class="case-fig">${c.fig}</span>
      <h3 class="case-title">${c.title}</h3>
      <div class="case-block"><span class="label">Desafio</span><p>${c.challenge}</p></div>
      <div class="case-block"><span class="label">O que a página resolve</span><ul class="legend-list">${resolves}</ul></div>
      <div class="case-block"><span class="label">Estratégia de divulgação</span><p>${c.traffic}</p></div>
      ${foot}
    </div>
  </article>`;
}
