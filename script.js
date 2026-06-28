/* ============================================
   RENOVATA — script.js
   ============================================ */

/* ── NAV: esconder/mostrar ao rolar ── */
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const current = window.scrollY;

  if (current > lastScroll && current > 80) {
    nav.style.transform = 'translateY(-100%)';
    nav.style.transition = 'transform 0.3s ease';
  } else {
    nav.style.transform = 'translateY(0)';
  }

  lastScroll = current;
});

/* ── SCROLL SUAVE para links de âncora ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── ANIMAÇÃO ao entrar na tela (Intersection Observer) ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.produto-card, .diferencial, .step, .depoimento').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* Adiciona classe .visible para disparar animação */
document.querySelectorAll('.produto-card, .diferencial, .step, .depoimento').forEach(el => {
  el.addEventListener('transitionend', () => {}, { once: true });
});

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .produto-card.visible,
  .diferencial.visible,
  .step.visible,
  .depoimento.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(styleSheet);

/* ── BOTÃO + dos produtos: feedback visual ── */
document.querySelectorAll('.produto-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.textContent = '✓';
    btn.style.background = 'var(--terra)';
    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = 'var(--moss)';
    }, 1500);
  });
});