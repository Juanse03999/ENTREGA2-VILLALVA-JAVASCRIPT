// Cart Function
function addToCart(product) {
    const storage = JSON.parse(localStorage.getItem("Remeras"));
    console.log(storage);
    if (!storage) {
        const OtherNewProduct = getNewProductForStorage(product);
        localStorage.setItem("Remeras",JSON.stringify ([OtherNewProduct]));
    } else {
        const productIndex = storage.findIndex(Tshirt => Tshirt.id === product.id);
        console.log(productIndex);
        const newStorage = storage;
        if (productIndex === -1) {
            newStorage.push(getNewProductForStorage(product));
        } else {
            newStorage[productIndex].amount ++;
        }
        localStorage.setItem("Remeras",JSON.stringify (newStorage));
    }
    updateCartNum();
}

// Toma producto, le agrega cantidad 1 y lo devuelve:
function getNewProductForStorage(product) {
    const newProduct = product;
    newProduct.amount = 1;
    return newProduct;
}

// ACTUALIZAR NUMERO DE CARRITO:
const cartCountdownElement = document.getElementById("cart-countdown")
function updateCartNum() {
    const storage = JSON.parse(localStorage.getItem("Remeras"));
    const count = storage.reduce((acum, current) => acum+current.amount,0);
    cartCountdownElement.innerText = count;
}

updateCartNum();