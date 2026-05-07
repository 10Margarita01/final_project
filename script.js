const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.mobile-menu__close');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
    });
});