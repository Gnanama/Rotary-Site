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

    });

    // Example: Add any additional interactive features here
});







