document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const suggestionsContainer = document.getElementById("suggestions");

    // Lista de páginas disponibles
    const pages = [
        //Events History
        { name: "Carnaval", url: "./carnaval.html" },
        { name: "Feria", url: "./fair.html" },
        { name: "Folklore", url: "./folklore.html" },
        { name: "Opera", url: "./opera.html" },
        { name: "Escultura", url: "./sculpture.html" },
        { name: "Cortos", url: "./short-film.html" },
        { name: "Versos", url: "./verses.html" },
        { name: "Taller", url: "./workshop.html" },
        
        //Upcoming events
        { name: "Simfonía", url: "./symphonic.html" },
        { name: "Cine", url: "./cinema.html" },
        { name: "Teatro", url: "./theater.html" },
        { name: "Arte", url: "./art.html" },
        { name: "Fotografía", url: "./photo.html" },
        { name: "Poesía", url: "./poetry.html" },
        { name: "Danza", url: "./dance.html" },
        { name: "Libros", url: "./books.html" },
    ];

    // Función para mostrar sugerencias
    function showSuggestions(query) {
        const filteredPages = pages.filter((page) =>
            page.name.toLowerCase().includes(query.toLowerCase())
        );

        suggestionsContainer.innerHTML = "";

        if (filteredPages.length > 0 && query) {
            suggestionsContainer.style.display = "block";
            filteredPages.forEach((page) => {
                const suggestion = document.createElement("div");
                suggestion.textContent = page.name;
                suggestion.addEventListener("click", function () {
                    window.location.href = page.url;
                });
                suggestionsContainer.appendChild(suggestion);
            });
        } else {
            suggestionsContainer.style.display = "none";
        }
    }

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim();
        showSuggestions(query);
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".search")) {
            suggestionsContainer.style.display = "none";
        }
    });

    function searchPage() {
        const query = searchInput.value.trim().toLowerCase();
        const result = pages.find((page) => page.name.toLowerCase().includes(query));

        if (result) {
            window.location.href = result.url;
        } else {
            alert("No se encontró ninguna página con ese término.");
        }
    }

    searchButton.addEventListener("click", function (e) {
        e.preventDefault();
        searchPage();
    });

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            searchPage();
        }
    });
});