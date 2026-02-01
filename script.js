const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fades.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});
