const products = [{
    image: "images/first-image.png",
    name: "gown1",
    price: 20.00,

},{
    image: "images/second-image.png",
    name: "gown2",
    price: 18.00,

},{
    image: "images/third-image.png",
    name: "gown3",
    price: 22.65,

},{
    image: "images/forth-image.png",
    name: "gown4",
    price: 32.80,
},];

let htmlProducts = ""


products.forEach(products => {
    
    const html = `
    <div class="gown1-container">
            <div class="gown1-div" >
                <img class="gown1-img" src="${products.image}">
            </div>
            <p class="gown1-name">${products.name}</p>
            <p>${products.price.toFixed(2)}</p>
            <div>
                <select>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option4">4</option>
                </select>
                  
            </div>

            <button class="js-add-to-cart" data-product-name="${products.name}">Add to cart</button>
        </div>`
        htmlProducts += html
    // console.log(htmlProducts)
});

document.querySelector(".container-grid").innerHTML = htmlProducts

document.querySelectorAll(".js-add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.dataset.productName;
        // console.log(productName)
        let matchingItem;
        cart.forEach((item) => {
            if(productName === item.productName) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productName: productName,
                quantity: 1
            });
        }


        
        console.log(cart)
    })
}) 



