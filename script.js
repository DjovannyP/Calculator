
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
let result = ''


//numbers, "=", "clear"
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
                    case 'del':
                        del();
                        break;
                    case '=':
                        if (previousValue !== '' && currentValue !== '') {
                            result = operate(operator, previousValue, currentValue);
                            currentDisplay.innerHTML = roundNumber(result).toString();
                            previousDisplay.innerHTML = `${previousValue} ${operator} ${currentValue} =`;
                            previousValue = '';
                            currentValue = roundNumber(result).toString();
                        }
                        break;
                    default:
                        if (currentValue.length < 5 && previousValue.length <= 5) {
                            currentValue += value;
                            currentDisplay.innerHTML += value;
                        }
                
                }
        })
    
}

//operators
for (let element of operators) {
    const symbol = element.value;
    element.addEventListener('click', () => {
        if (currentValue !== '') {
            if (previousValue !== '' && operator !== '') {
                // If an operator is already present, perform the calculation first
                result = operate(operator, previousValue, currentValue);
                previousValue = roundNumber(result).toString();
                previousDisplay.innerHTML = `${previousValue} ${symbol}`;
            } else {
                previousValue = currentValue;
                previousDisplay.innerHTML = `${previousValue} ${symbol}`;
            }
            operator = symbol;
            currentValue = '';
            currentDisplay.innerHTML = currentValue;
        }
    });
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

//clear
const clear = () => {
    currentValue = '';
    previousValue = '';
    operator = '';
     result = '';
    previousDisplay.innerHTML = '';
    currentDisplay.innerHTML = '';
}
 
//decimal
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
//delete
const del = () => {
    if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, -1);
        currentDisplay.innerHTML = currentValue;
    }
}