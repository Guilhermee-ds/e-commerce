
import { listenLocalStorage, designProducSimple } from "./src/ultility";


function designProducCheckot() {
    const idsProductCartHowQuantity = listenLocalStorage('cart');

    const containerProductsCheckout = document.getElementById("container-products-checkout");

    // Limpa o conteúdo do container antes de adicionar os produtos
    containerProductsCheckout.innerHTML = '';

    // Itera sobre os produtos no carrinho e cria os elementos no checkout
    for (const idProduct in idsProductCartHowQuantity) {
        const quantityProduct = idsProductCartHowQuantity[idProduct];
        designProducSimple(idProduct, "container-products-checkout", quantityProduct);
    }
}

// Chama a função para criar os produtos no checkout quando a página for carregada
window.addEventListener('DOMContentLoaded', designProducCheckot);
