function initializeNavToggle(scope = document) {
  const menuToggle = scope.querySelector('.menu-toggle');
  const nav = scope.querySelector('#primary-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
  }
}

function injectNavbar() {
  const navPlaceholder = document.getElementById('navbar-placeholder');

  if (!navPlaceholder) return;

  fetch('nav.html')
    .then((response) => response.text())
    .then((html) => {
      navPlaceholder.innerHTML = html;
      initializeNavToggle(navPlaceholder);
    })
    .catch((error) => {
      console.error('Unable to load navigation:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
});
