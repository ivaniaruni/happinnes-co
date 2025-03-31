document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".images");
    const images = document.querySelectorAll(".image-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    function updateSlider() {
        const imageWidth = images[0].offsetWidth;
        const visibleImages = 1;
        const totalWidth = imageWidth * visibleImages;
        slider.style.transform = `translateX(${-currentIndex * totalWidth}px)`;
    }

    // Botón "Siguiente"
    nextButton.addEventListener("click", function () {
        if (currentIndex < Math.ceil(images.length / 2) - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Botón "Anterior"
    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const upcomingSliderContainer = document.querySelector(".gallery-upcoming");
    const upcomingSlider = upcomingSliderContainer.querySelector(".images-upcoming");
    const upcomingImages = upcomingSliderContainer.querySelectorAll(".image-item-upcoming");
    const prevUpcomingButton = upcomingSliderContainer.querySelector(".prev-upcoming");
    const nextUpcomingButton = upcomingSliderContainer.querySelector(".next-upcoming");

    let currentIndexUpcoming = 0;

    const visibleImagesUpcoming = 3;

    function updateUpcomingSlider() {
        const imageWidth = upcomingImages[0].offsetWidth; 
        const totalWidth = imageWidth * upcomingImages.length;
        upcomingSlider.style.transform = `translateX(${-currentIndexUpcoming * imageWidth}px)`; // Desplazamiento basado en el índice actual
    }

    nextUpcomingButton.addEventListener("click", function () {
        if (currentIndexUpcoming < upcomingImages.length - visibleImagesUpcoming) {
            currentIndexUpcoming++;
            updateUpcomingSlider();
        }
    });

    prevUpcomingButton.addEventListener("click", function () {
        if (currentIndexUpcoming > 0) {
            currentIndexUpcoming--;
            updateUpcomingSlider();
        }
    });

    window.addEventListener("resize", updateUpcomingSlider);
    updateUpcomingSlider();
});