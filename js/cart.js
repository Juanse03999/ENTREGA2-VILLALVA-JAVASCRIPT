// const cardsContainer = document.getElementById("products-container")

// function createStartCards() {
//     cardsContainer.innerHTML = "";
//     const products = JSON.parse(localStorage.getItem("allProducts"));
//     if (products && products.length > 0) {
//         products.forEach(product => {
//             const newProduct = document.createElement("div");
//             newProduct.classList = "product-card";
//             newProduct.innerHTML =  `
//             <img src="./img/${product.id}.jpeg">
//             <h3 class="productName">${product.name}</h3>
//             <p class="priceProduct">$${product.price}</p>
//             <div>
//                 <button class="lessProduct">-</button>
//                 <span class="amount">0</span>
//                 <button class="moreProduct">+</button>
//             </div>
//             `;
//             cardsContainer.appendChild(newProduct);
//             newProduct.getElementsByTagName("button")[1].addEventListener("click", () => addToCart(product));
//             newProduct.getElementsByTagName("button")[0].addEventListener("click", () => {
//                 quitToCart(product)
//                 createStartCards();
//             });
//         });
//     }
// }


// createStartCards();

const cardsContainer = document.getElementById("products-container");

function createStartCards() {
    cardsContainer.innerHTML = ""; // Limpiar el contenedor antes de renderizar
    const products = JSON.parse(localStorage.getItem("Remeras")) || []; // Obtener productos del carrito

    if (products && products.length > 0) {
        products.forEach(product => {
            const newProduct = document.createElement("div");
            newProduct.classList = "product-card";
            newProduct.innerHTML = `
                <img src="./img/${product.id}.jpeg">
                <h3 class="productName">${product.name}</h3>
                <p class="priceProduct">$${product.price}</p>
                <div>
                    <button class="lessProduct">-</button>
                    <span class="amount">${product.amount}</span>
                    <button class="moreProduct">+</button>
                </div>
            `;
            cardsContainer.appendChild(newProduct);

            // Agregar eventos a los botones
            newProduct.querySelector(".moreProduct").addEventListener("click", (e) =>  {
                const countElement = e.target.parentElement.getElementsByTagName("span")[0];
                countElement.innerText = addToCart(product);
            });
            newProduct.querySelector(".lessProduct").addEventListener("click", () => {
                quitToCart(product);
                createStartCards();
            });
        });
    } else {
        // Si no hay productos en el carrito, mostrar un mensaje o dejar el contenedor vacío
        cardsContainer.innerHTML = `<p>No hay productos en el carrito.</p>`;
    }
}

createStartCards();