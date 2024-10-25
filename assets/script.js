// Liste des slides
const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Variables pour la navigation
let currentSlide = 0;  // Index de la slide actuelle

// Sélection des éléments du DOM
const bannerImage = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// Fonction pour mettre à jour l'image et la légende du carrousel
function updateSlide() {
    const slide = slides[currentSlide];
    bannerImage.src = `./assets/images/slideshow/${slide.image}`;
    bannerTagline.innerHTML = slide.tagLine;
}

// Fonction pour créer les bullet points
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });
}

// Fonction pour mettre à jour les bullet points
function updateDots() {
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Fonction pour passer à la slide précédente (bouclage)
function previousSlide() {
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;  // Boucle vers la dernière slide
    } else {
        currentSlide -= 1;
    }
    updateSlide();
    updateDots();
}

// Fonction pour passer à la slide suivante (bouclage)
function nextSlide() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;  // Boucle vers la première slide
    } else {
        currentSlide += 1;
    }
    updateSlide();
    updateDots();
}

// Event listeners pour les flèches
leftArrow.addEventListener('click', previousSlide);
rightArrow.addEventListener('click', nextSlide);

// Initialiser le carrousel avec la première slide et créer les bullet points
createDots();
updateSlide();
updateDots();
