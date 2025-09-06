function initWishlistSwiper() {
    const swiper = new Swiper(".swiper-wishlist", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
        },
    });
}
