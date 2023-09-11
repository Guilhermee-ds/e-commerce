import { catalog } from "./ultility";

const idsProductCartHowQuantity = {};

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
    delete idsProductCartHowQuantity[idProduct];
    renderProductCart();
}

// Adiciona quantidade de um produto no carrinho
function addquantityProduct(idProduct) {
    if (idsProductCartHowQuantity[idProduct] === undefined) {
        idsProductCartHowQuantity[idProduct] = 0; // Inicializa a quantidade como 0 quando adiciona um novo item.
    }
    
    const product = catalog.find(p => p.id === idProduct);
    if (product) {
        if (idsProductCartHowQuantity[idProduct] === 0) {
            idsProductCartHowQuantity[idProduct]++; // Defina a quantidade para 1 quando o item é adicionado pela primeira vez
            attPriceCart(product.price); // Atualiza o preço do carrinho com o preço do item
        } else {
            idsProductCartHowQuantity[idProduct]++; // Aumenta a quantidade se o item já estiver no carrinho
            attPriceCart(); // Atualiza o preço do carrinho sem alterar o preço do item
        }
    }
    
    atualizeQuantity(idProduct);
}

// Remove quantidade de um produto no carrinho
function removequantityProduct(idProduct) {
    if (idsProductCartHowQuantity[idProduct] === undefined) {
        return;
    }
    if (idsProductCartHowQuantity[idProduct] === 1) {
        removecar(idProduct);
        return;
    }
    idsProductCartHowQuantity[idProduct]--;
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
    containerProductShopping.appendChild(elementArticle);

    document.getElementById(`decrease-product-${product.id}`).addEventListener('click', () => removequantityProduct(product.id));
    document.getElementById(`product-enhancement-${product.id}`).addEventListener('click', () => addquantityProduct(product.id));

    document.getElementById(`remover-item-${product.id}`).addEventListener('click', () => removecar(product.id));
}

// Renderiza os produtos no carrinho
function renderProductCart() {
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
    } else {
        idsProductCartHowQuantity[idProduct] = 1;

        const product = catalog.find(p => p.id === idProduct);
        if (product) {
            attPriceCart(product.price); // Adiciona o preço do item apenas quando ele é adicionado pela primeira vez
        }
    }

    designProducTonCart(idProduct);
}



// Calcula o preço total dos produtos no carrinho
function attPriceCart(itemPrice = 0) {
    const PriceCart = document.getElementById('price-all');
    let priceAllCart = 0;

    for (const idProductInCart in idsProductCartHowQuantity) {
        const product = catalog.find(p => p.id === idProductInCart);
        if (product) {
            priceAllCart += product.price * idsProductCartHowQuantity[idProductInCart];
        }
    }

    if (itemPrice !== 0) {
        priceAllCart += itemPrice;
    }

    PriceCart.innerText = `all: $${priceAllCart.toFixed(2)}`;
}