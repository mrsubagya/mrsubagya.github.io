// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});


ScrollReveal().reveal('.home-img, .about-img, .about-content h3, .about-content p, .about-content .btn-box, .portfolio-box, .contact form', {
    origin: 'bottom',
});