export const catalogo = [
    {
      
        id: "1",
        name: "Iphone 13 Green",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'iphone-13-green.jpg',
        apple: true,
    },
    {
        id: "2",
        name: "Iphone 13 Midnight",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'iphone-13-night.jpg',
        apple: true,
    },
    {
        id: "3",
        name: "Iphone 13 Pink",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'iphone-13-pink.jpg',
        apple: true,
    },
    {
        id: "4",
        name: "Iphone 13 Red",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'iphone-13-red.jpg',
        apple: true,
    },
    {
        id: "5",
        name: "Iphone 14 Pro Max Gold",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'iphone-14-gold.jpg',
        apple: true,
    },
    {
        id: "6",
        name: "Iphone 14 Pro Max Night",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'iphone-14-night.jpg',
        apple: true,
    },
    {
        id: "7",
        name: "Iphone 14 pro max White",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'iphone-14-white.jpg',
        apple: true,
    },
    
    {
        id: "8",
        name: "Iphone 11 Black",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'iphone-11-black.jpg',
        apple: true,
    },
    {
        id: "9",
        name: "Iphone 11 Red",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'iphone-11-red.jpg',
        apple: true,
    },
    {
        id: "10",
        name: "Iphone 11 white",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'iphone-11-white.jpg',
        apple: true,
    },

    {
        id: "11",
        name: "Samsung s22 White",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'Samsung-s22-white.jpg',
        apple: false,
    },


    {
        id: "12",
        name: "Samsung S23 Gold",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'Samsung-s23.jpg',
        apple: false,
    },
    {
        id: "13",
        name: "Samsung S23 plus Black",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'Samsung-s23-plus-black.jpg',
        apple: false,
    },
    {
        id: "14",
        name: "Samsung S23 plus gold",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'Samsung-s23-plus-gold.jpg',
        apple: false,
    },
    {
        id: "15",
        name: "Samsung S23 plus violet",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'Samsung-s23-plus-violet.jpg',
        apple: false,
    },
    {
        id: "16",
        name: "Samsung s23 Ultra Black",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'Samsung-s23-ultra-black.jpg',
        apple: false,
    },
    {
        id: "17",
        name: "Samsung S23 Ultra Gold",
        mark: "Samsung",
        price: 4000,
        nameFileImage: 'Samsung-s23-ultra-gold.jpg',
        apple: false,
    },
    {
        id: "18",
        name: "Samsung s22 Ultra Black",
        mark: "Apple",
        price: 4000,
        nameFileImage: 'Samsung-s22-ultra-black.jpg',
        apple: false,
    },
    
  ];

export function salvarLocalStorage(chave, informacao){
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave){
  return JSON.parse(localStorage.getItem(chave));
  }

export function apagarDoLocalStorage(chave){
  localStorage.removeItem(chave)
}

  export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto){

    const produto = catalogo.find(p => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  
    const elementoArticle = document.createElement("article"); //<article></article>
  
    const articleClasses = [
      "flex", 
      "bg-indigo-300", 
      "rounded-lg", 
      "p-2", 
      "relative",
      "mb-2",
      "w-96",
    ];
  
    for(const articleClass of articleClasses){
      elementoArticle.classList.add(articleClass);
    }
    
  
    const cartaoProdutoCarrinho = `<img src="./assets/img/${produto.nameFileImage}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-indigo-950 text-sm">${produto.name}</p>
      <p class="text-green-700 text-lg">$${produto.price}</p>
    </div>
    <div class="flex text-indigo-950 items-end absolute bottom-0 right-2 text-lg">
      <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
    </div>`;
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
  
  containerProdutosCarrinho.appendChild(elementoArticle);

  }