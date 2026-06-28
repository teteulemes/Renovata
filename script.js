/* ============================================
   RENOVATA — script.js
   ============================================ */

/* ── NAV: esconder ao rolar para baixo ── */
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 100) {
    nav.style.transform = 'translateY(-100%)';
    nav.style.transition = 'transform 0.3s ease';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScroll = current;
});

/* ── SCROLL REVEAL (Intersection Observer) ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── BOTÃO + dos produtos: feedback visual ── */
document.querySelectorAll('.produto-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const original = btn.textContent;
    btn.textContent = '✓';
    btn.style.background = '#C9A84C';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
    }, 1800);
  });
});