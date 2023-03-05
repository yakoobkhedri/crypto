let hamIcon = document.getElementById('hamIcon');
let mobileMenu = document.getElementById('mobileMenu');
let close = document.getElementById('close');

hamIcon.addEventListener('click', function() {
    mobileMenu.classList.add('active');
})
close.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
})