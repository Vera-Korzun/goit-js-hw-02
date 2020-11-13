// ==================================================================================================================================
// TASK 1.
// -=Сделать первый символ заглавным=-
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";

// const ucFirst = function (str) {
//     // let newName = str[0].toUpperCase() + str.slice(1).toLowerCase();
//     // return newName;

//     return  str[0].toUpperCase() + str.slice(1).toLowerCase();
    
    
// }

// console.log(ucFirst("chRisTian"));

// ==================================================================================================================================
// TASK 2.
// -= Операции с массивами =-
// Давайте произведём 5 операций с массивом.
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в 
//    середине должен работать для массивов с любой длиной.
// 4. Удалите первый элемент массива и покажите его.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

//const styles = ['Джаз', 'Блюз'];
// 2. Добавьте «Рок-н-ролл» в конец.

// styles.push('Рок-н-ролл');
// console.log(styles); 

// const add = ['Рок-н-ролл'];
// const styles = ['Джаз', 'Блюз'];
// styles.push(add[0]);
// //const array = styles.concat(add);
// console.log('with "Рок-н-ролл"', styles); 
// // 3. Замените значение в середине на «Классика». Ваш код для поиска значения в 
// //    середине должен работать для массивов с любой длиной.
// let index = Math.floor(styles.length / 2);
// styles.splice(index, 1, "Классика");
// console.log('with "Классика"',styles); 
// // 4. Удалите первый элемент массива и покажите его.
// styles.shift();
// console.log('without first', styles); 
// console.log
// // 5. Вставьте «Рэп» и «Регги» в начало массива.
// styles.unshift(...remove);
// const newStyles = remoce.concat(styles);

// console.log('with "Регги"',styles); 

//--------------------------------------------------
// const remove = ['Рэп','Регги']
// const add = ['Рок-н-ролл'];

// const style = ['Джаз','Блюз'];
// //  style.push(add[0]);
// const array = style.concat(add);

// const index = Math.floor(array.length/2); 
// array.splice(index,1,"Классика")

// const removedElement = array.shift()

// // array.unshift(...remove);
// const newArray =remove.concat(array);

// console.log('newArray :>> ', newArray);

//   console.log(array);

// ==================================================================================================================================

// Task 3.
// -=Сумма введённых чисел=-
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
    let num = "";
    let sum = 0;
    const array = [];
    do {
        num = prompt("Enter numer");
        console.log(num);
        
        if (Number.isNan(Number(num)) || !num) {
                break
        };
        array.push(num);
    } while (num !== null);
    for (let i = 0; i < array.length; i += 1) {
        sum += Number(array[i]);
        
    };
    console.log(array.length[i]);
}

sumInput()