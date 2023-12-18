function sum(arg1, arg2)
{
    return arg1+arg2;
}
function sub(arg1, arg2)
{
    return arg1-arg2;
}
function multiply(arg1, arg2)
{
    return arg1*arg2;
}
function divide(arg1, arg2)
{
    return arg1/arg2;
}

let num1 = +prompt("Vnesete go prviot broj:");
let num2 = +prompt("Vnesete go vtoriot broj:");

console.log("=====SUM of two numbers=====")
console.log(sum(num1, num2));
console.log("=====Sub of two numbers=====")
console.log(sub(num1, num2));
console.log("===== Multiplication of two numbers=====")
console.log(multiply(num1, num2));
console.log("=====Division of two numbers=====")
console.log(divide(num1, num2));