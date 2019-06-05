
window.onload = function () {
    var phoneNav = document.querySelector('.phone-nav'),
        header = document.querySelector('header');
    phoneNav.addEventListener('click', function () {
        this.classList.toggle('open-nav');
        header.classList.toggle('open-header');
    });
}

$(document).ready(function () {
    $("#pro").click(function () {
        $('html, body').animate({ scrollTop: $('#product').offset().top }, 1000);
    });
    $("#cas").click(function () {
        $('html, body').animate({ scrollTop: $('#case').offset().top }, 1000);
    });
    $("#abo").click(function () {
        $('html, body').animate({ scrollTop: $('#about').offset().top }, 1000);
    });
    $("#con").click(function () {
        $('html, body').animate({ scrollTop: $('#contact').offset().top }, 1000);
    });
});