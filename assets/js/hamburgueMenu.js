
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const linksWrapper = document.querySelector('.links-wrapper');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('change');
        linksWrapper.classList.toggle('active');
    });
});

