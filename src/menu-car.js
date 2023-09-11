import { catalog, saveLocalStorage, listenLocalStorage } from "./ultility";

const idsProductCartHowQuantity = listenLocalStorage('cart') ?? {};

// Inicializa o carrinho
function openCar() {
    document.getElementById("cart").classList.add("right-[0px]");
    document.getElementById("cart").classList.remove("right-[-360px]");
}

// Fecha o carrinho
function closeCar() {
    document.getElementById("cart").classList.remove("right-[0px]");
    document.getElementById("cart").classList.add("right-[-360px]");
}

// Inicializa o carrinho
export function initcart() {
    const buttonCloseCar = document.getElementById("closed-car");
    const buttonOpenCar = document.getElementById("open-car");
    // Adiciona eventos aos botões para fechar e abrir o carrinho
    buttonCloseCar.addEventListener("click", closeCar);
    buttonOpenCar.addEventListener("click", openCar);
}

// Remove um item do carrinho
function removecar(idProduct) {
    saveLocalStorage('cart',idsProductCartHowQuantity);
    delete idsProductCartHowQuantity[idProduct];
    renderProductCart();
}

// Adiciona quantidade de um produto no carrinho
function addquantityProduct(idProduct) {
    if (idsProductCartHowQuantity[idProduct] === undefined) {
        idsProductCartHowQuantity[idProduct] = 1; // Inicializa a quantidade como 1 quando adiciona um novo item.
        saveLocalStorage('cart',idsProductCartHowQuantity);
    } else {
        idsProductCartHowQuantity[idProduct]++;
    }

    atualizeQuantity(idProduct);

    const product = catalog.find(p => p.id === idProduct);
    if (product) {
        if (idsProductCartHowQuantity[idProduct] === 1) {
            attPriceCart(product.price); // Adiciona o preço do item apenas quando ele é adicionado pela primeira vez
        } else {
            attPriceCart(); // Atualiza o preço do carrinho sem alterar o preço do item
        }
    }
}



// Remove quantidade de um produto no carrinho
function removequantityProduct(idProduct) {
    if (idsProductCartHowQuantity[idProduct] === undefined) {
        return;
    }
    if (idsProductCartHowQuantity[idProduct] === 1) {
        delete idsProductCartHowQuantity[idProduct]; // Remova o item do carrinho quando a quantidade for 0
    } else {
        idsProductCartHowQuantity[idProduct]--;
        saveLocalStorage('cart',idsProductCartHowQuantity);
    }
    atualizeQuantity(idProduct);
    attPriceCart(); // Chama attPriceCart após a remoção
}


// Atualiza a quantidade exibida no carrinho
function atualizeQuantity(idProduct) {
    document.getElementById(`quantity-${idProduct}`).innerText = idsProductCartHowQuantity[idProduct];
}

// Renderiza os produtos no carrinho
function designProducTonCart(idProduct) {
    const product = catalog.find((p) => p.id === idProduct);
    const containerProductShopping = document.getElementById("product-car");

    // Verifique se o card já existe no carrinho
    const existingCard = document.getElementById(`product-card-${idProduct}`);
    
    if (existingCard) {
        const quantityElement = existingCard.querySelector(`#quantity-${idProduct}`);
        quantityElement.innerText = idsProductCartHowQuantity[idProduct];
    } else {
        const elementArticle = document.createElement("article");
        const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-1', 'relative'];

        for (const articleClass of articleClasses) {
            elementArticle.classList.add(articleClass);
        }

        const cardProductShopping = `<button id="remover-item-${product.id}" class="absolute top-0 right-2">
            <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
          </button>
          <img 
            src="./assets/img/${product.nameFileImage}" 
            alt="Shopping: ${product.name}"
            class="h-24 rounded-lg"
          />
          <div class="p-2 flex flex-col justify-between">
            <p class="text-slate-900 text-sm">${product.name}</p>
            <p class="text-slate-500 text-xs">${product.mark}</p>
            <p class="text-green-900 text-lg">$${product.price}</p>
          </div>
          <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
                <button id="decrease-product-${product.id}"><i class="fa-solid fa-minus"></i></button>
                <p id="quantity-${product.id}" class="ml-2">${idsProductCartHowQuantity[product.id]}</p>
                <button id="product-enhancement-${product.id}" class=" ml-2"><i class="fa-solid fa-plus"></i>
                </button>
          </div>`;

        elementArticle.innerHTML = cardProductShopping;
        elementArticle.id = `product-card-${idProduct}`;
        containerProductShopping.appendChild(elementArticle);

        document.getElementById(`decrease-product-${product.id}`).addEventListener('click', () => removequantityProduct(product.id));
        document.getElementById(`product-enhancement-${product.id}`).addEventListener('click', () => addquantityProduct(product.id));

        document.getElementById(`remover-item-${product.id}`).addEventListener('click', () => removecar(product.id));
    }
}


// Renderiza os produtos no carrinho
 export function renderProductCart() {
    const containerProductShopping = document.getElementById("product-car");
    containerProductShopping.innerHTML = "";

    for (const idProduct in idsProductCartHowQuantity) {
        designProducTonCart(idProduct);
    }
}

// Adiciona um item ao carrinho
export function addItemCar(idProduct) {
    if (idProduct in idsProductCartHowQuantity) {
        idsProductCartHowQuantity[idProduct]++;
        attPriceCart(); // Atualiza o preço do carrinho quando a quantidade é incrementada
    } else {
        idsProductCartHowQuantity[idProduct] = 1;

        const product = catalog.find(p => p.id === idProduct);
        if (product) {
            attPriceCart(product.price); // Adiciona o preço do item apenas quando ele é adicionado pela primeira vez
        }

        designProducTonCart(idProduct); // Cria um novo card para o item
    }
}


// Calcula o preço total dos produtos no carrinho
 export function attPriceCart() {
    const PriceCart = document.getElementById('price-all');
    let priceAllCart = 0;

    for (const idProductInCart in idsProductCartHowQuantity) {
        const product = catalog.find(p => p.id === idProductInCart);
        if (product) {
            priceAllCart += product.price * idsProductCartHowQuantity[idProductInCart];
        }
    }

    // Verifique se o carrinho está vazio
    if (priceAllCart === 0) {
        PriceCart.innerText = 'Total: $0.00'; // Defina o valor como 0 se o carrinho estiver vazio
    } else {
        PriceCart.innerText = `Total: $${priceAllCart.toFixed(2)}`;
    }
}
