console.log("=====HomeWork=====")

let phones = +prompt("Enter number of phones: ");
let price = +prompt("Enter average price of Phones: ")
let tax = 5/100 * price;
let finalPrice = price+tax; 

console.log("Price per phone calculated with 5% TAX: "+ finalPrice+"$");

console.log("=====================================================");

console.log("Price for all phones: "+ finalPrice*phones +"$");

console.log("=====================================================");
