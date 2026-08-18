/* Ícones de linha simples (padrão do stroke usado em themeToggleBtn(),
 * js/shared.js) para os cards de Método/Modalidade. */
function lpIcon(name){
  const paths = {
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z"/>',
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-10 10.01-3-3"/>',
    user: '<path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    layers: '<path d="m12 2-10 5 10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'
  };
  return `<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ''}</svg></span>`;
}

/* Retrato ilustrado da professora (personagem fictícia deste case).
 * É SVG inline de propósito: o site precisa continuar abrindo via
 * file:// e sem dependências externas, então nada de <img> remota. */
function lpTeacherPortrait(){
  return `<svg class="lp-avatar-art" viewBox="0 0 320 320" role="img" aria-label="Ilustração da professora">
    <defs><clipPath id="lpFaceClip"><circle cx="160" cy="160" r="156"/></clipPath></defs>
    <g clip-path="url(#lpFaceClip)">
      <!-- cabelo (volume de trás, na altura dos ombros) -->
      <path d="M74 170 C68 92 108 50 160 50 C212 50 252 92 246 170 C244 200 238 220 231 234 L211 234 C221 204 219 178 217 160 C199 178 121 178 103 160 C101 178 99 204 109 234 L89 234 C82 220 76 200 74 170 Z" fill="#3B2622"/>
      <!-- pescoço -->
      <path d="M142 186 h36 v40 q0 14 -18 14 q-18 0 -18 -14 Z" fill="#D89B72"/>
      <!-- rosto -->
      <ellipse cx="160" cy="152" rx="54" ry="62" fill="#E8B48D"/>
      <!-- orelhas -->
      <ellipse cx="107" cy="156" rx="9" ry="12" fill="#E8B48D"/>
      <ellipse cx="213" cy="156" rx="9" ry="12" fill="#E8B48D"/>
      <!-- brincos -->
      <circle cx="107" cy="170" r="4" fill="#EBD3B6"/>
      <circle cx="213" cy="170" r="4" fill="#EBD3B6"/>
      <!-- franja -->
      <path d="M105 132 C109 86 132 64 160 64 C188 64 211 86 215 132 C197 110 184 105 160 105 C136 105 123 110 105 132 Z" fill="#3B2622"/>
      <!-- sobrancelhas -->
      <path d="M126 138 q12 -6 24 -1" stroke="#3B2622" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M194 138 q-12 -6 -24 -1" stroke="#3B2622" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- olhos -->
      <circle cx="138" cy="156" r="5" fill="#3B2622"/>
      <circle cx="182" cy="156" r="5" fill="#3B2622"/>
      <!-- óculos -->
      <g stroke="#3B2622" stroke-width="3.5" fill="none" stroke-linecap="round">
        <circle cx="138" cy="156" r="21"/>
        <circle cx="182" cy="156" r="21"/>
        <path d="M159 156 h2"/>
        <path d="M117 152 l-12 -5"/>
        <path d="M203 152 l12 -5"/>
      </g>
      <!-- nariz e sorriso -->
      <path d="M160 164 v11 q0 4 5 5" stroke="#C98A63" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M147 190 q13 11 26 0" stroke="#A8544F" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <!-- busto / blusa -->
      <path d="M44 320 C44 262 96 232 160 232 C224 232 276 262 276 320 Z" fill="#3A1F2B"/>
      <!-- gola -->
      <path d="M142 236 q18 22 36 0" stroke="#EBD3B6" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`;
}

function renderLandingProfessoraIngles(){
  const wa = 'https://wa.me/5511999999999';
  return `
  <div class="lp-professora">
    <nav class="lp-nav"><div class="wrap">
      <div class="lp-logo">Ana Duarte</div>
      <ul class="lp-nav-links">
        <li><a href="#sobre" onclick="goToSection(event,'sobre')">Quem ensina</a></li>
        <li><a href="#metodo" onclick="goToSection(event,'metodo')">Método</a></li>
        <li><a href="#como-funciona" onclick="goToSection(event,'como-funciona')">Como funciona</a></li>
        <li><a href="#planos" onclick="goToSection(event,'planos')">Planos</a></li>
        <li><a href="#depoimentos" onclick="goToSection(event,'depoimentos')">Depoimentos</a></li>
        <li><a href="#duvidas" onclick="goToSection(event,'duvidas')">Dúvidas</a></li>
      </ul>
      <div class="lp-nav-actions">
        ${themeToggleBtn()}
        <a href="${wa}" class="lp-btn lp-btn-sm" onclick="track('contact_click','professora-ingles')">Agendar aula</a>
      </div>
    </div></nav>

    <section class="lp-hero">
      <div class="lp-blob" style="width:180px;height:180px;background:#E89AA0;top:20px;left:-60px"></div>
      <div class="lp-blob" style="width:120px;height:120px;background:#EBD3B6;bottom:-30px;right:10%"></div>
      <div class="wrap">
        <div class="lp-hero-copy">
          <div class="lp-eyebrow">Aulas particulares de inglês · 100% online</div>
          <h1>Fale inglês com <em>confiança</em>, no seu ritmo.</h1>
          <p class="lead">Aulas particulares para quem quer resultado real — seja para viagem, entrevista de emprego ou intercâmbio. Sem decoreba, com conversação desde o primeiro dia.</p>
          <div class="lp-hero-actions">
            <a href="${wa}" class="lp-btn" onclick="track('contact_click','professora-ingles')">Agendar aula experimental gratuita</a>
            <a href="#planos" class="lp-btn lp-btn-ghost" onclick="goToSection(event,'planos')">Ver planos</a>
          </div>
          <div class="lp-trust">
            <div class="lp-trust-item"><span class="dot"></span>+5 anos de experiência</div>
            <div class="lp-trust-item"><span class="dot"></span>Certificação Cambridge CELTA</div>
            <div class="lp-trust-item"><span class="dot"></span>+300 aulas ministradas</div>
          </div>
        </div>
        <div class="lp-avatar-wrap">
          <div class="lp-avatar">${lpTeacherPortrait()}</div>
          <div class="lp-avatar-badge"><strong>4.9 ★</strong><span>+80 avaliações</span></div>
        </div>
      </div>
    </section>

    <section class="lp-section" id="sobre"><div class="wrap">
      <div class="reveal lp-about">
        <div>
          <div class="lp-eyebrow">Quem ensina</div>
          <h2>Ana Duarte, professora de inglês há mais de 5 anos.</h2>
          <p>Formada em Letras (Português/Inglês) e com certificação internacional Cambridge CELTA, já ajudei alunos de todos os níveis — do zero absoluto a quem só precisava destravar a fala — a usar o inglês de verdade, não só passar em prova.</p>
          <p>O foco de cada aula é conversação real, adaptada ao objetivo de quem está aprendendo: viagem, trabalho, intercâmbio ou entrevista.</p>
        </div>
        <ul class="lp-credentials">
          <li><span class="ico">✓</span>Licenciada em Letras — Português/Inglês</li>
          <li><span class="ico">✓</span>Certificação internacional Cambridge CELTA</li>
          <li><span class="ico">✓</span>+5 anos de experiência com aulas particulares</li>
          <li><span class="ico">✓</span>+300 aulas ministradas, alunos de 15 a 60 anos</li>
        </ul>
      </div>
    </div></section>

    <section class="lp-section alt" id="metodo"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Método</div><h2>Aulas pensadas para conversar de verdade, não só decorar regras.</h2></div>
      <div class="lp-cols3">
        <div class="lp-card reveal">${lpIcon('chat')}<h3>Conversação guiada</h3><p>Cada aula parte de situações reais — o foco é destravar a fala desde a primeira semana.</p></div>
        <div class="lp-card reveal d1">${lpIcon('book')}<h3>Material sob medida</h3><p>Conteúdo adaptado ao seu objetivo: trabalho, viagem, prova ou intercâmbio.</p></div>
        <div class="lp-card reveal d2">${lpIcon('check')}<h3>Acompanhamento próximo</h3><p>Feedback constante e ajustes de plano conforme sua evolução.</p></div>
      </div>
    </div></section>

    <section class="lp-section"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Para quem são as aulas</div><h2>Feitas para diferentes pontos de partida.</h2></div>
      <div class="lp-chips reveal d1">
        <span class="lp-chip">Iniciantes do zero</span><span class="lp-chip">Quem já estudou e travou</span>
        <span class="lp-chip">Preparação para entrevista</span><span class="lp-chip">Intercâmbio e viagem</span>
        <span class="lp-chip">Inglês para o trabalho</span>
      </div>
    </div></section>

    <section class="lp-section alt"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Modalidade</div><h2>Do jeito que encaixa na sua rotina.</h2></div>
      <div class="lp-cols3">
        <div class="lp-card reveal">${lpIcon('user')}<h3>Individual</h3><p>Aulas 1:1, 100% no seu ritmo e foco.</p></div>
        <div class="lp-card reveal d1">${lpIcon('users')}<h3>Duplas</h3><p>Estude com um amigo e pratique conversação junto.</p></div>
        <div class="lp-card reveal d2">${lpIcon('layers')}<h3>Turmas pequenas</h3><p>Grupos de até 4 alunos com nível parecido.</p></div>
      </div>
    </div></section>

    <section class="lp-section" id="como-funciona"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Como funciona</div><h2>Do primeiro contato à sua evolução acompanhada.</h2></div>
      <div class="lp-steps">
        <div class="lp-step reveal"><span class="n">1</span><h3>Contato inicial</h3><p>Você me chama no WhatsApp e conta seu objetivo com o inglês.</p></div>
        <div class="lp-step reveal d1"><span class="n">2</span><h3>Aula experimental</h3><p>Uma aula gratuita pra você sentir o método na prática, sem compromisso.</p></div>
        <div class="lp-step reveal d2"><span class="n">3</span><h3>Plano personalizado</h3><p>Monto um plano de estudo com base no seu nível e objetivo.</p></div>
        <div class="lp-step reveal d3"><span class="n">4</span><h3>Aulas + acompanhamento</h3><p>Aulas semanais com ajustes constantes conforme sua evolução.</p></div>
      </div>
    </div></section>

    <section class="lp-section alt" id="planos"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Planos</div><h2>Escolha o ritmo que faz sentido pra você.</h2><p>Valores de exemplo para este case demonstrativo.</p></div>
      <div class="lp-plans">
        <div class="lp-plan reveal">
          <h3>Avulsa</h3>
          <div class="price">R$ 90<span>/aula</span></div>
          <div class="desc">Pra experimentar sem compromisso.</div>
          <ul>
            <li>1 aula de 50 minutos</li>
            <li>Material da aula incluso</li>
            <li>Agendamento flexível</li>
          </ul>
          <a href="${wa}" class="lp-btn lp-btn-ghost" onclick="track('contact_click','professora-ingles')">Agendar</a>
        </div>
        <div class="lp-plan featured reveal d1">
          <span class="lp-plan-tag">Mais popular</span>
          <h3>Mensal</h3>
          <div class="price">R$ 320<span>/mês</span></div>
          <div class="desc">4 aulas por mês, 1x por semana.</div>
          <ul>
            <li>4 aulas de 50 minutos</li>
            <li>Plano de estudo personalizado</li>
            <li>Suporte pelo WhatsApp entre aulas</li>
            <li>Material incluso</li>
          </ul>
          <a href="${wa}" class="lp-btn" onclick="track('contact_click','professora-ingles')">Agendar</a>
        </div>
        <div class="lp-plan reveal d2">
          <h3>Trimestral</h3>
          <div class="price">R$ 850<span>/trimestre</span></div>
          <div class="desc">12 aulas, ritmo constante — economize.</div>
          <ul>
            <li>12 aulas de 50 minutos</li>
            <li>Acompanhamento de evolução</li>
            <li>Plano de estudo revisado mensalmente</li>
            <li>Prioridade de horário</li>
          </ul>
          <a href="${wa}" class="lp-btn lp-btn-ghost" onclick="track('contact_click','professora-ingles')">Agendar</a>
        </div>
      </div>
      <p class="lp-plans-note">Valores fictícios — exemplo de estrutura de planos para o case demonstrativo.</p>
    </div></section>

    <section class="lp-section" id="depoimentos"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Depoimentos</div><h2>O que dizem os alunos.</h2></div>
      <div class="lp-testimonials">
        <div class="lp-testi reveal"><p>Em 4 meses consegui fazer minha entrevista de emprego toda em inglês. Nunca imaginei chegar tão rápido.</p><div class="who">— Camila R., aluna há 6 meses</div></div>
        <div class="lp-testi reveal d1"><p>As aulas são leves e práticas. Aprendi mais conversando do que em anos de curso tradicional.</p><div class="who">— Diego M., aluno há 1 ano</div></div>
        <div class="lp-testi reveal d2"><p>Fui para o intercâmbio já me sentindo segura para me comunicar no dia a dia.</p><div class="who">— Beatriz L., ex-aluna</div></div>
      </div>
    </div></section>

    <section class="lp-section alt" id="duvidas"><div class="wrap">
      <div class="reveal"><div class="lp-eyebrow">Dúvidas frequentes</div><h2>Antes de agendar, você provavelmente quer saber:</h2></div>
      <div class="lp-faq reveal d1">
        <details class="lp-faq-item">
          <summary>Preciso já saber alguma coisa de inglês pra começar?</summary>
          <p>Não. As aulas são adaptadas ao seu nível atual, do zero absoluto ao avançado.</p>
        </details>
        <details class="lp-faq-item">
          <summary>As aulas são ao vivo ou gravadas?</summary>
          <p>Todas as aulas são ao vivo, individuais ou em grupo pequeno, com interação direta comigo.</p>
        </details>
        <details class="lp-faq-item">
          <summary>Posso remarcar ou cancelar uma aula?</summary>
          <p>Sim, com até 24h de antecedência, sem custo adicional.</p>
        </details>
        <details class="lp-faq-item">
          <summary>Quanto tempo leva até eu conseguir conversar com confiança?</summary>
          <p>Varia de pessoa pra pessoa, mas a maioria consegue sustentar uma conversa simples entre 3 e 4 meses de aulas semanais.</p>
        </details>
        <details class="lp-faq-item">
          <summary>Funciona pra quem já estudou antes e travou?</summary>
          <p>Sim — é um dos perfis mais comuns. O foco vira destravar a fala, não recomeçar do zero.</p>
        </details>
      </div>
    </div></section>

    <section class="lp-section" id="agendar"><div class="lp-final reveal">
      <h2>Pronta para começar a falar inglês de verdade?</h2>
      <p>Agende uma aula experimental gratuita e conheça o método na prática.</p>
      <div class="lp-final-actions">
        <a href="${wa}" class="lp-btn" onclick="track('contact_click','professora-ingles')">Chamar no WhatsApp</a>
        <a href="mailto:contato@anaduarte-ingles.com" class="lp-btn lp-btn-ghost" onclick="track('contact_click','professora-ingles')">Enviar e-mail</a>
      </div>
    </div></section>

    <div class="lp-foot">Case demonstrativo — não representa uma cliente real.<br>Desenvolvido por <strong>Carlos &amp; Gabriela</strong>.</div>
  </div>
  `;
}
