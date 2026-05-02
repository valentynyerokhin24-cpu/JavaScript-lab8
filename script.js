document.addEventListener('DOMContentLoaded', () => {
    // Навігація
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', () => menu.classList.toggle('show'));

    // Карусель
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    const update = () => {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        update();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        update();
    });
    // Автоматичне перемикання кожні 4 секунди
let autoSlide = setInterval(() => {
    // Емулюємо натискання кнопки "Next"
    document.getElementById('next').click();
}, 4000);

// Зупинка авто-слайду при наведенні курсора на карусель
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));

// Відновлення авто-слайду, коли курсор прибирають
carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        document.getElementById('next').click();
    }, 4000);
});
});