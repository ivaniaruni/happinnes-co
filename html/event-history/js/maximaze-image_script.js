document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-results img");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalImage = document.createElement("img");
    modal.appendChild(modalImage);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;";
    modal.appendChild(closeButton);

    document.body.appendChild(modal);

    galleryImages.forEach((image) => {
        image.addEventListener("click", function () {
            modalImage.src = image.src;
            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});