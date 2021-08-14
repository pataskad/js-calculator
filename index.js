'use strict';

// nodes 
const output = document.querySelector('#output');
const digits = document.getElementsByClassName('digits');
const clear = document.querySelector('#clear-btn');
const operators = document.getElementsByClassName('operators');


// evaluation global variables
let value = 0;
let a = 0;
let b = 0;
let operator = '';

for (let i = 0; i < digits.length; i++) {
    // digit event listener loop
    digits[i].addEventListener('click', (e) => {
        // if/else => operator present => clear display when digit clicked
        // When 'entered' save that current displayed value to (b) variable
        // run operate function with set variables
        output.innerHTML += e.target.value;
        value = output.innerHTML;
    });
}
for (let y = 0; y < operators.length; y++) {
    // operator event listener loop
    operators[y].addEventListener('click', (e) => {
        a = value;
        value = 0;
        output.innerHTML = '';
        output.innerHTML = e.target.value;
        operator = e.target.value;
    });
}

// eventListeners
clear.addEventListener('click', clearValues);

// when operator button pushed
// save displayed value to variable (a)
// when operator displayed, save choice to operator variable
// clear operator choice on next digit selection
// repeat for (b) variable when enter or '=' is pressed, save digit value to (b)
// then call operate function to evaluate and display results

// helper functions
function clearValues() {
    output.innerHTML = '';
    operator = '';
    a = 0;
    b = 0;
    value = 0;
}
// arithmetic functions
function add(a, b) {
    return a + b;
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
    // set a and b equal to numbers entered
    // set operator to operator entered
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