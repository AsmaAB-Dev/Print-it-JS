// Variables pour le carrousel
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlide = 0; // Variable pour suivre l'index de la slide actuelle

// Sélectionne les éléments du DOM à mettre à jour
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// Fonction pour générer les bullet points dynamiquement
function generateDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected'); // Le premier point est sélectionné par défaut
        }
        dotsContainer.appendChild(dot);
    });
}

// Fonction pour mettre à jour l'affichage du carrousel (image, texte, bullet points)
function updateCarousel() {
    // Mise à jour de l'image et du texte en fonction de la slide courante
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;

    // Mise à jour des bullet points
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected'); // Active le bullet point courant
        } else {
            dot.classList.remove('dot_selected'); // Désactive les autres bullet points
        }
    });
}

// Ajoute les event listeners pour les flèches
arrowLeft.addEventListener('click', () => {
    // Si on est à la première image, on revient à la dernière
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    updateCarousel();
});

arrowRight.addEventListener('click', () => {
    // Si on est à la dernière image, on revient à la première
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateCarousel();
});

// Générer les bullet points au chargement de la page
generateDots();

// Initialise le carrousel avec la première slide
updateCarousel();
