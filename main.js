//colect item
const catalog = [
{
    id:1,
    name: "Iphone 13 blue",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-13-blue.jpg',
    smartphone: true,
},
{
    id:2,
    name: "Iphone 13 midnight",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-13-midnight.jpg',
    smartphone: true,
},
{
    id:3,
    name: "Iphone 13 red",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-13-red.jpg',
    smartphone: true,
},
{
    id:4,
    name: "Iphone 14 black",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-pro-black.jpg',
    smartphone: true,
},
{
    id:5,
    name: "Iphone 14 Pro black",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-pro-black.jpg',
    smartphone: true,
},
{
    id:6,
    name: "Iphone Pro gold",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-pro-gold.jpg',
    smartphone: true,
},
{
    id:7,
    name: "Iphone Pro silver",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-pro-silver.jpg',
    smartphone: true,
},
{
    id:7,
    name: "Iphone purple",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-purple.jpg',
    smartphone: true,
},
{
    id:7,
    name: "Iphone blue",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-blue.jpg',
    smartphone: true,
},
 ];

 //run intens in my list and add to page
 for ( const productCatalog of catalog ) {
    const cardProduct = ` <div id="card-product-1">
    <img 
    src="assets/img/${productCatalog.nameFileImage}" 
    alt="Product 1 ecommerc"
    style="height: 300px;"
    />
    <p>${productCatalog.mark}</p>
    <P>${productCatalog.name}</P>
    <p>$${productCatalog.price}</p>
    <button>Adicionar</button>
    </div>`;
    
    document.getElementById("container-product").innerHTML += cardProduct;
 }

//input itens in field scrolls through the array and collects item 4
