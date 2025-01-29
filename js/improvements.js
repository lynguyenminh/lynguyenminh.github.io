// Mobile Navigation
const initMobileNav = () => {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.querySelector('i').classList.toggle('fa-bars');
        toggle.querySelector('i').classList.toggle('fa-times');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.querySelector('i').classList.add('fa-bars');
            toggle.querySelector('i').classList.remove('fa-times');
            document.body.style.overflow = '';
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (correspondingLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                correspondingLink.classList.add('active');
            }
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

// Sticky Navbar with Hide/Show on Scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    // Add/remove background when scrolling
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    // Hide/show navbar based on scroll direction
    if (currentScroll > lastScroll && currentScroll > 70) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Initialize all improvements
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initBackToTop();
    initFormValidation();
}); 