
const button = document.querySelector('.back-to-top');
if (button) {
  window.addEventListener('scroll', () => {
    button.style.display = window.scrollY > 400 ? 'inline-flex' : 'none';
  });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
