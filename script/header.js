window.addEventListener("scroll", function () {
    const header = document.getElementById('myHeader');
    // const headerHeight = header.offsetHeight;

    if (window.scrollY > 50) {
        header.classList.toggle("sticky", true);
    } else {
        header.classList.toggle("sticky", false);
    }
});





