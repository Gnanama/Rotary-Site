// script.js

document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code can go here for interactivity
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    document.querySelectorAll('.event-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.previousElementSibling.previousElementSibling.innerText;
            const description = this.previousElementSibling.innerText;
            document.querySelector('#event-modal h2').innerText = title;
            document.querySelector('#modal-description').innerText = description;
            document.getElementById('event-modal').style.display = 'block';
        });
    });
    
    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('event-modal').style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('event-modal')) {
            document.getElementById('event-modal').style.display = 'none';
        }
    });


let currentSlide = 0;
let slideInterval;
const slideDuration = 3000; // Duration of each slide in milliseconds

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide += n;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel-slides').style.transform = `translateX(${newTransformValue}%)`;
}

function startSlideShow() {
    slideInterval = setInterval(() => moveSlide(1), slideDuration);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for manual controls
document.querySelector('.prev').addEventListener('click', () => {
    stopSlideShow();
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    stopSlideShow();
    moveSlide(1);
});

// Start automatic slideshow when the page loads
window.addEventListener('load', () => {
    startSlideShow();
});

    

    // Example: Add any additional interactive features here
});

// script.js

let currentSlide = 0;
let slideInterval;
const slideDuration = 3000; // Duration of each slide in milliseconds

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide += n;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel-slides').style.transform = `translateX(${newTransformValue}%)`;
}

function startSlideShow() {
    slideInterval = setInterval(() => moveSlide(1), slideDuration);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for manual controls
document.querySelector('.prev').addEventListener('click', () => {
    stopSlideShow();
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    stopSlideShow();
    moveSlide(1);
});

// Start automatic slideshow when the page loads
window.addEventListener('load', () => {
    startSlideShow();
});



