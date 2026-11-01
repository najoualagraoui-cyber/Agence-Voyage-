
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


// ===== RÉCUPÉRER LA DESTINATION =====

const parametres = new URLSearchParams(window.location.search);

const destinationChoisie = parametres.get("destination");

const selectDestination = document.getElementById("destination");

if (destinationChoisie && selectDestination) {

    selectDestination.value = destinationChoisie;

}


// ===== DATES DE RÉSERVATION =====

const dateDepart = document.getElementById("depart");
const dateRetour = document.getElementById("retour");

const aujourdHui = new Date().toISOString().split("T")[0];

dateDepart.min = aujourdHui;

dateDepart.addEventListener("change", () => {

    dateRetour.min = dateDepart.value;

    if (dateRetour.value && dateRetour.value <= dateDepart.value) {
        dateRetour.value = "";
    }

});


// ===== FORMULAIRE DE RÉSERVATION =====

const formulaire = document.getElementById("reservationForm");

formulaire.addEventListener("submit", (e) => {

    e.preventDefault();

    if (dateRetour.value <= dateDepart.value) {

        alert("La date de retour doit être après la date de départ.");

        return;

    }

    const nom = document.getElementById("nom").value;

    const destination = selectDestination.value;

    const confirmation = document.getElementById("confirmation");

    confirmation.textContent =
        "Merci " + nom + " ! Votre demande de réservation pour "
        + destination + " a été envoyée avec succès.";

    formulaire.reset();

    dateDepart.min = aujourdHui;
    dateRetour.min = aujourdHui;

});

