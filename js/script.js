const sliders = document.querySelectorAll('.sliders');
const body = document.body;

sliders.forEach(sliders => {
    sliders.addEventListener('click', () => {
        removeActiveClasses();
        sliders.classList.add('active');
        body.style.backgroundImage = sliders.style.backgroundImage;
    })
})

function removeActiveClasses() {
    sliders.forEach(sliders => {
        sliders.classList.remove('active');
    })
}