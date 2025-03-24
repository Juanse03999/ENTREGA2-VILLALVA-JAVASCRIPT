document.getElementById("btnBuyDiscount").addEventListener("click", buyProduct);
function buyProduct() {
    getPrice();
}

function cancelPurchase() {
    alert("Compra cancelada, ¡vuelva pronto!");
    return null;
}

function getPrice() {
    const products = JSON.parse(localStorage.getItem("Remeras"));

    let units = 0;
    let price = 0;
    if (products && products.length > 0) {
        products.forEach(product => {
            units += product.amount;
            price += product.price * product.amount;
        });
    }


    alert(`Este es el precio total: $${price}.`)
    // return totalPrice;
}