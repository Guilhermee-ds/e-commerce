const catalogProducts = document.getElementById("container-product");

function showAll() {
    const productsHide = 
    Array.from(catalogProducts.getElementsByClassName('hidden'));

    for (const product of productsHide) {
        product.classList.remove("hidden");
    }
}

function hideSamsung (){
    showAll();
    const productSamsung =  
    Array.from(catalogProducts.getElementsByClassName("Samsung"));

    for(const product of productSamsung){
        product.classList.add("hidden");
    }
}


function hideApple (){
    showAll();
    const productApple =  
    Array.from(catalogProducts.getElementsByClassName("Aplle"));

    for(const product of productApple){
        product.classList.add("hidden");
    }
}

 export function initFilter (){
    document.getElementById('show-all').addEventListener("click", showAll)
    document.getElementById('show-samsung').addEventListener("click", hideApple)
    document.getElementById('show-apple').addEventListener("click", hideSamsung)
}