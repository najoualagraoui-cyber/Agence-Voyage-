
// ===== MENU RESPONSIVE =====

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        const ouvert = navLinks.classList.toggle("open");

        menuButton.textContent = ouvert ? "✕" : "☰";

        menuButton.setAttribute("aria-expanded", ouvert);

    });

}


// ===== FILTRER LES DESTINATIONS =====

const filterButtons = document.querySelectorAll(".filter-btn");

const destinationCards = document.querySelectorAll(".destination-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Retirer la classe active des autres boutons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activer le bouton choisi
        button.classList.add("active");

        // Récupérer la catégorie choisie
        const categorie = button.getAttribute("data-filter");

        // Afficher les destinations correspondantes
        destinationCards.forEach(card => {

            const categorieCarte = card.getAttribute("data-category");

            if (categorie === "all" || categorie === categorieCarte) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});
