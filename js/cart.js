const cardsContainer = document.getElementById("products-container")

function createStartCards() {
    const products = JSON.parse(localStorage.getItem("allProducts"));
    if (products && products.length > 0) {
        products.forEach(product => {
            const newProduct = document.createElement("div");
            newProduct.classList = "product-card";
            newProduct.innerHTML =  `
            <img src="./img/${product.id}.jpeg">
            <h3 class="productName">${product.name}</h3>
            <p class="priceProduct">$${product.price}</p>
            <div>
                <button class="lessProduct">-</button>
                <span class="amount">0</span>
                <button class="moreProduct">+</button>
            </div>
            `;
            cardsContainer.appendChild(newProduct);
            newProduct.getElementsByTagName("button")[1].addEventListener("click", () => addToCart(product));
            newProduct.getElementsByTagName("button")[0].addEventListener("click", () => quitToCart(product));
        });
    }
}


createStartCards();
