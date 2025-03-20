const cardsContainer = document.getElementById("products-container")

if (!localStorage.getItem("allProducts")) {
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

function createStartCards(products) {
    products.forEach(product => {
        const newProduct = document.createElement("div");
        newProduct.classList = "product-card";
        newProduct.innerHTML =  `
        <img src="./img/${product.id}.jpeg">
        <h3 class="productName">${product.name}</h3>
        <p class="priceProduct">$${product.price}</p>
        <button class="btnadd">Agregar al carrito</button>`
        cardsContainer.appendChild(newProduct);
        newProduct.getElementsByTagName("button")[0].addEventListener("click", () => addToCart(product));
    });
}

createStartCards(allProducts);


