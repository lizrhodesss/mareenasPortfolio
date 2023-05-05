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
