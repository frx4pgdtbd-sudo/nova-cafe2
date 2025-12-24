// Scroll Animation für Sektionen
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
      sec.style.transition = 'all 0.8s ease';
    } else {
      sec.style.opacity = '0.5';
      sec.style.transform = 'translateY(20px)';
    }
  });
});
