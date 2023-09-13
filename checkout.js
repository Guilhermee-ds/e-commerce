
import { listenLocalStorage, designProducSimple } from "./src/ultility";


function designProducCheckot() {
    const idsProductCartHowQuantity = listenLocalStorage('cart');

    // Itera sobre os produtos no carrinho e cria os elementos no checkout
    for (const idProduct in idsProductCartHowQuantity) {
        designProducSimple(
        idProduct,
        "container-products-checkout",
        idsProductCartHowQuantity[idProduct]
    );
 }
}
designProducCheckot();
