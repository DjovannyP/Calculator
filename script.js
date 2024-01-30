
//all numbers(0 to 9), equal, dot and the clear button include
const numbers = document.querySelectorAll('.number');


//Operators: "+", "-", "*", "/"
const operators = document.querySelectorAll('.operator')
//display
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');

//tracking values 
let previousValue = '';
let currentValue = '' 
let operator = ''

//grab numbers and others elements like "=", "clear"
for (let number of numbers) {
    const value = number.value;
    number.addEventListener('click', () => {
        switch (value) {
            case 'clear':
                clear();
                break;
            case '.':
                addDecimal();
                break;
            case '=':
               const result = operate(operator, previousValue, currentValue);
                currentDisplay.innerHTML = roundNumber(result);
                break;
            default:
                if (currentValue.length < 5) {
                    currentValue += value;
                currentDisplay.innerHTML += value;
                }
                
        }
    })
}

//grab operators

for (let element of operators) {
    const symbol = element.value;
    element.addEventListener('click', () => {
        operator = symbol;
        previousValue += currentValue;
        currentValue = '';
        previousDisplay.innerHTML = `${previousValue} ${symbol}`;
        currentDisplay.innerHTML = currentValue;
    })
}


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

function operate(operator,  previousValue,  currentValue) {

    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    switch (operator) {
        case '+':
            return add(previousValue,  currentValue);
        case '-':
            return subs(previousValue,  currentValue);
        case '*':
            return multiply(previousValue,  currentValue);
        case '/':
            return divide(previousValue,  currentValue);
        default:
            return '';
    }
}


const roundNumber = number => Math.round(number * 1000) / 1000;

//clear everything
const clear = () => {
    currentValue = '';
    previousValue = '';
    operator = '';
    previousDisplay.innerHTML = '';
    currentDisplay.innerHTML = '';
}
 
//decimal function
const addDecimal = () => {
    if (!currentValue.includes(".")) {
        if (currentValue === '' || currentValue === '0' || operator !== '') {
            currentValue = '0.';
        } else {
            currentValue += '.';
        }
        currentDisplay.innerHTML = currentValue;
    }
}
