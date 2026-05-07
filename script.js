function initSlider(config) {
    const track = document.querySelector(config.track);
    const prevBtn = document.querySelector(config.prev);
    const nextBtn = document.querySelector(config.next);
    const currentNumber = document.querySelector(config.number);
    const line = document.querySelector(config.line);
    const cards = document.querySelectorAll(config.card);

    if (!track || !prevBtn || !nextBtn || !currentNumber || !line || cards.length === 0) return;

    let currentIndex = 0;

   function getVisibleCards() {
    const viewport = track.parentElement;
    const cardWidth = cards[0].offsetWidth;
    const gap = parseInt(getComputedStyle(track).gap) || 0;

    return Math.max(
        1,
        Math.round((viewport.offsetWidth + gap) / (cardWidth + gap))
    );
}

    function getTotalSlides() {
        return Math.ceil(cards.length / getVisibleCards());
    }

    function updateSlider() {
        const visibleCards = getVisibleCards();
        const totalSlides = getTotalSlides();

        if (currentIndex >= totalSlides) {
            currentIndex = totalSlides - 1;
        }

        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(getComputedStyle(track).gap) || 0;
        const move = currentIndex * visibleCards * (cardWidth + gap);

        track.style.transform = `translateX(-${move}px)`;

        currentNumber.textContent =
            `${String(currentIndex + 1).padStart(2, "0")}/${String(totalSlides).padStart(2, "0")}`;

        line.style.setProperty("--slide-index", currentIndex);
        line.style.setProperty("--total-slides", totalSlides);
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= getTotalSlides()) currentIndex = 0;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = getTotalSlides() - 1;
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
    line: ".portfolio .portfolio__pagination-line",
    visibleCards: 3,
    tabletVisibleCards: 2,
    mobileVisibleCards: 1
});

initSlider({
    track: ".partners__track",
    card: ".partners__card",
    prev: ".partners__arrow--left",
    next: ".partners__arrow--right",
    number: ".partners .portfolio__pagination-number",
    line: ".partners .portfolio__pagination-line",
    visibleCards: 1,
    tabletVisibleCards: 1,
    mobileVisibleCards: 1
});

const burger = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".mobile-menu__close");
const menuLinks = document.querySelectorAll(".mobile-menu__link");

burger?.addEventListener("click", () => {
    mobileMenu?.classList.add("is-open");
});

closeMenu?.addEventListener("click", () => {
    mobileMenu?.classList.remove("is-open");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu?.classList.remove("is-open");
    });
});
