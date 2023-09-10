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