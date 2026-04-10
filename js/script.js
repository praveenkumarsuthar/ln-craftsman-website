// FADE-IN ANIMATION ON SCROLL
const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add('show');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', showOnScroll);

// Run on page load
window.addEventListener('load', showOnScroll);

// AUTO IMAGE SLIDER
let slides = document.querySelectorAll(".slides img");
let index = 0;

function showSlide() {
    slides.forEach((img) => img.classList.remove("active"));
    slides[index].classList.add("active");

    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);


