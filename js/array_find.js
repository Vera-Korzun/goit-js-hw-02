'use strict'
let users = ['Vova', 'Sara', 'Mike', 'Bob', 'Lena'];

function arrayFind(myArray, name) {
    let arrayLen = myArray.length;
    for (let i = 0; i < arrayLen; i += 1) {
        //console.log(myArray[i]);
        if (myArray[i]===name) {
            console.log('Found')
            return true;
        }
    }
    
    console.log('not found')
    return false;
}
arrayFind (users,'vera')
    
   

// let arrayLength = users.length;
// for (let i = 0; i < arrayLength; i += 1) {
//     console.log(users[i]);
// }