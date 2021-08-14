'use strict';

// nodes 
const output = document.querySelector('#output');

const digits = document.getElementsByClassName('digits');

const digitOne = document.querySelector('#one-btn');
const digitTwo = document.querySelector('#two-btn');

const clear = document.querySelector('#clear-btn');

let value = 0;
let a = 0;
let b = 0;
let operator = '+';


for (let i = 0; i < digits.length; i++) {
    // loop creates listeners on every digit
    digits[i].addEventListener('click', (e) => {
        value = e.target.value;
        output.innerHTML += value;
    });
}

// eventListeners
clear.addEventListener('click', (e) => {
    output.innerHTML = '';
});
/* digitOne.addEventListener('click', (e) => {
    value = e.target.value;
    output.innerHTML += value;
});
digitTwo.addEventListener('click', (e) => {
    value = e.target.value;
    output.innerHTML += value;
}); */

// when operator button pushed
// save displayed value to variable (a)
// if operator displayed, save operator to variable (operator)
// repeat for (b) variable when enter or '=' is pressed, 
// then call operate function to evaluate and display results

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