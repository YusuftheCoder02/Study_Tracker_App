// Study Tracker App without using Document Object Model (DOM) manipulation
// This app allows users to track their study sessions and view their progress over time.




// Responsive navbar: toggle the mobile menu
const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar-links');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});
