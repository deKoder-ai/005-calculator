// calculator project

// constants
const display = document.querySelector('#display_text');
const btnsContainer = document.querySelector('#btns_container');

// variables
let displayText = ''
let a = null;
let b = null;

// functions
function decimalBtn() {
    if (displayText === '') {
        buildDisplayText('0.');
        display.textContent = displayText;
    } else if (!displayText.includes('.')) {
        buildDisplayText('.');
        display.textContent = displayText;
    }
}
function zeroBtn () {
    if (displayText) {
        buildDisplayText('0');
        display.textContent = displayText;
    } 
}
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
    if (a === 0 || b === 0) {
        return 'Infinity';
    } else {
        return a / b;
    }
}
function buildDisplayText(input) {
    displayText = displayText + input;
    return displayText;
}
function clear() {
    displayText = '';
    a = null;
    b = null;
    splitter = [];
    display.textContent = displayText;
    return displayText;
};
function invertBtn() {
    if (!displayText.includes('-')) {
        displayText = '-' + displayText;
        display.textContent = displayText;
    } else {
        displayText = displayText.substring(1);
        display.textContent = displayText;
    }
}
function funcSelect(x, y, func) {
    let result = null;
    if (func === '+') {
        result = add(x, y);
    } else if (func === '-') {
        result = subtract(x,y);
    } else if (func === '*') {
        result = multiply(x,y);
    } else if (func === '/') {
        result = divide(x,y);
    }
    return result;
}
function equals() {
    let split = displayText.split(' ');
    let x = Number(split[0]);
    let y = Number(split[2]);
    let func = split[1];
    console.log(func);
    let result = funcSelect(x, y, func);
    
    // round result
    // result = result.toFixed(20);
    resultString = String(result);
    resultStringLen = resultString.length;
    maxRound = Math.min(11, resultStringLen);
    // resultString = resultString.substring(0, maxRound);
    // result = Number(resultString);

    result = Math.round(result * maxRound) / maxRound;

    displayText = String(result);
    display.textContent = displayText;
    a = result;
    b = null;
}
function operatorBtn(operator) {
    operator = ` ${operator} `;
    let split = displayText.split(' ');
    console.log(split);
    // if (displayText === '' || split.length === 2) {
        // console.log('aaa');
    if (a === null) {
        // console.log('bbb');
        a = Number(displayText);
        buildDisplayText(operator);
        display.textContent = displayText;
    } else if (split.length === 1) {
        // console.log('ccc');
        buildDisplayText(operator);
        display.textContent = displayText;
    } else if (split.length === 3) {
        // console.log('ddd');
        equals();
        buildDisplayText(operator);
        display.textContent = displayText;
    }
}

btnsContainer.addEventListener('click', (event) => {
    let target = event.target;
    // let msg = document.querySelector('#message');
    switch (target.id) {
        case 'btn_0':
            zeroBtn();
            break;
        case 'btn_decimal':
            decimalBtn();
            break;
        case 'btn_1':
            buildDisplayText('1');
            display.textContent = displayText;
            break;
        case 'btn_2':
            buildDisplayText('2');
            display.textContent = displayText;
            break;
        case 'btn_3':
            buildDisplayText('3');
            display.textContent = displayText;
            break;
        case 'btn_4':
            buildDisplayText('4');
            display.textContent = displayText;
            break;
        case 'btn_5':
            buildDisplayText('5');
            display.textContent = displayText;
            break;
        case 'btn_6':
            buildDisplayText('6');
            display.textContent = displayText;
            break;
        case 'btn_7':
            buildDisplayText('7');
            display.textContent = displayText;
            break;
        case 'btn_8':
            buildDisplayText('8');
            display.textContent = displayText;
            break;
        case 'btn_9':
            buildDisplayText('9');
            display.textContent = displayText;
            break;
        case 'btn_clear':
            clear();
            display.textContent = displayText;
            break;
        case 'btn_invert':
        invertBtn();
            break;
        case 'btn_equals':
            equals();
            break;
        case 'btn_add':
            operatorBtn('+');
            break;
        case 'btn_minus':
            operatorBtn('-');
            break;
        case 'btn_multiply':
            operatorBtn('*');
            break;
        case 'btn_divide':
            operatorBtn('/');
            break;
    }
});
console.log(displayText);


// to do
// - prevent user from inputting 
//  more digits after an equals operation
// - round numbers to a total number of digits
// - change % button to delete last input button
// - fix invert bug


// changed
