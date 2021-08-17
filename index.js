'use strict';

// nodes 
const output = document.querySelector('#output');
const digits = document.getElementsByClassName('digits');
const clear = document.querySelector('#clear-btn');
const operators = document.getElementsByClassName('operators');
const enter = document.querySelector('#enter-btn');

// evaluation global variables
let value = 0;
let a = 0;
let b = 0;
let operator = '';
let result = 0;

// helper functions
function evaluate() {
    // if dividing by zero (0), return error message
    b = value;
    if (isNaN(output.textContent)) {
        output.textContent = 'Error';
    }   else if (operator === '/' && b == 0) {
        output.textContent = 'Not so fast buckshot!';
    }   else if (output.textContent) {
        /* b = value; */
        result = operate(a, b, operator);
        output.textContent = +(result.toFixed(2));
    }   
}
function clearValues() {
    output.textContent = '';
    operator = '';
    a = 0;
    b = 0;
    value = 0;
    result = 0;
}
function operatorPresent(e) {
    b = value;
    value = 0;
    result = operate(a, b, operator);
    operator = e.target.value;
    output.textContent = +(result.toFixed(2)) + operator;
    a = result;
}
function operatorNotSetDisplayIsNumber(e) {
    a = value;
    value = 0;
    operator = e.target.value;
    output.textContent = '';
    output.textContent = operator;
}
// math functions
function add(a, b) {
    return +a + +b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

for (let i = 0; i < digits.length; i++) {
    // digit event listener loop
    digits[i].addEventListener('click', (e) => {
        if (operator !== '' && !isNaN(output.textContent)) {
            output.textContent += e.target.value;
        }  else if (operator !== '') {
            b = value;
            output.textContent = '';  // this line causing problem of one digit only values
            output.textContent += e.target.value;
        }  else {
            output.textContent += e.target.value;
        }
        value = output.textContent;
    });
}
for (let y = 0; y < operators.length; y++) {
    // operator event listener loop
    operators[y].addEventListener('click', (e) => {
        if (operator !== '') {
            operatorPresent(e);
        } else if (!isNaN(output.textContent) && output.textContent !== '') {
            operatorNotSetDisplayIsNumber(e);
        }
    });
}

// eventListeners
clear.addEventListener('click', clearValues);
enter.addEventListener('click', evaluate);