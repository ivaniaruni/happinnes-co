document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".images");
    const images = document.querySelectorAll(".image-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    // Recalcula el ancho del slider y ajusta el desplazamiento
    function updateSlider() {
        const imageWidth = images[0].offsetWidth; // Ancho de una imagen
        const visibleImages = 1; // Número de imágenes visibles
        const totalWidth = imageWidth * visibleImages; // Ancho total visible
        slider.style.transform = `translateX(${-currentIndex * totalWidth}px)`;
    }

    // Botón "Siguiente"
    nextButton.addEventListener("click", function () {
        if (currentIndex < Math.ceil(images.length / 2) - 1) { // Ajusta el límite para deslizar 2 imágenes
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

    // Recalcula el slider al redimensionar la ventana
    window.addEventListener("resize", updateSlider);

    // Inicializa el slider
    updateSlider();
});