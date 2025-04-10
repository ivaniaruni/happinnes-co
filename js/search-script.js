document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const suggestionsContainer = document.getElementById("suggestions");

    // List of available pages
    const pages = [
        //Events History
        { name: "Carnaval", url: "/html/event-history/carnaval.html" },
        { name: "Feria", url: "/html/event-history/fair.html" },
        { name: "Folklore", url: "/html/event-history/folklore.html" },
        { name: "Opera", url: "/html/event-history/opera.html" },
        { name: "Escultura", url: "/html/event-history/sculpture.html" },
        { name: "Cortos", url: "/html/event-history/short-film.html" },
        { name: "Versos", url: "/html/event-history/verses.html" },
        { name: "Taller", url: "/html/event-history/workshop.html" },
        
        //Upcoming events
        { name: "Simfonía", url: "/html/upcoming-events/symphonic.html" },
        { name: "Cine", url: "/html/upcoming-events/cinema.html" },
        { name: "Teatro", url: "/html/upcoming-events/theater.html" },
        { name: "Arte", url: "/html/upcoming-events/art.html" },
        { name: "Fotografía", url: "/html/upcoming-events/photo.html" },
        { name: "Poesía", url: "/html/upcoming-events/poetry.html" },
        { name: "Danza", url: "/html/upcoming-events/dance.html" },
        { name: "Libros", url: "/html/upcoming-events/books.html" },
    ];

    // Function to show suggestions
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