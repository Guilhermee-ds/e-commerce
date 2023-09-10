import { addItemCar } from "./menu-car";
import { catalog } from "./ultility";

export function renderCatalog() {
        //run intens in my list and add to page
        for (const productCatalog of catalog) {
            const cardProduct = ` <div class="border-solid w-48 m-4 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group" id="card-product-${productCatalog.id}">
        <img 
        src="assets/img/${productCatalog.nameFileImage}" 
        alt="Product 1 ecommerc"
        class="group-hover:scale-110 duration-300 my-3 rounded-lg"
        
        />
        <P class='text-sm'>${productCatalog.name}</P>
        <p class='text-sm'>${productCatalog.mark}</p>
        <p class='text-sm'>${productCatalog.price}</p>
        <button id="add-${productCatalog.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200">
        <i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

//add card in page automatically
    document.getElementById("container-product").innerHTML += cardProduct;
    }
for (const productCatalog of catalog) {
    document
    .getElementById(`add-${productCatalog.id}`)
    .addEventListener('click', () => addItemCar(productCatalog.id));
    };
}

