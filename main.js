//colect item
const catalog = [
{
    id:1,
    name: "Iphone 13 Green",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-13-green.jpg',
    samsung: false,
    apple: true,
},
{
    id:2,
    name: "Iphone 13 Midnight",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-13-night.jpg',
    samsung: false,
    apple: true,
},
{
    id:3,
    name: "Iphone 13 Pink",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-13-pink.jpg',
    samsung: false,
    apple: true,
},
{
    id:4,
    name: "Iphone 13 Red",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-13-red.jpg',
    samsung: false,
    apple: true,
},
{
    id:5,
    name: "Iphone 14 Pro Max Gold",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-gold.jpg',
    samsung: false,
    apple: true,
},
{
    id:6,
    name: "Iphone 14 Pro Max Night",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-night.jpg',
    samsung: false,
    apple: true,
},
{
    id:7,
    name: "Iphone 14 pro max White",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'iphone-14-white.jpg',
    samsung: false,
    apple: true,
},
{
    id:8,
    name: "Samsung s22 Ultra Black",
    mark: "Apple",
    price: 4000,
    nameFileImage: 'Samsung-s22-ultra-black.jpg',
    samsung: true,
    apple: false,
},
{
    id:9,
    name: "Samsung s22 White",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'Samsung-s22-white.jpg',
    samsung: true,
    apple: false,
},
{
    id:10,
    name: "Samsung s23 Ultra Black",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'Samsung-s23-ultra-black.jpg',
    samsung: true,
    apple: false,
},
{
    id:11,
    name: "Samsung S23 Ultra Gold",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'Samsung-s23-ultra-gold.jpg',
    samsung: true,
    apple: false,
},
{
    id:12,
    name: "Samsung S23 Black",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'Samsung-s23-black.jpg',
    samsung: true,
    apple: false,
},
{
    id:13,
    name: "Samsung S23 Gold",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'Samsung-s23.jpg',
    samsung: true,
    apple: false,
},
{
    id:14,
    name: "Iphone 11 Black",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'iphone-11-black.jpg',
    samsung: false,
    apple: true,
},
{
    id:15,
    name: "Iphone 11 Red",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'iphone-11-red.jpg',
    samsung: false,
    apple: true,
},
{
    id:15,
    name: "Iphone 11 white",
    mark: "Samsung",
    price: 4000,
    nameFileImage: 'iphone-11-white.jpg',
    samsung: false,
    apple: true,
}

 ];

 //run intens in my list and add to page
 for ( const productCatalog of catalog ) {
    const cardProduct = ` <div class="border-solid border-2 border-sky-500 w-52 m-2" id="card-product-${productCatalog.id}">
    <img 
    src="assets/img/${productCatalog.nameFileImage}" 
    alt="Product 1 ecommerc"
    style="height: 300px;"
    />
    <p class="mark>${productCatalog.mark}</p>
    <P class="name>${productCatalog.name}</P>
    <pclass="price">$${productCatalog.price}</p>
    <button>Adicionar</button>
    </div>`;
    
    document.getElementById("container-product").innerHTML += cardProduct;
 }

//input itens in field scrolls through the array and collects item 4
