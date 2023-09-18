import { adicionarCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    const lista = [];
    for(const produtoCatalogo of catalogo){
        const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between group ${produtoCatalogo.apple ? "Apple" : "Samsung"} shadow-xl shadow-indigo-400 rounded-lg" id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/img/${produtoCatalogo.nameFileImage}" alt="Produto ${produtoCatalogo.id}" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
        <p class="text-sm">${produtoCatalogo.mark}</p>
        <p class="text-sm">${produtoCatalogo.name}</p>
        <p class="text-sm">$${produtoCatalogo.price}</p>
        <button id="adicionar-${produtoCatalogo.id}" class="bg-indigo-950 text-indigo-300 hover:bg-indigo-800"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    };
    for(const produtoCatalogo of catalogo){
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click", () => adicionarCarrinho(produtoCatalogo.id));
    }
}


