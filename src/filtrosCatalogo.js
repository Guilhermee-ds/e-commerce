const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));
    for(const produto of produtosEscondidos){
        produto.classList.remove("hidden");
    }
}

function esconderApple(){
    exibirTodos();
    const produtosApple = Array.from(catalogoProdutos.getElementsByClassName("Apple"));
    for(const produto of produtosApple){
        produto.classList.add("hidden");
    }
}

function esconderSamsung(){
    exibirTodos();
    const produtosSamsung = Array.from(catalogoProdutos.getElementsByClassName("Samsung"));
    for(const produto of produtosSamsung){
        produto.classList.add("hidden");
    }
}


export function inicializarFiltros(){
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-apple").addEventListener("click", esconderSamsung);
    document.getElementById("exibir-samsung").addEventListener("click", esconderApple);
}

const catalogProducts = document.getElementById("container-product");

function showAll() {
    const productsHide = Array.from(catalogProducts.getElementsByClassName('hidden'));

    for (const product of productsHide) {
        product.classList.remove("hidden");
    }
}

function hideSamsung (){
    showAll();
    const productSamsung = Array.from(catalogProducts.getElementsByClassName("Samsung"));

    for(const product of productSamsung){
        product.classList.add("hidden");
    }
}

function hideApple (){
    showAll();
    const productApple = Array.from(catalogProducts.getElementsByClassName("Aplle"));

    for(const product of productApple){
        product.classList.add("hidden");
    }
}

export function initFilter (){
    document.getElementById('show-all').addEventListener("click", showAll)
    document.getElementById('show-samsung').addEventListener("click", hideApple)
    document.getElementById('show-apple').addEventListener("click", hideSamsung)
}
