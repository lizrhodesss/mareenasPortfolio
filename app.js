const button = document.getElementById('bookButton');
const navGallery = document.getElementById('navGallery')
const section = document.getElementById('gallerySection');


button.addEventListener('click', () => {
    window.open('https://www.cutlersalon.com/')
})

navGallery.addEventListener('click', () => {
    scrollToSection('gallerySection')
})

const scrollToSection = (id) => {
    section.scrollIntoView({behavior: 'smooth'})
}

function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('step-animation');
  }
  
  document.querySelector('#toggle-animation').addEventListener('click', classToggle);