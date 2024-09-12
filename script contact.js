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



  // Initialize Google Map
  function initMap() {
    const location = { lat: 12.9716, lng: 79.1588 }; // Coordinates for Vellore
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        mapTypeId: 'roadmap'
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: 'Rotary Club of Vellore Palar City'
    });
}
window.onload = initMap;

// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.getElementById('form-feedback').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    // Validate form fields
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').textContent = 'Valid email is required.';
        isValid = false;
    }
    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required.';
        isValid = false;
    }

    // If form is valid, handle submission
    if (isValid) {
        // Simulate form submission
        console.log('Form submitted:', { name, email, message });
        document.getElementById('form-feedback').textContent = 'Thank you for your message! We will get back to you soon.';
        document.getElementById('contact-form').reset();
    }
});



    // Example: Add any additional interactive features here
});

