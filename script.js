
const container = document.querySelector('.container');
    let number1 = 0;
let number2 = 0;
let operator = '';

function add(a, b) {
    return a + b;
    
}
function subs(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {

    return a / b; 
}

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subs(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
        default:
            return '';
    }
}


for(let i = 0; i < 4; i++){
    
}
