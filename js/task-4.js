"use strict";
/*---------------------for BOT---------------------------*/
function formatString(string, maxLength = 40) {
  // Write code under this line
  let strSize = string.length;
  let resultStr = "";

  //console.log(strSize);

  if (strSize <= maxLength) {
    resultStr = string;

    // console.log(resultStr);
  } else {
    resultStr = string.slice(0, maxLength) + "...";
    //console.log(resultStr);
  }

  return resultStr;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'

console.log(
  "/*---------------------for schoology---------------------------*/"
);

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
