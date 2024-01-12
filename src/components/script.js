function openInNewTab(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });
});
