document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    contactBtn.addEventListener('click', () => {
        aboutSection.classList.remove('active');
        contactSection.classList.add('active');
    });

    aboutBtn.addEventListener('click', () => {
        contactSection.classList.remove('active');
        aboutSection.classList.add('active');
    });
});
