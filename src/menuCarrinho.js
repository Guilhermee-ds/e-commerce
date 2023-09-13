import { catalogo, salvarLocalStorage, lerLocalStorage} from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? { };

function abrirCarrinho(){
    document.getElementById("carrinho").classList.add("right-[0px]");    
    document.getElementById("carrinho").classList.remove("right-[-360px]");  
}

function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0px]");    
    document.getElementById("carrinho").classList.add("right-[-360px]");    
}

function irParaCheckout(){
  if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
    return;
  }
  window.location.href = "./checkout.html";
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoIrParaCheckout = document.getElementById("finalizar-compra");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function removerDoCarrinho(idProduto){
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}


function desenharProdutoNoCarrinho(idProduto){

  const produto = catalogo.find(p => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article"); //<article></article>

  const articleClasses = ["flex", "bg-indigo-200", "rounded-lg", "p-2", "relative"];

  for(const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
  }
  

  const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-indigo-500 hover:text-indigo-900"></i></button>
  <img src="./assets/img/${produto.nameFileImage}" alt="Carrinho: ${produto.name}" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
    <p class="text-indigo-950 text-sm">${produto.name}</p>
    <p class="text-green-700 text-lg">$${produto.price}</p>
  </div>
  <div class="flex text-indigo-950 items-end absolute bottom-0 right-2 text-lg">
    <button id="decrementar-produto-${produto.id}" class="">-</button>
    <p id="quantidade-${produto.id}" class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
    <button id="incrementar-produto-${produto.id}" class="ml-2">+</button>
  </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;

containerProdutosCarrinho.appendChild(elementoArticle);

document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click", () =>  decrementarQuantidadeProduto(produto.id));

document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click", () =>  incrementarQuantidadeProduto(produto.id));

document.getElementById(`remover-item-${produto.id}`).addEventListener("click", () =>  removerDoCarrinho(produto.id));


}

function incrementarQuantidadeProduto(idProduto){
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto){
  if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

export function renderizarProdutosCarrinho(){
  const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";
  for(const idProduto in idsProdutoCarrinhoComQuantidade){
    desenharProdutoNoCarrinho(idProduto);
  }
}


export function adicionarCarrinho(idProduto){
  if(idProduto in idsProdutoCarrinhoComQuantidade){
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  desenharProdutoNoCarrinho(idProduto);

}

export function atualizarPrecoCarrinho(){
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){
    precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).price * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}




