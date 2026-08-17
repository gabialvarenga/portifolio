/* ---------- rastreamento de eventos (congelado) ----------
 * Fora de escopo por enquanto: qualquer evolução de rastreamento,
 * UTM, funil ou análise de campanhas (uso da Rebeca). Este arquivo
 * só reproduz o comportamento que já existia, movido para cá para
 * manter a organização em arquivos — sem mudança de lógica.
 */
const EVENT_ORDER = ['portfolio_view', 'project_view', 'landing_page_view', 'contact_click'];
const EVENT_LABEL = { portfolio_view:'Portfólio', project_view:'Case visto', landing_page_view:'Landing page', contact_click:'Contato' };

const params = new URLSearchParams(location.search);
const campaign = {
  utm_source: params.get('utm_source') || null,
  utm_medium: params.get('utm_medium') || null,
  utm_campaign: params.get('utm_campaign') || null,
};
const sessionId = 'sess_' + Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
const seenProjects = new Set();

async function track(type, projectId){
  const event = { type, projectId: projectId||null, timestamp: Date.now(), session: sessionId, ...campaign };
  try{
    const key = 'events:' + event.timestamp + '_' + Math.random().toString(36).slice(2,8);
    await storageService.set(key, JSON.stringify(event), true);
  }catch(e){ console.error('tracking error', e); }
}
