document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    if (!header) return;

    function onScroll() {
        if (window.scrollY > 100) header.classList.add('header-scrolled');
        else header.classList.remove('header-scrolled');
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
});