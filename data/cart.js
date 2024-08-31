export let Cart = JSON.parse(localStorage.getItem("Cart"));

if (!Cart) {
    Cart = [
        {productId:"b1a7c8a0-69f1-4b3f-8d0d-d4f8a0874a57",
        quantity: 1,
        deliveryOptionId: "1"
        },
        {productId:"b1a7c8a0-69f1-4b3f-8d0d-d4f8a0874a63",
        quantity: 1,
        deliveryOptionId: "2"
        },
    ];
}




function saveToStorage() {
    localStorage.setItem("Cart", JSON.stringify(Cart) );
}

export function addToCart(productId) {
    let matchingItem;
        Cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            Cart.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: "1"
            });
        }
        saveToStorage()
}

export function removeFromCart(productId) {
    const newCart = [];
    Cart.forEach((cartItem) => {
        if(cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    })
    Cart = newCart;
    saveToStorage()
}