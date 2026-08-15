/* ---------- registro de landing pages ----------
 * Carregado por último entre os arquivos de landing page.
 * Adicionar uma nova: criar js/landing-<id>.js com sua função de
 * render, ligar o script em index.html (antes deste arquivo) e
 * registrar a função aqui com a chave igual ao id do case.
 */
const LANDING_PAGES = {
  'professora-ingles': renderLandingProfessoraIngles,
  'advocacia': renderLandingAdvocacia,
  'clinica': renderLandingClinica
};

function renderLanding(id){
  const renderer = LANDING_PAGES[id];
  return renderer ? renderer() : renderNotFound();
}
