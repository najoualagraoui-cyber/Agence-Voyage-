
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


// ===== DIAPORAMA =====

const slides = [

    {
        title: "Voyagez avec style",
        description: "Des expériences uniques, des souvenirs éternels.",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=2000"
    },

    {
        title: "Explorez le monde",
        description: "Découvrez des paysages qui vous laisseront sans voix.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=2000"
    },

    {
        title: "Vivez l'exceptionnel",
        description: "Chaque destination raconte une nouvelle histoire.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2000"
    }

];

let currentSlide = 0;

const hero = document.querySelector(".hero");
const title = document.getElementById("hero-title");
const description = document.getElementById("hero-description");
const number = document.getElementById("slide-number");

function showSlide(index) {

    currentSlide = (index + slides.length) % slides.length;

    hero.style.backgroundImage = `
        linear-gradient(
            90deg,
            rgba(9, 25, 48, 0.88),
            rgba(9, 25, 48, 0.38),
            transparent
        ),
        url("${slides[currentSlide].image}")
    `;

    title.textContent = slides[currentSlide].title;

    description.textContent = slides[currentSlide].description;

    number.textContent = "0" + (currentSlide + 1);

}


// Bouton suivant

document.getElementById("next-slide").addEventListener("click", () => {

    showSlide(currentSlide + 1);

});


// Bouton précédent

document.getElementById("prev-slide").addEventListener("click", () => {

    showSlide(currentSlide - 1);

});


// Bouton recherche

document.querySelector(".search-btn").addEventListener("click", () => {

    window.location.href = "destinations.html";

});
