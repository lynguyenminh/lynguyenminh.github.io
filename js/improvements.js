// Mobile Navigation
const initMobileNav = () => {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-nav button');
    const navLinks = document.querySelectorAll('.nav-links a');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
};

// Back to Top Button
const initBackToTop = () => {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Form Validation
const initFormValidation = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = form.email.value;
        const name = form.name.value;
        const message = form.message.value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (name.length < 2) {
            alert('Please enter your name.');
            return;
        }

        if (message.length < 10) {
            alert('Please enter a message with at least 10 characters.');
            return;
        }

        // Add your form submission logic here
        console.log('Form submitted:', { name, email, message });
    });
};

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Initialize all improvements
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initBackToTop();
    initFormValidation();
}); 