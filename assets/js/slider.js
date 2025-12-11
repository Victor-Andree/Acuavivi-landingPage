const slides = document.querySelectorAll(".slider img");
const dotsContainer = document.getElementById("sliderDots");
const prevBtn = document.getElementById("sliderPrev");
const nextBtn = document.getElementById("sliderNext");
let currentIndex = 0;
const intervalMs = 3000;
let intervalId;

if (slides.length) {
    // Crear dots
    slides.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.className = "slider-dot" + (idx === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Ir a la imagen ${idx + 1}`);
        dot.addEventListener("click", () => {
            currentIndex = idx;
            showSlide();
            restartInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    function showSlide() {
        slides.forEach((img, i) => {
            img.classList.toggle("active", i === currentIndex);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide();
    }

    function startInterval() {
        intervalId = setInterval(nextSlide, intervalMs);
    }

    function restartInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    nextBtn?.addEventListener("click", () => {
        nextSlide();
        restartInterval();
    });

    prevBtn?.addEventListener("click", () => {
        prevSlide();
        restartInterval();
    });

    showSlide();
    startInterval();
}
