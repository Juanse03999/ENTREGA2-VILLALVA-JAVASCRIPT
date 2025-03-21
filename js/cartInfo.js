// Cart Function

// AÑADIR AL CARRITO
function addToCart(product) {
    const storage = JSON.parse(localStorage.getItem("Remeras"));
    console.log(storage);
    let count = 0;
    if (!storage) {
        const OtherNewProduct = getNewProductForStorage(product);
        localStorage.setItem("Remeras",JSON.stringify ([OtherNewProduct]));
        count = 1;
    } else {
        const productIndex = storage.findIndex(Tshirt => Tshirt.id === product.id);
        console.log(productIndex);
        const newStorage = storage;
        if (productIndex === -1) {
            newStorage.push(getNewProductForStorage(product));
            count = 1;
        } else {
            newStorage[productIndex].amount ++;
            count = newStorage[productIndex].amount;
        }
        localStorage.setItem("Remeras",JSON.stringify (newStorage));
        return count;
    }
    updateCartNum();
    return count;
}

// QUITAR DEL CARRITO
// function quitToCart(product) {
//     const storage = JSON.parse(localStorage.getItem("Remeras"));
//     const productIndex = storage.findIndex(Tshirt => Tshirt.id === product.id);
//     if (storage[productIndex].amount === 1) {
//         storage.splice(productIndex, 1);
//     } else {
//         storage[productIndex].amount--;
//     }
//     localStorage.setItem("Remeras",JSON.stringify (storage));
// }

function quitToCart(product) {
    const storageString = localStorage.getItem("Remeras");
    const storage = storageString ? JSON.parse(storageString) : [];

    // Buscar el índice del producto en el carrito
    const productIndex = storage.findIndex(Tshirt => Tshirt.id === product.id);

    // Si el producto no está en el carrito, salir de la función
    if (productIndex === -1) {
        console.warn("El producto no está en el carrito.");
        return;
    }

    // Si la cantidad del producto es 1, eliminarlo del carrito
    if (storage[productIndex].amount === 1) {
        storage.splice(productIndex, 1); // Eliminar el producto del carrito
    } else {
        // Si la cantidad es mayor que 1, reducir la cantidad en 1
        storage[productIndex].amount--;
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("Remeras", JSON.stringify(storage));

    // Actualizar la interfaz
    // updateCartNum();
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
    const count = storage.reduce((acum, current) => acum+current.amount,0);
    cartCountdownElement.innerText = count;
}

updateCartNum();