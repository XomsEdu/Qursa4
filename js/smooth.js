document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav a');

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', scrollToSection);
    });
});
