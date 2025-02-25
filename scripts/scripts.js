const hamburger = document.querySelector('.nav-hamburger');
const linksContainer = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-menu-link a');

hamburger.addEventListener('click', () => {
  linksContainer.classList.toggle('active');
  hamburger.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if(window.matchMedia("(max-width:550px)").matches){
    closeMenu();
  }
});

if(window.matchMedia("(max-width:550px)").matches){
  closeMenu();
}

function closeMenu(){
  links.forEach(link => {
    link.addEventListener('click', () => {
      linksContainer.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-class");
  if (window.scrollY > 70) { 
    header.classList.add("scrolled"); // Add class when scrolled
  } else {
    header.classList.remove("scrolled"); // Remove class at the top
  }
});
