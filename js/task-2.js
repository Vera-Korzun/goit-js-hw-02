"use strict";
/*const calculateEngravingPrice = (message = "", pricePerWord = 0) => engravingPrice ; // Write code in this line
const message = 'Proin sociis natoque et magnis parturient montes mus';
const pricePerWord = 10;
console.log(message.split(' '));
console.log(message.split(' ').length);
let engravingPrice = message.split(' ').length * pricePerWord;
console.log(engravingPrice);

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100*/

/*---------------------for BOT---------------------------*/
/*const calculateEngravingPrice = function(message = "", pricePerWord = 0) {
return message.split(' ').length * pricePerWord}; // Write code in this line

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100/´*/

/*---------------------for schoology---------------------------*/
const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.
