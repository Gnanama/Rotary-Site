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
    // JavaScript for modal functionality
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.previousElementSibling.previousElementSibling.innerText;
            const description = this.previousElementSibling.innerText;
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-description').innerText = description;
            document.getElementById('project-modal').style.display = 'block';
        });
    });

    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('project-modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('project-modal')) {
            document.getElementById('project-modal').style.display = 'none';
        }
    });
</script>



