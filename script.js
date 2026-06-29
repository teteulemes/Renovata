/* RENOVATA — script.js */

// Nav shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('shadow', window.scrollY > 20);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero fade-up trigger
document.querySelectorAll('.fade-up').forEach(el => {
  el.style.animationPlayState = 'running';
});

// Product add button feedback
document.querySelectorAll('.card-add').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.textContent = '✓';
    btn.style.background = 'var(--d2)';
    setTimeout(() => { btn.textContent = '+'; btn.style.background = ''; }, 1800);
  });
});