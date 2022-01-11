// Carousel
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems,{
      indicators: true,
      duration: 100
    });
  });

// Menu-Mobile
elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav,{
  edge: "right"
});

// Animação Scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();

// Scroll Suave
const menuItems = document.querySelectorAll('.nav-wrapper a')

menuItems.forEach(item =>{
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;
  
  window.scroll({
    top: to,
    behavior: "smooth"
  });
}