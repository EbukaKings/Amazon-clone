import { Cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { deliveryOptions } from "../data/deliveryOptions.js";
// import { updateCartQuantity } from "./amazon.js";

const today = dayjs();
const deliveryDate = today.add(7, "days");
console.log(deliveryDate); // Formats the date as 'YYYY-MM-DD'
console.log(deliveryDate.format("dddd, MMMM D"))

let  cartSummaryHTML = "";

Cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    
    let matchingProduct;
    products.forEach((product) => {
        if (product.productId === productId) {
            matchingProduct = product;
        }
        
        
    })
    console.log(matchingProduct)
    
    cartSummaryHTML += `
    <div class="checkout-product js-cart-item-container-${matchingProduct.productId}">
                    <div>
                        <h2>Delivery date: Wednesday, July 31</h2>
                    </div>
                    <div class="item-payment-container">
                    <div class="cart-container-item">
                        <div class="item-details-container">
                            <div>
                                <img class="cart-img" src="${matchingProduct.image}">
                            </div>
                            <div class="product-info-container">
                                <div class="product-info-container-description">
                                    <h4>${matchingProduct.name}</h4>
                                </div>
                                <div>
                                    <p>$${matchingProduct.price}</p>
                                </div>
                                <div>
                                    <p>Quantity:${cartItem.quantity}</p>
                                    <button>Update</button>
                                    <button class="js-delete-link" data-product-id="${matchingProduct.productId}">Delete</button>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="delivery-choice-container">
                            <div class="delivery-choice-container-description">
                                <p>Choose a delivery option:</p>
                                <div>
                                    <input type="radio" name="choice-delevery-radio">Thursday, August 8 <p>FREE Shipping</p>
                                </div>
                                <div>
                                    <input type="radio" name="choice-delevery-radio">Friday, August 2
                                    <p>$4.99 - Shipping</p>
                                </div>
                                <div>
                                    <input type="radio" name="choice-delevery-radio">Wednesday, July 31
                                    <p>$9.99 - Shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
})

function deliveryOptionHTML() {
    deliveryOptions.forEach((deliveryOption)=> {
        const today = dayjs();
        const deliveryDate = today.add
        `
        <div class="delivery-choice-container">
                            <div class="delivery-choice-container-description">
                                <p>Choose a delivery option:</p>
                                <div>
                                    <input type="radio" name="choice-delevery-radio">Thursday, August 8 <p>FREE Shipping</p>
                                </div>
                                <div>
                                    <input type="radio" name="choice-delevery-radio">Friday, August 2
                                    <p>$4.99 - Shipping</p>
                                </div>
                                <div>
                                    <input type="radio" name="choice-delevery-radio">Wednesday, July 31
                                    <p>$9.99 - Shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
        `
    })
}
// console.log(cartSummaryHTML)
document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

// document.querySelectorAll(".js-delete-link")
//  .forEach((link) => {
//     link.addEventListener(("click"), () => {
//         const productId = link.dataset.productId
//         console.log(productId)
//     });
//  })

document.querySelectorAll(".js-delete-link")
  .forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      
      removeFromCart(productId)
      const container = document.querySelector(` .js-cart-item-container-${productId}`);
      container.remove()
    });
  });

