var navbar = document.querySelector('.navbar');

function toggleMenu() {
  navbar.style.display = navbar.style.display == 'block' ? null : 'block';
}

var header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 50) header.classList.add('fixed');
  else header.classList.remove('fixed');
});
