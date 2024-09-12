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