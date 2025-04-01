/* Home */
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

/* Upcoming Events */
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
        upcomingSlider.style.transform = `translateX(${-currentIndexUpcoming * imageWidth}px)`;
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

/* Event History */
document.addEventListener("DOMContentLoaded", function () {
    const historySliderContainer = document.querySelector(".gallery-history");
    const historySlider = historySliderContainer.querySelector(".images-event-history");
    const historyImages = historySliderContainer.querySelectorAll(".image-item-event-history");
    const prevHistoryButton = historySliderContainer.querySelector(".prev-event-history");
    const nextHistoryButton = historySliderContainer.querySelector(".next-event-history");

    let currentIndexHistory = 0;

    const visibleImagesHistory = 3;

    function updateHistorySlider() {
        const imageWidth = historyImages[0].offsetWidth; 
        const totalWidth = imageWidth * historyImages.length;
        historySlider.style.transform = `translateX(${-currentIndexHistory * imageWidth}px)`;
    }

    nextHistoryButton.addEventListener("click", function () {
        if (currentIndexHistory < historyImages.length - visibleImagesHistory) {
            currentIndexHistory++;
            updateHistorySlider();
        }
    });

    prevHistoryButton.addEventListener("click", function () {
        if (currentIndexHistory > 0) {
            currentIndexHistory--;
            updateHistorySlider();
        }
    });

    window.addEventListener("resize", updateHistorySlider);
    updateHistorySlider();
});