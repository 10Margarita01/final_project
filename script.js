function initSlider(config) {
    const track = document.querySelector(config.track);
    const prevBtn = document.querySelector(config.prev);
    const nextBtn = document.querySelector(config.next);
    const currentNumber = document.querySelector(config.number);
    const cards = document.querySelectorAll(config.card);

    if (!track || !prevBtn || !nextBtn || !currentNumber || cards.length === 0) return;

    let currentIndex = 0;
    const totalSlides = Math.ceil(cards.length / config.visibleCards);

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(getComputedStyle(track).gap) || 0;
        const move = currentIndex * config.visibleCards * (cardWidth + gap);

        track.style.transform = `translateX(-${move}px)`;
        currentNumber.textContent = `${String(currentIndex + 1).padStart(2, "0")}/${String(totalSlides).padStart(2, "0")}`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = currentIndex + 1;

        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = currentIndex - 1;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        updateSlider();
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
}

initSlider({
    track: ".portfolio__track",
    card: ".portfolio__card",
    prev: ".portfolio__arrow--left",
    next: ".portfolio__arrow--right",
    number: ".portfolio .portfolio__pagination-number",
    visibleCards: 3
});

initSlider({
    track: ".partners__track",
    card: ".partners__card",
    prev: ".partners__arrow--left",
    next: ".partners__arrow--right",
    number: ".partners .portfolio__pagination-number",
    visibleCards: 1
});
const portfolioSegments = document.querySelectorAll(
    '.portfolio .portfolio__pagination-segment'
);

function updatePortfolioPagination(index) {
    portfolioNumber.textContent = `0${index + 1}/02`;

    portfolioSegments.forEach((segment, i) => {
        segment.classList.toggle('portfolio__pagination-segment_active', i === index);
    });
}
const portfolioLine = document.querySelector('.portfolio .portfolio__pagination-line');

function updatePortfolioPagination(index) {
    portfolioNumber.textContent = `0${index + 1}/02`;
    portfolioLine.classList.toggle('is-second', index === 1);
}