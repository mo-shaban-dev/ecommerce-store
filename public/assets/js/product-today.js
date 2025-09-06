class ProductToday {
    constructor(id, image, name, rating, price, category, description, Class) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.rating = rating;
        this.priceCents = price;
        this.category = category;
        this.description = description;
        this.class = Class;
    }

    RenderProductToday() {
        return `
        <div class=" swiper-slide ${this.class}">
            <div 
                data-id="${this.id}"
                data-image="${this.image}"
                data-name="${this.name}"
                data-rating-stars="${this.rating.stars}"
                data-rating-count="${this.rating.count}"
                data-pricecents="${this.priceCents}"
                data-category="${this.category}"
                data-description="${this.description}"
                class="card product-card">
                
                <div class="icons-card">
                    <a href="./product-details.html"><i class="fa-regular fa-eye"></i></a>
                    <i class="fa-regular fa-heart icon-wishlist"></i>
                    <i class="fa-solid fa-plus add-cart"></i>
                </div>

                <div class="image-product">
                    <img src="${this.image}" class="card-img-top img-fluid" alt="${this.name}">
                </div>
                
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title text-truncate">${this.name}</h6>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <span class="fw-light text-danger">$${this.priceCents}</span>
                        <span class="text-warning small">★${this.rating.stars} (${this.rating.count})</span>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
 

function FetchProducts() {
    fetch("products.json")
        .then((res) => res.json())
        .then((json) => {
            // filter to get the Top rating
            let allProducts = json.sort((b, a) => {
                return b.rating.stars - b.rating.stars;
            });
            console.log(allProducts);
            // slice to get just 10 product
            let tenProducts = allProducts.slice(0, 10);

            console.log(tenProducts);
            let container = document.querySelector("#swiper-container");
            let products = "";

            tenProducts.forEach((item, index) => {
                let isActive = index === 0 ? "active" : "";
                let product = new ProductToday(
                    item.id,
                    item.image,
                    item.name,
                    item.rating,
                    item.priceCents,
                    item.category,
                    item.description,
                    (item.class = isActive)
                );
                products += product.RenderProductToday();
            });
            container.innerHTML = products;
            initSwiper();
        })
        .catch((err) => console.error(`the error : ${err}`));
}
FetchProducts();

//------------------ problem---------------
// go to Product Details
$(document).ready(function () {
    $(document).on("click", ".add-cart", function (event) {
        event.stopPropagation();
        const id = $(this).closest(".card").data("id");
        const image = $(this).closest(".card").data("image");
        const name = $(this).closest(".card").data("name");
        const ratingStars = $(this).closest(".card").data("rating-stars");
        const ratingCount = $(this).closest(".card").data("rating-count");
        const priceCents = $(this).closest(".card").data("pricecents");
        const category = $(this).closest(".card").data("category");
        const description = $(this).closest(".card").data("description");
        const ProductData = {
            id,
            image,
            name,
            rating: { stars: ratingStars, count: ratingCount },
            priceCents,
            category,
            description,
        };
        localStorage.setItem("ProductData", JSON.stringify(ProductData));
        window.location.href = "product-details.html";
    });
});

//------------------ problem---------------
