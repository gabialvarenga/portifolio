/* ---------- router ---------- */
function render(){
  const hash = location.hash.replace('#','').split('?')[0];
  const app = document.getElementById('app');
  window.scrollTo(0,0);
  if(hash.startsWith('/landing/')){
    const id = hash.split('/landing/')[1];
    if(hasLandingPage(id)){
      app.innerHTML = renderLanding(id);
      track('landing_page_view', id);
    } else {
      app.innerHTML = renderNotFound();
    }
  } else if(hash.startsWith('/dashboard')){
    app.innerHTML = renderDashboard();
  } else {
    app.innerHTML = renderHome(); track('portfolio_view', null);
    requestAnimationFrame(initProjectTracking);
  }
  requestAnimationFrame(initReveal);
}
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', async () => { await initTheme(); render(); });
