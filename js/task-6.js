'use strict';
/*---------------------for BOT---------------------------*/
function mapArray(array) {
  const numbers = new Array(array.length);
  for(let i = 0; i < array.length; i += 1) {
    // Write code under this line
      numbers[i] = array[i] * 10;
      }
    return numbers;
}


console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]



// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. 
//Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, 
//пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, 
//необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//Используй цикл for или for...of.После чего в консоль выведи строку 
//'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный 
//набор символов, не обязательно.Если хочешь, в случае некорректного ввода, 
//показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
//при этом результат prompt записывать в массив чисел не нужно, 
//после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

/*---------------------for schoology---------------------------*/
// let input;
// let total = 0;
// const numers = [];

// do {
//     input = +prompt("Enter number");
//     if (isFinite(input)) {
//         total += input;
        
//     } else {
//         alert('Было введено не число, попробуйте еще раз');
//     }
// } while (input !== 0);
// alert('Общая сумма чисел равна'  +  '  ' + (total));

// //while (input !== '') {
//  //}
// console.log(total);