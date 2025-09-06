let everyProducts = [];

// Function to display products in the container
function displayProducts(productsToDisplay) {
    const container = $("#products");
    container.empty();
    let productsHtml = "";

    productsToDisplay.forEach((product) => {
        let productCard = `
            <div class="col">
                <div class="card product-card">
                    <div class="icons-card">
                        <a href="#"><i class="fa-regular fa-eye"></i></a>
                        <i class="fa-regular fa-heart icon-wishlist"></i>
                        <i class="fa-solid fa-plus add-cart"></i>
                    </div>
                    <div class="image-product">
                        <img src="${
                            product.image
                        }" class="card-img-top img-fluid" alt="${product.name}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title text-truncate">${
                            product.name
                        }</h6>
                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            <span class="fw-light text-danger">$${(
                                product.priceCents / 100
                            ).toFixed(2)}</span>
                            <span class="text-warning small">★${
                                product.rating.stars
                            } (${product.rating.count})</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productsHtml += productCard;
    });

    container.append(productsHtml);
}

// Function to display categories in the container
function displayCategories(products) {
    const categoriesContainer = $("#categories");
    categoriesContainer.empty();
    const seenCategories = new Set();
    let categoriesHtml = `<div class="categories active" data-category="All"><p>All</p></div>`;
    seenCategories.add("All");

    products.forEach((product) => {
        if (!seenCategories.has(product.category)) {
            categoriesHtml += `<div class="categories" data-category="${product.category}"><p>${product.category}</p></div>`;
            seenCategories.add(product.category);
        }
    });

    categoriesContainer.html(categoriesHtml);
}

// Load data and render when the page is ready
$(document).ready(function () {
    // Fetch JSON file
    fetch("products.json")
        .then((res) => res.json()) // Convert response to JSON
        .then((data) => {
            everyProducts = data; // Save data to global variable
            displayProducts(everyProducts); // Show products
            displayCategories(everyProducts); // Show categories
        });

    // Handle category click event
    $(document).on("click", ".categories", function () {
        // Remove active class from all categories and add to clicked one
        $(".categories").removeClass("active");
        $(this).addClass("active");

        const selectedCategory = $(this).data("category");
        let filteredProducts = [];

        if (selectedCategory === "All") {
            filteredProducts = everyProducts; // Show all products
        } else {
            // Filter products by selected category
            filteredProducts = everyProducts.filter(
                (product) => product.category === selectedCategory
            );
        }

        // Display filtered products
        displayProducts(filteredProducts);
    });
});
