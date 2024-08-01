export function scrollToApplication() {
    document.getElementById('application').scrollIntoView({ behavior: 'smooth' });
}

window.scrollToApplication = scrollToApplication;