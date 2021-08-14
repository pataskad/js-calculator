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

for (let i = 0; i < digits.length; i++) {
    // digit event listener loop
    digits[i].addEventListener('click', (e) => {
        if (output.innerHTML === '-' || output.innerHTML === '+' || output.innerHTML === '*' || output.innerHTML === '/') {
            output.innerHTML = '';
            output.innerHTML += e.target.value;
        } else {
            output.innerHTML += e.target.value;
        }
        value = output.innerHTML;
    });
}
for (let y = 0; y < operators.length; y++) {
    // operator event listener loop
    operators[y].addEventListener('click', (e) => {
        if (output.innerHTML) {
            a = value;
            value = 0;
            output.innerHTML = '';
            output.innerHTML = e.target.value;
            operator = e.target.value;
        }
    });
}

// eventListeners
clear.addEventListener('click', clearValues);
enter.addEventListener('click', evaluate);

// helper functions
function evaluate() {
    if (output.innerHTML) {
        // add values to result and return result?
        b = value;
        value = 0; // keep? Likely must remove for additional calc options
        const result = operate(a, b, operator);
        output.innerHTML = result;
        /* clearValues(); */
    }
}
function clearValues() {
    output.innerHTML = '';
    operator = '';
    a = 0;
    b = 0;
    value = 0;
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