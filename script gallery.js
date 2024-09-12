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


    // Get the lightbox element and the images
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');

    // Function to open the lightbox
    function openLightbox(imageSrc, captionText) {
        lightbox.style.display = 'block';
        lightboxImage.src = imageSrc;
        lightboxCaption.textContent = captionText;
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Add event listeners to gallery images
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('.gallery-image');
            const caption = item.querySelector('.overlay .text').textContent;
            openLightbox(img.src, caption);
        });
    });

    // Add event listener to close button
    closeBtn.addEventListener('click', closeLightbox);

    // Close lightbox when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });



    lightbox.option({
        'resizeDuration': 200,
        'fadeDuration': 600,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true
    });



    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Here you can send the data to your server or email service
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! We will get back to you soon.');
            
            // Clear form fields
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill out all fields.');
        }
    });


// script.js

// Get the modal
const modal = document.getElementById('image-modal');

// Get the image and insert it inside the modal
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');

// Get all images with the class 'gallery-image'
const images = document.querySelectorAll('.gallery-image');

// Loop through images and add click event listeners
images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.dataset.full;
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
const span = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the image
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});




// script.js

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

// Function to show the current slide
function showSlide(index) {
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
    
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === slideIndex) {
            dot.className += ' active';
        }
    });
}

// Function to show the next slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Function to show the previous slide
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Function to show a specific slide based on dot click
function currentSlide(n) {
    slideIndex = n - 1;
    showSlide(slideIndex);
}

// Automatic slide change
let slideInterval = setInterval(nextSlide, 5000);

// Initial display of the first slide
showSlide(slideIndex);





// script.js

let slideIndex = 0;

// Function to show slides
function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Reset slides
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    // Move to the next slide
    slideIndex = (slideIndex + 1) % totalSlides;
}

// Function to move slides
function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides();
}

// Initialize the carousel
showSlides();
setInterval(() => moveSlide(1), 5000); // Automatic sliding every 5 seconds

// Add event listeners for prev/next buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));








// script.js

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Function to show slides
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

// Function to move slides
function moveSlide(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides();
}

// Initialize the carousel
showSlides();

// Automatic sliding
let slideInterval = setInterval(() => moveSlide(1), 5000); // Change slides every 5 seconds

// Add event listeners for prev/next buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));







function showSlides() {
    console.log('Showing slides...');
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function moveSlide(n) {
    console.log('Moving slide...');
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}





    // Example: Add any additional interactive features here
});









