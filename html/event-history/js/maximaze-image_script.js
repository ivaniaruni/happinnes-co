document.addEventListener("DOMContentLoaded", function () {
    // Selecciona las imágenes dentro de .gallery-results
    const galleryImages = document.querySelectorAll(".gallery-results img");

    // Crea el modal dinámicamente
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalImage = document.createElement("img");
    modal.appendChild(modalImage);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;"; // Botón de cierre (X)
    modal.appendChild(closeButton);

    document.body.appendChild(modal);

    // Función para abrir el modal
    galleryImages.forEach((image) => {
        image.addEventListener("click", function () {
            modalImage.src = image.src; // Establece la imagen seleccionada
            modal.style.display = "flex"; // Muestra el modal
        });
    });

    // Función para cerrar el modal
    closeButton.addEventListener("click", function () {
        modal.style.display = "none"; // Oculta el modal
    });

    // Cierra el modal al hacer clic fuera de la imagen
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});