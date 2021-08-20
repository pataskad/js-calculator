'use strict';

// nodes 
const output = document.querySelector('#output');
const currentValues = document.querySelector('#currentVals');
const digits = document.getElementsByClassName('digits');
const clear = document.querySelector('#clear-btn');
const operators = document.getElementsByClassName('operators');
const enter = document.querySelector('#enter-btn');
const decimal = document.querySelector('#decimal');

// evaluation global variables
let value = 0;
let a = 0;
let b = 0;
let operator = '';
let result = 0;
let decimalAllowed = true;
let operatorAllowed = true;

// helper functions
function evaluate() {
    b = value;
    if (isNaN(output.textContent)) {
        output.textContent = 'Error';
    }   else if (operator === '/' && b == 0) {
        output.textContent = 'Not so fast buckshot!';
    }   else if (output.textContent) {
        result = operate(a, b, operator);
        output.textContent = +(result.toFixed(2));
    }  
    displayCurrentValues(); 
    currentValues.textContent += ' =';
}
function clearValues() {
    currentValues.textContent = '';
    output.textContent = '';
    operator = '';
    a = 0;
    b = 0;
    value = 0;
    result = 0;
    decimalAllowed = true;
    operatorAllowed = true;
}
function operatorPresent(e) {
    b = value;
    result = operate(a, b, operator);
    a = result;
    operator = e.target.value;
    output.textContent = +(result.toFixed(2)) + operator;
}
function operatorNotSetDisplayIsNumber(e) {
    a = value;
    value = 0;
    operator = e.target.value;
    output.textContent = '';
    output.textContent = operator;
}
function decimalDisplay(e) {
    if (isNaN(output.textContent)) {
        b = value;
        output.textContent = '';
        output.textContent += e.target.value;
    }  else if (decimalAllowed === true && operator !== '') {
        output.textContent += e.target.value;
    }  else if (decimalAllowed === true) {
        output.textContent += e.target.value;
        decimalAllowed = false;
    }
    value = output.textContent;  
}
function displayCurrentValues() {
    currentValues.textContent = a + ' ' + operator + ' ' + b;
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

for (let i = 0; i < digits.length; i++) { // digit event listener loop
    digits[i].addEventListener('click', (e) => {
        if (operator !== '' && !isNaN(output.textContent)) {
            output.textContent += e.target.value;
        }  else if (operator !== '' && output.textContent == '.') {
            output.textContent += e.target.value;
            displayCurrentValues();
        }  else if (operator !== '') {
            b = value;
            output.textContent = '';
            output.textContent += e.target.value;
            displayCurrentValues();
        }  else {
            output.textContent += e.target.value;
        }
        value = output.textContent;
        operatorAllowed = true;
    });
}
for (let y = 0; y < operators.length; y++) { // operator event listener loop
    operators[y].addEventListener('click', (e) => {
        if (operatorAllowed === true && operator !== '') {
            operatorPresent(e);
        } else if (operatorAllowed === true && !isNaN(output.textContent) && output.textContent !== '') {
            operatorNotSetDisplayIsNumber(e);
        }
        displayCurrentValues();
        operatorAllowed = false;
        decimalAllowed = true;
    });
}

// eventListeners
clear.addEventListener('click', clearValues);
enter.addEventListener('click', evaluate);
decimal.addEventListener('click', decimalDisplay);