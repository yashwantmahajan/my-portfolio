// 🧠 JavaScript for Typing Effect & Interactivity

// 1️⃣ TYPING EFFECT
const roles = ["Video Editor", "Developer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const delayBetweenRoles = 2000;

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
});

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.querySelector('.typing-text');

    if (isDeleting) {
        // Remove characters
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add characters
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Determine speed
    let speed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing word, wait before deleting
        speed = delayBetweenRoles;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

// 2️⃣ MOBILE NAVBAR TOGGLE
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Simple style toggle for menu (CSS needs .active class logic for mobile)
        if (navMenu.classList.contains('active')) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(5,5,5,0.95)';
            navMenu.style.padding = '20px';
        } else {
            navMenu.style.display = 'none';
        }
    });
}

// 3️⃣ SMOOTH SCROLL HIGHLIGHT
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

console.log("Website Loaded Successfully! 🚀");
