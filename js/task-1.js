"use strict";
/*---------------------for BOT---------------------------*/
const getItemsString = function (array) {
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1}${" - "}${array[i]}\n`;
  }
  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong

*/

console.log(getItemsString([5, 10, 15]));
/*
1 - 5
2 - 10
3 - 15
*/

/*---------------------for schoology---------------------------*/
const logItems = function (array) {
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1}${" - "}${array[i]}\n`;
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));

// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for
