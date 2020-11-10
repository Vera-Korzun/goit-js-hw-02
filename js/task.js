'use strict'
const sum = function (number_1, number_2) {
    console.log(number_1 + number_2);
}
//sum(14,7)

const div = function (number_1, number_2) {
    console.log(number_1 / number_2);
}
//div(14, 7)

const mult = function (a, b) {
    console.log(a * b);
}
//mult(100, 5)

const sub = function (num1, num2) {
    console.log(num1-num2);
}
//sub(10, 2)

//   +,*,-,/
const calc = function (number_1, number_2, operator) {
    if (operator === '+') {
        sum(number_1, number_2);
    } else if (operator === '*') {
        mult(number_1, number_2);
    } else if (operator === '-') {
        sub(number_1, number_2);
    } else if (operator === '/' && number_2 !== 0) {
        div(number_1, number_2);
    } else { console.log('Division by zero') }
}

calc(13,7,'+')
calc(5,6,'*')
calc(20, 13, '-')
calc(30, 6, '/')