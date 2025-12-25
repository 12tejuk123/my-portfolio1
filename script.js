// TYPING EFFECT
const typingText = [
    "Web Developer",
    "AI Enthusiast",
    "UI/UX Designer",
    "Tech Innovator"
];

const typingElement = document.querySelector(".typing-container");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = typingText[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingText.length;
        setTimeout(typeEffect, 500); // Wait before typing next
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200); // Speed of typing/deleting
    }
}

// Start typing effect on load
document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) typeEffect();
});


// MOBILE MENU TOGGLE
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.querySelector(".hamburger");
    
    if (navMenu && hamburger && !navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    }
});

// THEME TOGGLE
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector("i");

// Check local storage for theme (default is dark)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    htmlElement.setAttribute("data-theme", "light");
    updateThemeIcon("light");
} else {
    // Dark mode: remove attribute to use :root defaults
    htmlElement.removeAttribute("data-theme");
    updateThemeIcon("dark");
}

themeToggle.addEventListener("click", () => {
    const isLight = htmlElement.hasAttribute("data-theme") && htmlElement.getAttribute("data-theme") === "light";
    
    if (isLight) {
        // Switch to dark
        htmlElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        updateThemeIcon("dark");
    } else {
        // Switch to light
        htmlElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        updateThemeIcon("light");
    }
});

function updateThemeIcon(theme) {
    if (theme === "dark") {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}
