const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});
// ---------- DARK / LIGHT MODE ----------

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});
// ---------- TYPING ANIMATION ----------

const typingText = document.getElementById("typing-text");

const words = [
    "BSc Information Technology Student",
    "C Programmer",
    "C++ Programmer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

    }

    let speed = deleting ? 60 : 100;

    if (!deleting && letterIndex === currentWord.length) {

        speed = 1500;
        deleting = true;

    } else if (deleting && letterIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();