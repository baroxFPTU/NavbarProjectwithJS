const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('aside.navbar');
let closeButton = document.querySelector('.btn-close');

// Functions
function toggleNavbar() {
    navbar.classList.toggle('visible');
}

// Handle  events
navbarToggle.addEventListener('click', toggleNavbar);
closeButton.addEventListener('click', toggleNavbar);