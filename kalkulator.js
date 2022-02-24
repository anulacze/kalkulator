let number1 = '';
let number2 = '';
let sign = '';
let result;
let numberButtons = document.getElementsByClassName('number-button');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        if (sign === '=') {
            number1 = '';
            number2 = '';
            sign = '';
        }
        if (sign) {
            number2 += numberButtons[i].textContent;
            displayNumber(number2);
        } else {
            number1 += numberButtons[i].textContent;
            displayNumber(number1);
        }
    })
}

function displaySign (signToDisplay) {
    document.getElementById('sign-display').textContent = signToDisplay;
}
function displayNumber (numberToDisplay) {
    document.getElementById('number-display').textContent = numberToDisplay;
}
function whenMoreSigns () {
    if (sign) {
        getResult();
        number1 = result;
        number2 = '';
    }
}
const dot = document.getElementById('dot-button');
dot.addEventListener('click', function () {
    if (sign) {
        if (number2.includes('.')) {
            return;
        }
        number2 = number2 + '.';
        displayNumber(number2);
    } else {
        if (number1.includes('.')) {
            return;
        }
        number1 = number1 + '.';
        displayNumber(number1);
    }
});
const plus = document.getElementById('plus-button');
plus.addEventListener('click', function () {
    whenMoreSigns();
    sign = '+';
    displaySign(sign);
});
const minus = document.getElementById('minus-button');
minus.addEventListener('click', function () {
    whenMoreSigns();
    sign = '-';
    displaySign(sign);
});
const multiply = document.getElementById('multiply-button');
multiply.addEventListener('click', function () {
    whenMoreSigns();
    sign = '*';
    displaySign(sign);
});
const divide = document.getElementById('divide-button');
divide.addEventListener('click', function () {
    whenMoreSigns();
    sign = '/';
    displaySign(sign);
});
const equals = document.getElementById('equals-button');
equals.addEventListener('click', function () {
    getResult();
    sign = '=';
    displaySign(sign);
});
const AC = document.getElementById('AC-button');
AC.addEventListener('click', function () {
    number1 = '';
    number2 = '';
    sign = '';
    displayNumber();
    displaySign();
});

const DEL = document.getElementById('DEL-button');
DEL.addEventListener('click', function () {
    if (sign === '=') {
        return;
    }
    if (!number2 && sign) {
        sign = '';
        displaySign(sign);
        return;
    }
    if (sign) {
        number2 = number2.substring(0, number2.length - 1);
        displayNumber(number2);
    } else {
        number1 = number1.substring(0, number1.length - 1);
        displayNumber(number1);
    }
   
});

function getResult () {
    switch (sign) {
        case '+':
            const num1 = Number(number1);
            const num2 = Number(number2)
            result = num1 + num2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    displayNumber(result);
}

