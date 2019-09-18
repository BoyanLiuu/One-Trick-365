// This function serve as hamberger animation stuffs
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animate links;
        navLinks.forEach((link, index) => {
            // If we do not have this animation style
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                // this is main concept
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.6 }s`;
            }
        });
        //Burger animation:
        burger.classList.toggle('toggle');
    });

}
navSlide();