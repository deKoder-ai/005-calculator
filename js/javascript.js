// calculator project

// constants
const display = document.querySelector('#display_text');
const btnsContainer = document.querySelector('#btns_container');

// variables
let displayText = ''

// functions
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
function buildDisplayText(input) {
    displayText = displayText + input;
    return displayText;
}
function clearDisplayText() {
    displayText = '';
    return displayText;
};

btnsContainer.addEventListener('click', (event) => {
    let target = event.target;
    // let msg = document.querySelector('#message');
    switch (target.id) {
        case 'btn_0':
            if (displayText) {
                buildDisplayText('0');
                display.textContent = displayText;
                break;
            } else {
                break;
            }
        case 'btn_decimal':
            if (displayText === '') {
                buildDisplayText('0.');
                display.textContent = displayText;
                break;
            } else if (!displayText.includes('.')) {
                buildDisplayText('.');
                display.textContent = displayText;
                break;
            } else {
                break;
            }
        case 'btn_invert':
            if (!displayText.includes('-')) {
                displayText = '-' + displayText;
                display.textContent = displayText;
                break;
            } else {
                displayText = displayText.substring(1);
                display.textContent = displayText;
                break;
            }
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
            clearDisplayText();
            display.textContent = displayText;
        // default:
        //     console.log('Error::');
    }
});
console.log(displayText);



// changed
// - create functions for +, -, *, /
// - create function to build display string
// - create event listener to check for button clicks
// - create logic to return button number value and add to display string
// - create logic to prevent 0 being the first character
// - create logic to add maximum one decimal place
// - create logic to invert sign of string