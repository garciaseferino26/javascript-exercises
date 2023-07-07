const palindromes = function (word) {
    let newStr = word.replace(/\W/g, '').toLowerCase();
    let revStr = '';

    for (let i = newStr.length - 1; i >= 0; i--) {
        revStr += newStr[i];
    }

    return newStr === revStr;

};

// Do not edit below this line
module.exports = palindromes;
