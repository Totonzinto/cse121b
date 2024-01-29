/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
   return number1 + number2;

}
function addNumbers() {
    const num1 = parseInt(document.getElementById("add1").value);
    const num2 = parseInt(document.getElementById("add2").value);
    const sum = add(num1, num2);
    const sumField = document.getElementById('sum');
    sumField.value = sum;
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const SubtractNumbers = function(number1, number2){
return number1 - number2;
}
const subtractNumbers = function subtractNumbers() {
    const subtract1 = parseInt(document.getElementById("subtract1").value);
    const subtract2 = parseInt(document.getElementById("subtract2").value);
    let difference = SubtractNumbers(subtract1, subtract2);

    document.getElementById("difference").value = difference;
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    const factor1 = parseInt(document.getElementById("factor1").value);
    const factor2 = parseInt(document.getElementById("factor2").value);
    let product = multiply(factor1, factor2);
    document.getElementById("product").value = product;
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    const dividend = parseInt(document.getElementById("dividend").value);
    const divisor  = parseInt(document.getElementById("divisor").value);
    let quotient   = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let memberCheck = document.getElementById('member');
 function newTotal(){
    let subtotal = Number(document.getElementById('subtotal').value);
    if (memberCheck.checked){
        document.getElementById('total').innerHTML = (subtotal * 0.8).toFixed(2);
    }else{
        document.getElementById('total').innerHTML = subtotal.toFixed(2);
    }
}

document.getElementById('getTotal').addEventListener('click',
memberCheck.addEventListener('change',newTotal));
 

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbers;
/* Output Odds Only Array */
const Odds = numbers.filter(oddNumbers);
document.getElementById("odds").innerHTML = Odds;
function oddNumbers(value) {
    return value % 2;
}
/* Output Evens Only Array */
const Evens = numbers.filter(evenNumbers);
document.getElementById("evens").innerHTML = Evens;
function evenNumbers(value) {
    return value % 2 === 0;
}
/* Output Sum of Org. Array */
const sum = numbers.reduce(sumOfArray);
document.getElementById("sumOfArray").innerHTML = sum;
function sumOfArray(total, value) {
    return total + value;
}
/* Output Multiplied by 2 Array */
const product = numbers.map(multiplied);
document.getElementById("multiplied").innerHTML = product;
function multiplied(value) {
    return value * 2
}
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);