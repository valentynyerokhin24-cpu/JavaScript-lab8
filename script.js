// 1. Гамбургер меню [cite: 20]
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// 2. Карусель [cite: 21, 22]
let currentIdx = 0;
const slides = document.querySelectorAll('#carousel-slide img');
const slideContainer = document.getElementById('carousel-slide');
const indicatorsContainer = document.getElementById('indicators');

// Створення індикаторів
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.onclick = () => showSlide(i);
    indicatorsContainer.appendChild(dot);
});

function updateIndicators() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIdx);
    });
}

function showSlide(index) {
    if (index >= slides.length) currentIdx = 0;
    else if (index < 0) currentIdx = slides.length - 1;
    else currentIdx = index;
    
    slideContainer.style.transform = `translateX(${-currentIdx * 100}%)`;
    updateIndicators();
}

function moveSlide(step) { showSlide(currentIdx + step); }

// Автоматична зміна слайдів
setInterval(() => moveSlide(1), 5000);
updateIndicators();
