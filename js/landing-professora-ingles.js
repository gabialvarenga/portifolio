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
