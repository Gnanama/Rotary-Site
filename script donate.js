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

    // Example: Add any additional interactive features here
});

<script>
    document.getElementById('membership-form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (!name || !email) {
            alert('Please fill out all required fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
</script>




<script>
    document.getElementById('add-member-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('member-name').value.trim();
        const designation = document.getElementById('member-designation').value.trim();
        const phone = document.getElementById('member-phone').value.trim();

        if (name && designation && phone) {
            // Create a new member card
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <h2>${name}</h2>
                <h3>${designation}</h3>
                <p>Phone: ${phone}</p>
            `;

            // Append new member card to the members list
            document.querySelector('.members-list').appendChild(memberCard);

            // Clear form fields
            document.getElementById('member-name').value = '';
            document.getElementById('member-designation').value = '';
            document.getElementById('member-phone').value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });
    
</script>


<script>
    document.getElementById('add-member-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('member-name').value.trim();
        const designation = document.getElementById('member-designation').value.trim();
        const phone = document.getElementById('member-phone').value.trim();

        if (name && designation && phone) {
            // Create a new row for the table
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${designation}</td>
                <td>${phone}</td>
            `;

            // Append new row to the table body
            document.querySelector('#members-table tbody').appendChild(newRow);

            // Clear form fields
            document.getElementById('member-name').value = '';
            document.getElementById('member-designation').value = '';
            document.getElementById('member-phone').value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });
</script>


<script>
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
</script>


<script>
    lightbox.option({
        'resizeDuration': 200,
        'fadeDuration': 600,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true
    });
</script>


<script>
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
</script>



<script src="script.js"></script>
    <script>
        // Handle donation form submissions
        document.getElementById('one-time-donation-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const amount = document.getElementById('amount').value;
            // Add code to process the donation
            alert(`Thank you for your one-time donation of ₹${amount}!`);
            document.getElementById('one-time-donation-form').reset();
        });

        document.getElementById('monthly-donation-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const monthlyAmount = document.getElementById('monthly-amount').value;
            // Add code to process the subscription
            alert(`Thank you for subscribing to donate ₹${monthlyAmount} per month!`);
            document.getElementById('monthly-donation-form').reset();
        });
    </script>


    // Handle donation form submissions
document.getElementById('one-time-donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    // Add code to process the donation
    alert(`Thank you for your one-time donation of ₹${amount}!`);
    document.getElementById('one-time-donation-form').reset();
});

document.getElementById('monthly-donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const monthlyAmount = document.getElementById('monthly-amount').value;
    // Add code to process the subscription
    alert(`Thank you for subscribing to donate ₹${monthlyAmount} per month!`);
    document.getElementById('monthly-donation-form').reset();
});








// script.js

let slideIndex = 0;

// Function to show slides
function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
    }
}

// Function to move slides
function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        showSlides();
    }
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlides();

    // Automatic sliding
    setInterval(() => moveSlide(1), 5000); // Change slides every 5 seconds

    // Add event listeners for prev/next buttons
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});


function moveSlide(n) {
    console.log(`Current slide index: ${slideIndex}`);
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        console.log(`New slide index: ${slideIndex}`);
        showSlides();
    }
}
