const titleElement = document.querySelector('header h1');
const textToType = "Yerson Mariqueo Sánchez";

titleElement.textContent = "";

let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        titleElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 49);
    }
}

window.addEventListener('load', typeWriter);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
