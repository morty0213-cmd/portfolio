// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to sections and cards
const animatedElements = document.querySelectorAll('.section-title, .about-text, .skill-card, .project-card, .contact-container');

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Simple form handler (prevent default for demo)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Enviando...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        btn.innerText = '¡Mensaje Enviado!';
        btn.style.background = '#22c55e'; // Green
        e.target.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = ''; // Reset to default gradient
            btn.style.opacity = '1';
        }, 3000);
    }, 1500);
});
