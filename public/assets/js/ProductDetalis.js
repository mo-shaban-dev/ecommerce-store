class ProductDetails {
    constructor(id, image, name, rating, price, category, description) {
        this.id          = id;
        this.image       = image;
        this.name        = name;
        this.rating      = rating;
        this.priceCents  = price;
        this.category    = category;
        this.description = description;
    }

    renderDataProduct() {
        return `
    <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="card  product-card position-relative" >
    <div class="icons-card  ">
    <a href="./product-details.html">
    <i class="fa-regular fa-eye"></i>
    </a>
 
    <i class="fa-regular fa-heart icon-wishlist"></i>
 
    </div>
  <div class="image-product">
  <!-- صورة المنتج -->
  <img src="${this.image}" class="card-img-top img-fluid" alt="${this.name}">
  </div>
    
    <!-- محتوى الكارت -->
    <div class="card-body d-flex flex-column">
      <h6 class="card-title text-truncate">${this.name}</h6>
      
      <!-- السعر والتقييم -->
      <div class="mt-auto d-flex justify-content-between align-items-center">
          <span class="fw-light text-danger">$${this.priceCents}</span>
          <span class="text-warning small">★${this.rating.stars} (${this.rating.count})</span>
      </div>
</div>

            
            `;
    }
}

$(document).ready(function () {
    const container = $("#product-details");
    let Details = "";

    const localstorageData = JSON.parse(localStorage.getItem("ProductData"));
    if (!localstorageData) {
        container.html("<p>No product data found.</p>");
  }
  console.log(localstorageData)

    const Product = new ProductDetails(
        localstorageData.id,
        localstorageData.image,
        localstorageData.name,
        localstorageData.rating,
        localstorageData.priceCents,
        localstorageData.category,
        localstorageData.description
    );
    Details += Product.renderDataProduct();
    container.html(Details);
});
