'use strict'
/*---------------------for BOT---------------------------*/
function checkForSpam(str) { 
    const stopWord1 = 'spam';
    const stopWord2 = 'sale';
    
    let words = str.toLowerCase(); //приводит к общему регистру
    
    if (words.includes(stopWord1) || words.includes(stopWord2)) {
            
        return true;
        
    }
    return false;
  
}

/*---------------------for Bot second variant---------------------------*/

function checkForSpamArr(str) { 
    const stopWords = ['spam', 'sale'];
    let words = str.toLowerCase();

    console.log(words);

    for (let stopWord of stopWords) {
        if (words.includes(stopWord)) {
            return true;
        }
    }
    return false;
}



console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/*---------------------for Bot second variant---------------------------*/

console.log(checkForSpamArr('Latest technology news')); // false

console.log(checkForSpamArr('JavaScript weekly newsletter')); // false

console.log(checkForSpamArr('Get best sale offers now!')); // true

console.log(checkForSpamArr('[SPAM] How to earn fast money?')); // true