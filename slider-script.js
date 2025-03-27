const slider = document.querySelector('.slider .images');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.slider .prev');
const nextButton = document.querySelector('.slider .next');

let currentIndex = 0;
const imagesPerSlide = 2;

function updateSlider() {
    const width = slider.clientWidth;
    slider.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : Math.ceil(images.length / imagesPerSlide) - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < Math.ceil(images.length / imagesPerSlide) - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

window.addEventListener('resize', updateSlider);