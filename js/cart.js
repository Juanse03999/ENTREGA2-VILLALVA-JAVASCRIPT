const cardsContainer = document.getElementById("products-container");
const elementUnits = document.getElementById("units");
const elementPrice = document.getElementById("price");
const elementEmptyCart = document.getElementById("empty-cart");
const elementTotals = document.getElementById("totals");
const elementResetCart = document.getElementById("btnRst");

function createStartCards() {
    cardsContainer.innerHTML = "";
    const products = JSON.parse(localStorage.getItem("Remeras")) || [];

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

            newProduct.querySelector(".moreProduct").addEventListener("click", (e) => {
                const countElement = e.target.parentElement.getElementsByTagName("span")[0];
                countElement.innerText = addToCart(product);
                upadteTotals();
            });

            newProduct.querySelector(".lessProduct").addEventListener("click", () => {
                quitToCart(product);
                createStartCards();
                upadteTotals();
            });
        });
    }
}

createStartCards();
upadteTotals();

function upadteTotals() {
    const products = JSON.parse(localStorage.getItem("Remeras"));
    let units = 0;
    let price = 0;
    if (products && products.length > 0) {
        products.forEach(product => {
            units += product.amount;
            price += product.price * product.amount;
        })
        elementUnits.innerText = units;
        elementPrice.innerText = price;
    }
    checkEmptyMessage();
}

function checkEmptyMessage() {
    const products = JSON.parse(localStorage.getItem("Remeras"));

    if (!products || products.length === 0) {
        elementEmptyCart.classList.remove("hidden"); 
        elementTotals.classList.add("hidden");
    } else {
        elementEmptyCart.classList.add("hidden");
        elementTotals.classList.remove("hidden");
    }
}
checkEmptyMessage();

elementResetCart.addEventListener("click", resetCart)
function resetCart() {
    localStorage.removeItem("Remeras");
    upadteTotals();
    createStartCards();
    updateCartNum();
}