// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('formMessage');
            
            // Basic validation
            if (!name || !email || !service || !message) {
                showMessage('Please fill in all required fields.', 'error', formMessage);
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error', formMessage);
                return;
            }
            
            // Construct mailto link (since this is a static site)
            const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service}

Message:
${message}
            `.trim();
            
            // Note: For a production site, you'd want to use a backend service
            // or a service like Formspree, EmailJS, etc.
            // For now, we'll show a success message
            
            showMessage('Thank you for your message! We will get back to you shortly.', 'success', formMessage);
            
            // Reset form
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Function to show form messages
function showMessage(message, type, element) {
    element.textContent = message;
    element.className = `form-message ${type}`;
}

// Add active class to navigation links based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
