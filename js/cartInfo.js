// Cart Function

// AÑADIR AL CARRITO
function addToCart(product) {
    const storage = JSON.parse(localStorage.getItem("Remeras"));
    let count = 0;
    if (!storage) {
        const OtherNewProduct = getNewProductForStorage(product);
        localStorage.setItem("Remeras",JSON.stringify ([OtherNewProduct]));
        count = 1;
    } else {
        const productIndex = storage.findIndex(Tshirt => Tshirt.id === product.id);
        const newStorage = storage;
        if (productIndex === -1) {
            newStorage.push(getNewProductForStorage(product));
            count = 1;
        } else {
            newStorage[productIndex].amount ++;
            count = newStorage[productIndex].amount;
        }
        localStorage.setItem("Remeras",JSON.stringify (newStorage));
    }
    updateCartNum();
    return count;
}

// QUITAR DEL CARRITO
function quitToCart(product) {
    const storageString = localStorage.getItem("Remeras");
    const storage = storageString ? JSON.parse(storageString) : [];

    const productIndex = storage.findIndex(Tshirt => Tshirt.id === product.id);

    if (productIndex === -1) {
        console.warn("El producto no está en el carrito.");
        return;
    }

    if (storage[productIndex].amount === 1) {
        storage.splice(productIndex, 1); 
    } else {
        storage[productIndex].amount--;
    }

    localStorage.setItem("Remeras", JSON.stringify(storage));

    updateCartNum();
}

// Toma producto, le agrega cantidad 1 y lo devuelve:
function getNewProductForStorage(product) {
    const newProduct = product;
    newProduct.amount = 1;
    return newProduct;
}

// ACTUALIZAR NUMERO DE CARRITO:
const cartCountdownElement = document.getElementById("cart-countdown");
function updateCartNum() {
    const storageString = localStorage.getItem("Remeras");
    const storage = storageString ? JSON.parse(storageString) : [];
    if (storage && count.lenght > 0) {
        const count = storage.reduce((acum, current) => acum+current.amount, 0);
        cartCountdownElement.innerText = count;
    } else {
        cartCountdownElement.innerText = 0;
    }
}

updateCartNum();