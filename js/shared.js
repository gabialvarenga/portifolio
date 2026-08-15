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

/* ---------- componentes compartilhados ----------
 * Usados pelo portfólio (js/portfolio.js) e pelas landing pages
 * (js/landing-*.js). Nada aqui é específico de uma página.
 */
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
function demoBadge(){
  return `<a href="#/" class="demo-badge">← Voltar ao portfólio</a>`;
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
