//colect item
 export const catalog = [
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

//save cart
export function saveLocalStorage (key,information){
    localStorage.setItem(key,JSON.stringify(information));
}

//listen item
export function listenLocalStorage(Chave){
      return JSON.parse(localStorage.getItem(Chave));
}