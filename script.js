const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    nav.style.backgroundColor = '#f0f0f0';
  } else {
    nav.style.backgroundColor = 'white';
  }
});
