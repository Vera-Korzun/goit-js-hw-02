// let age = 30;
// const users = ["Vera", "Vova", "Roma"];
// // console.log("Users", users);
// // console.log("Age", age);


// const debug = function (data, message="") {
//     console.log(message, data);
// }

// debug('Массив пользователей', users)
// debug('Первый возраст', age)
// debug(age)

// const favorite = "the road will be mastered be the walking";
// console.log(favorite.length);
// const findLongestWord = function (string) {
//     let words = string.split(" ");
//     let length = words.length;
//     let longestWord = words[0];
//     for (let i = 0; i < length; i += 1){
//         //console.log(words[i]);
//         if (longestWord.length < words[i].length) {
//             longestWord=words[i]
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord(favorite));
// ;

// //abcdefghijklmnopqrstuvwxyz
// const alfebet = 26;
// const string = "abcdefghijklmnopqrstuvwxyz";
// for (let i = 0; i < 26; i += 1) {
//     const array = string.split('');
//     //console.log(array[i]);
//     let leterFirst = alfebet[i];

    
//     //console.log(i);
// }

// const getAlphabet = function () {
//     let charIndex = "a".charCodeAt(0);//из буквы получаем код
//     let alphabet = "";
//     //console.log(charIndex);
//     for (let i = 0; i < 26; i += 1) {
//         alphabet += String.fromCharCode(charIndex);
//         charIndex += 1;
//     }
//     return alphabet;
// }
// console.log(getAlphabet());


// let a = "abcdefg".charCodeAt();
// // let b = "b".charCodeAt();
// let c = "c".charCodeAt();

// // let z = "z".charCodeAt();

// console.log('A', a)
// // console.log('b', b)
// // console.log('c', c)
// // console.log('z', z)

// let a = ['Vera', 'Denis', 'Christian'];
// let b = a.slice();
// console.log('FIrst b', b);
// console.log('FIrst a',a);
// b[0] = 'key';
// a[2] = 'son';
// console.log('b with key',b);
// console.log('a with son', a);
// let c = [];
// c = c.concat(a);
// console.log('FIrst c', c);
// c[1] = 'badboy';
// console.log('a ',a);
// console.log('c with badboy', c);


