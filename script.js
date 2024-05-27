// script.js
window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset;
    let parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(function(element) {
        let speed = element.getAttribute('data-speed');
        element.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
    });
});
