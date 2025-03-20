const cardsContainer = document.getElementById("products-container")

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
    });
}

createStartCards(allProducts);