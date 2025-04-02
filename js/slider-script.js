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

/* About Us */
document.addEventListener("DOMContentLoaded", function () {
    const aboutusSliderContainer = document.querySelector(".gallery-about_us");
    const aboutusSlider = aboutusSliderContainer.querySelector(".images-about_us");
    const aboutusImages = aboutusSliderContainer.querySelectorAll(".image-item-about_us");
    const prevAboutUsButton = aboutusSliderContainer.querySelector(".prev-about_us");
    const nextAboutUsButton = aboutusSliderContainer.querySelector(".next-about_us");

    let currentIndexAboutUs = 0;

    const visibleImagesAboutUs = 3;

    function updateAboutUsSlider() {
        const imageWidth = aboutusImages[0].offsetWidth; 
        const totalWidth = imageWidth * aboutusImages.length;
        aboutusSlider.style.transform = `translateX(${-currentIndexAboutUs * imageWidth}px)`;
    }

    nextAboutUsButton.addEventListener("click", function () {
        if (currentIndexAboutUs < aboutusImages.length - visibleImagesAboutUs) {
            currentIndexAboutUs++;
            updateAboutUsSlider();
        }
    });

    prevAboutUsButton.addEventListener("click", function () {
        if (currentIndexAboutUs > 0) {
            currentIndexAboutUs--;
            updateAboutUsSlider();
        }
    });

    window.addEventListener("resize", updateAboutUsSlider);
    updateAboutUsSlider();
});

/* Sources */
document.addEventListener("DOMContentLoaded", function () {
    const sourcesSliderContainer = document.querySelector(".gallery-sources");
    const sourcesSlider = sourcesSliderContainer.querySelector(".images-sources");
    const sourcesImages = sourcesSliderContainer.querySelectorAll(".image-item-sources");
    const prevSourcesButton = sourcesSliderContainer.querySelector(".prev-sources");
    const nextSourcesButton = sourcesSliderContainer.querySelector(".next-sources");

    let currentIndexSources = 0;

    const visibleImagesSources = 3;

    function updateSourcesSlider() {
        const imageWidth = sourcesImages[0].offsetWidth; 
        const totalWidth = imageWidth * sourcesImages.length;
        sourcesSlider.style.transform = `translateX(${-currentIndexSources * imageWidth}px)`;
    }

    nextSourcesButton.addEventListener("click", function () {
        if (currentIndexSources < sourcesImages.length - visibleImagesSources) {
            currentIndexSources++;
            updateSourcesSlider();
        }
    });

    prevSourcesButton.addEventListener("click", function () {
        if (currentIndexSources > 0) {
            currentIndexSources--;
            updateSourcesSlider();
        }
    });

    window.addEventListener("resize", updateSourcesSlider);
    updateSourcesSlider();
});

/* Events */
