 
    window.addEventListener("DOMContentLoaded", () => {
        let wishlistLocalstorage =
            JSON.parse(localStorage.getItem("wishList")) || [];

        function RenderProduct() {
            let container = $("#wishlist");
            let wishlist = "";

            wishlistLocalstorage.forEach((item) => {
                let card = `
                <div class="swiper-slide">
                <div
                data-id ="${item.id}"
         class="card item-cards wishlist-card  ">
         <div class="img-card-wish card-header  text-center ">
         <img class="img-fluid" src="${item.image}" alt="${item.name}">
         <div class="icon-card">
         <i class="fa-regular fa-trash-can remove-wishlist"></i>
         <i class="fa-solid fa-plus add-cart"></i>
         </div>
               </div>
               <div class="card-body p-2">
               <p>${item.name}</p>
               </div>
              <div class="card-footer p-2 d-flex gap-3 justify-content-between">
              <p>$${item.pricecents}</p>
              <div>
              <span> ${item.ratingStars}</span>
              <span>(${item.ratingCount})</span></div>

               
              </div>
              </div>
              </div> `;
                wishlist += card;
            });
            container.html(wishlist);
        }
        RenderProduct();
        initWishlistSwiper();

        $(document).ready(function () {
            // remove from wishlist
            $(document).on("click", ".remove-wishlist", function () {
                const id = $(this).closest(".card").data("id");
                wishlistLocalstorage = wishlistLocalstorage.filter(
                    (item) => item.id !== id
                );
                console.log(wishlistLocalstorage);
                localStorage.setItem(
                    "wishList",
                    JSON.stringify(wishlistLocalstorage)
                );
                RenderProduct();
                initWishlistSwiper();
                // location.reload();
            });
        });
    });

 

// class ShowProductWList {
//     constructor(id, image, name, rating, price, category, description) {
//         this.id = id;
//         this.image = image;
//         this.name = name;
//         this.rating = rating;
//         this.priceCents = price;
//         this.category = category;
//         this.description = description;
//     }

//     renderProduct() {
//         return `
//         <div class="card item-cards ">
//           <div class="img-card-wish card-header  text-center ">
//            <img class="img-fluid" src="${this.image}" alt="${this.name}">
//           </div>
//           <div class="card-body p-2">
//             <p>${this.name}</p>

//           </div>
//           <div class="card-footer p-2 d-flex gap-3 justify-content-between">
//          <p>$${this.priceCents}</p>
//          <div>
//          <span> ${this.rating.stars}</span>
//          <span>(${this.rating.count})</span></div>
//          </div>
//       </div>
//          `;
//     }
// }

// wishlistLocalstorage.forEach((item) => {
//     let product = new ShowProductWList(
//         item.id,
//         item.image,
//         item.name,
//         item.rating,
//         item.priceCents,
//         item.category,
//         item.description
//     );
//     wishlist += product.renderProduct();
// });
// container.html(wishlist);
