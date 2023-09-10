import { catalog } from "./ultility";

const idsProductCartHowQuantity = {
}

//init  open the car
function openCar() {
    document.getElementById("cart").classList.add("right-[0px]");
    document.getElementById("cart").classList.remove("right-[-360px]");
}
//close the car
function closeCar() {
    document.getElementById("cart").classList.remove("right-[0px]");
    document.getElementById("cart").classList.add("right-[-360px]");
}

//init the car
export function initcart() {
    const buttonCloseCar = document.getElementById("closed-car");
    const buttonOpenCar = document.getElementById("open-car");
    //add event in butto the close cart
    buttonCloseCar.addEventListener("click", closeCar);
    buttonOpenCar.addEventListener("click", openCar);
}

//remove when it reaches 0
function removecar(idProduct) {
    delete idsProductCartHowQuantity[idProduct];
}

//add quantity
function addquantityProduct(idProduct){
    idsProductCartHowQuantity[idProduct] ++;
    atualizeQuantity(idProduct);
}
//remove quantity
function removequantityProduct(idProduct){
    idsProductCartHowQuantity[idProduct] --;
    atualizeQuantity(idProduct);
}
//atualize quantity
function atualizeQuantity(idProduct){
    document.getElementById(`quantity-${idProduct}`)
    .innerText = idsProductCartHowQuantity[idProduct];
}
function designProducTonCart(){
    const product = catalog.find((p) => p.id === idProduct);
    const containerProductShopping = document.getElementById("product-car");
    

    const elementArticle = document.createElement("article");
    const articleClasses = ['flex', 'bg-slate-100','rounded-lg','p-1', 'relative'];

   for(const articleClass of articleClasses) {
    elementArticle.classList.add(articleClass);
   }

    const cardProductShopping = `<button id="closed-car" class="absolute top-0 right-2">
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
}

 function renderProductCart(){
    const containerProductShopping = document.getElementById("product-car");
    containerProductShopping.innerHTML = "";

    for(const idProduct in idsProductCartHowQuantity){
        designProducTonCart(idProduct);
    }
}

 export function addItemCar (idProduct) {
    if (idProduct in idsProductCartHowQuantity) {
        addquantityProduct(idProduct);
        return;
    }

    idsProductCartHowQuantity[idProduct] = 1;
    designProducTonCart(idProduct);
}