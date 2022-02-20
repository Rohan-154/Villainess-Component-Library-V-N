const btnToggle = document.querySelector(".land-hamburgerBtn");
const navbarLinks = document.querySelector(".land-navbar-links");

btnToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  })
  