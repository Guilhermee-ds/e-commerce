import { catalog } from "./ultility";

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

 export function addItemCar (idProduct) {
    const product = catalog.find((p) => p.id === idProduct);
    const containerProductShopping = document.getElementById("product-car");
    const cardProductShopping = `
    <article class="flex bg-slate-100 rounded-lg p-1 relative">
      <button id="closed-car" class="absolute top-0 right-2">
        <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
      </button>
      <img 
        src="./assets/img/${product.nameFileImage}" 
        alt="Shopping: ${product.name}"
        class="h-24 rounded-lg"
      />
      <div class="py-2">
        <p class="text-slate-900 text-sm">${product.name}</p>
        <p class="text-slate-500 text-xs">${product.mark}</p>
        <p class="text-green-900 text-lg">$${product.price}</p>
      </div>
    </article>
  `;
  containerProductShopping.innerHTML += cardProductShopping
}