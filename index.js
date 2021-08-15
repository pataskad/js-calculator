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

for (let i = 0; i < digits.length; i++) {
    // digit event listener loop
    digits[i].addEventListener('click', (e) => {
        if (output.textContent === '-' || output.textContent === '+' || output.textContent === '*' || output.textContent === '/') {
            output.textContent = '';
            output.textContent += e.target.value;
        } else if (result = output.textContent) {
            output.textContent = '';
            output.textContent = e.target.value;
            b = value;
        } else {
            output.textContent += e.target.value;
        }
        value = output.textContent;
    });
}
for (let y = 0; y < operators.length; y++) {
    // operator event listener loop
    operators[y].addEventListener('click', (e) => {
        if (operator !== '') {
            b = value;
            value = 0;
            result = operate(a, b, operator);
            output.textContent = result + e.target.value;
            a = result;
            operator = e.target.value;
         } else if (!isNaN(output.textContent) && output.textContent !== '') { // if var is number and not empty
            a = value;
            value = 0;
            output.textContent = '';
            output.textContent = e.target.value;
            operator = e.target.value;
        }
    });
}

// eventListeners
clear.addEventListener('click', clearValues);
enter.addEventListener('click', evaluate);

// helper functions
function evaluate() {
    // if dividing by zero (0), return error message
    if (output.textContent) {
        b = value;
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