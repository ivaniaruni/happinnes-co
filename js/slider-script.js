document.addEventListener("DOMContentLoaded", function () {
    const imagesContainer = document.querySelector(".images");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;
    const imageWidth = 290;
    const totalImages = document.querySelectorAll(".images img").length;

    function updateSlider() {
        imagesContainer.style.transform = `translateX(${-index * imageWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        if (index < totalImages - 2) {
            index++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });
});