import topRatingProducts from "./product-today.js"
import WishListUI from "./wish-List/WishList-ui.js";
import initSwiper from "./swiper/swiperHomrpage.js";
import initWishlistSwiper from "./swiper/swiperWishList.js";
document.addEventListener("DOMContentLoaded", () => {
    topRatingProducts();
    // function to show product in wishlist page
    WishListUI();
    // this is a lib swiper
    initSwiper();

    initWishlistSwiper();
});
