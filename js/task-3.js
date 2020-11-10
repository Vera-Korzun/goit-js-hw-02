'use strict'
/*---------------------for BOT---------------------------*/
const findLongestWord = function (string = "") {
  // Write code under this line
    let str = string.split(" ");//преобразовала в массив
    //console.log(str);
    let maxLength = 0;//переменная для сравнения длины слова
    let resultWord=''; //переменная для хранения слова из массива
    for (let i = 0; i < str.length; i += 1) {
        //console.log(str[i]);
        if (maxLength < str[i].length) {
            maxLength = str[i].length;
            resultWord = str[i];
        }
    }
    //console.log(maxLength);
    //console.log(resultWord);
    return resultWord;

}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'