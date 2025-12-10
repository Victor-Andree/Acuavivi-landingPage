const slides = document.querySelectorAll(".slider img");
let currentIndex = 0;

setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}, 3500);
