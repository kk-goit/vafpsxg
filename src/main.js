function openMenu() {
    const menuBackdrop = document.getElementsByClassName('backdrop')[0];
    const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
    menuBackdrop.classList.add('is-open');
    mobileMenu.classList.add('is-open');
}

function closeMenu(event) {
    event.stopPropagation();
    const menuBackdrop = document.getElementsByClassName('backdrop')[0];
    const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
    if(event.target === mobileMenu) return;
    menuBackdrop.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
}

function switchLanguage(language) {
    const elements = document.querySelectorAll('.lang');
    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${language}`);
        if (text) {
            element.innerHTML = text;
        }
    });
} 

window.switchLanguage = switchLanguage;
window.openMenu = openMenu;
window.closeMenu = closeMenu;
