import { Cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";

let htmlProducts = "";

// Generate HTML for products
products.forEach(product => {
    const html = `
    <div class="gown1-container">
        <div class="gown1-div">
            <img class="gown1-img" src="${product.image}" alt="${product.name}">
        </div>
        <p class="gown1-name">${product.name}</p>
        <p>$${product.price.toFixed(2)}</p>
        <div>
            <select class="quantity-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <button class="js-add-to-cart" data-product-id="${product.productId}">Add to cart</button>
    </div>`;
    htmlProducts += html;
});

// Insert HTML into the container
const container = document.querySelector(".container-grid");
if (container) {
    container.innerHTML = htmlProducts;
} else {
    console.error("Container element not found.");
}

// Function to update cart quantity display
export function updateCartQuantity() {
    let cartQuantity = Cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    document.querySelector(".js-cart-quantity").textContent = cartQuantity;
}

// Attach event listeners to 'Add to cart' buttons
document.querySelectorAll(".js-add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
    });
});
