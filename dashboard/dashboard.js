/* ---------- painel de divulgação (congelado) ----------
 * Fora de escopo por enquanto — uso interno da Rebeca. Reproduz o
 * comportamento que já existia, apenas movido para cá e usando
 * storageService no lugar de window.storage direto. Sem novas
 * métricas, filtros ou colunas.
 */
async function renderDashboardInto(){
  const root = document.getElementById('dash-root');
  root.innerHTML = `<div class="empty">Carregando eventos…</div>`;
  let events = [];
  try{
    const keys = await storageService.list('events:', true);
    for(const k of keys){
      try{ const raw = await storageService.get(k, true); if(raw) events.push(JSON.parse(raw)); }catch(e){}
    }
  }catch(e){
    root.innerHTML = `<div class="empty">Nenhum evento registrado ainda. Navegue pelo <a href="#/" style="color:var(--cobalt)">portfólio</a> para gerar dados.</div>`;
    return;
  }
  if(events.length === 0){
    root.innerHTML = `<div class="empty">Nenhum evento registrado ainda. Volte ao <a href="#/" style="color:var(--cobalt)">portfólio</a> e navegue pelos cases para ver o funil se preencher.</div>`;
    return;
  }

  const sessionsByStep = {}; EVENT_ORDER.forEach(t=>sessionsByStep[t]=new Set());
  const byProject = {}, byCampaign = {};
  events.forEach(e=>{
    if(sessionsByStep[e.type]) sessionsByStep[e.type].add(e.session);
    if(e.projectId){
      byProject[e.projectId] = byProject[e.projectId] || {views:0,contacts:0};
      if(e.type==='project_view'||e.type==='landing_page_view') byProject[e.projectId].views++;
      if(e.type==='contact_click') byProject[e.projectId].contacts++;
    }
    const camp = e.utm_campaign || '(acesso direto / sem campanha)';
    byCampaign[camp] = byCampaign[camp] || {reached:new Set(),contacts:new Set()};
    if(e.type==='portfolio_view') byCampaign[camp].reached.add(e.session);
    if(e.type==='contact_click') byCampaign[camp].contacts.add(e.session);
  });

  const counts = EVENT_ORDER.map(t=>sessionsByStep[t].size);
  const totalSessions = new Set(events.map(e=>e.session)).size;
  const overallConv = counts[0]>0 ? ((counts[3]/counts[0])*100).toFixed(1) : '0.0';

  const cards = `<div class="dash-cards">
    <div class="dcard"><div class="n">${totalSessions}</div><div class="l">Sessões totais</div></div>
    <div class="dcard"><div class="n">${counts[0]}</div><div class="l">Acessos ao portfólio</div></div>
    <div class="dcard"><div class="n">${counts[3]}</div><div class="l">Cliques em contato</div></div>
    <div class="dcard"><div class="n">${overallConv}%</div><div class="l">Conversão geral</div></div>
  </div>`;
  const funnel = `<div class="funnel">${EVENT_ORDER.map((t,i)=>{
    const rate = i===0?null:(counts[i-1]>0?((counts[i]/counts[i-1])*100).toFixed(0)+'% da etapa anterior':'—');
    return `<div class="fstep"><div class="n">${counts[i]}</div><div class="l">${EVENT_LABEL[t]}</div>${rate?`<div class="r">${rate}</div>`:''}</div>`;
  }).join('')}</div>`;
  const projectRows = Object.entries(byProject).map(([id,v])=>{
    const name=(CASES[id]&&CASES[id].title)||id;
    const rate=v.views>0?((v.contacts/v.views)*100).toFixed(1)+'%':'—';
    return `<tr><td>${name}</td><td>${v.views}</td><td>${v.contacts}</td><td>${rate}</td></tr>`;
  }).join('') || `<tr><td colspan="4" class="empty">Sem visualizações de projeto ainda</td></tr>`;
  const campaignRows = Object.entries(byCampaign).map(([camp,v])=>{
    const rate=v.reached.size>0?((v.contacts.size/v.reached.size)*100).toFixed(1)+'%':'—';
    return `<tr><td>${camp}</td><td>${v.reached.size}</td><td>${v.contacts.size}</td><td>${rate}</td></tr>`;
  }).join('');

  root.innerHTML = `
    ${cards}
    <h3 class="sub">Funil de conversão</h3>${funnel}
    <h3 class="sub">Desempenho por projeto</h3>
    <table><thead><tr><th>Projeto</th><th>Visualizações</th><th>Cliques em contato</th><th>Conversão</th></tr></thead><tbody>${projectRows}</tbody></table>
    <h3 class="sub">Desempenho por campanha (UTM)</h3>
    <table><thead><tr><th>Campanha</th><th>Alcançados</th><th>Contatos</th><th>Conversão</th></tr></thead><tbody>${campaignRows}</tbody></table>
    <p style="font-size:12px;color:var(--faint);margin-top:-10px">Dados anônimos (sessão sem identificação pessoal). Painel de uso interno da Rebeca.</p>`;
}
function renderDashboard(){
  setTimeout(renderDashboardInto,0);
  return `<div class="dash">
    <div class="dash-nav"><div class="wrap">
      <a href="#/" class="brand" style="font-size:.95rem"><span class="brand-mark"></span>Portfólio</a>
      <div class="dash-title">Painel de divulgação — uso interno (Rebeca)</div>
    </div></div>
    <div class="dash-body wrap" id="dash-root"></div>
  </div>`;
}
