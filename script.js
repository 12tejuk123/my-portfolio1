// Sequential Typing Function
function typeText(element, text, delay = 50, callback = null) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        } else if (callback) {
            setTimeout(callback, 400);
        }
    }
    typing();
}

// Apply typing to multiple elements in order
window.onload = () => {
    const elements = [
        { selector: ".type-1", text: "Hi, I'm Tejaswini Kulkarni" },
        { selector: ".type-2", text: "Web Developer | AI Enthusiast | Designer" },
        { selector: ".type-3", text: "About Me" },
        { selector: ".type-4", text: "Skills" },
        { selector: ".type-5", text: "My Projects" },
        { selector: ".type-6", text: "Contact Me" }
    ];

    let index = 0;

    function startTyping() {
        if (index >= elements.length) return;

        const el = document.querySelector(elements[index].selector);
        el.textContent = ""; // clear old text
        typeText(el, elements[index].text, 45, () => {
            index++;
            startTyping();
        });
    }

    startTyping();
};

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// MOBILE MENU
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show-menu");
}
