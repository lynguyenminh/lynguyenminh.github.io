// Initialize AOS
AOS.init({
    duration: 600,
    once: true,
    offset: 100,
    delay: 100
});

// Initialize Typed.js
const typed = new Typed('#typed', {
    strings: [
        'Junior AI Engineer',
        'Generative AI Specialist',
        'Computer Vision Engineer'
    ],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});

// Initialize Particles.js
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#64ffda"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.3,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#64ffda",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "speed": 2
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    }
);

// Mobile Navigation
const mobileNav = () => {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav-links');
    
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
};

// Skill Progress Animation
const animateSkills = () => {
    const skills = {
        'Python': 90,
        'Node.js': 85,
        'PyTorch': 80,
        'FastAPI': 85,
        // Thêm các skill khác
    };

    Object.entries(skills).forEach(([skill, progress]) => {
        const progressBar = document.querySelector(`[data-skill="${skill}"] .skill-progress-bar`);
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    mobileNav();
    animateSkills();
}); 