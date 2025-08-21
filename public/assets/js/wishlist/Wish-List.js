 
    $(document).ready(function () {
        // take data from localstorage
    let wishlist = JSON.parse(localStorage.getItem("wishList")) || [];

    $(document).on("click", ".icon-wishlist", function () {
        const card = $(this).closest(".card");
        const wishProduct = {
            id: card.data("id"),
            image: card.data("image"),
            name: card.data("name"),
            ratingStars: card.data("rating-stars"),
            ratingCount: card.data("rating-count"),
            pricecents: card.data("pricecents"),
            category: card.data("category"),
            description: card.data("description"),
        };

        // check if was product find or not
        let exist = wishlist.find((item) => item.id == wishProduct.id);
        // ism't find add product to array
        if (!exist) {
            wishlist.push(wishProduct);
            localStorage.setItem("wishList", JSON.stringify(wishlist));
            // change icon form
            $(this).toggleClass("fa-regular fa-solid");
            // show massage success
            Toastify({
                text: "Success Adding to Wish List",
                duration: 2000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();
        }
    });
});

 