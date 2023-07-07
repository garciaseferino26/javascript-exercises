const fibonacci = function(number) {
    let fibArr = [1,1,2];

    if (number < 3 && number >= 0) {
        return fibArr[number -1];
    }
    if (number < 0) {
        return "OOPS"
    }
    if (isNaN(number)) {
        let newNumb = parseInt(number)
        return fibonacci(newNumb);
    }

    var fibArrLen = fibArr.length;

    while (fibArrLen < number) {
        fibArr.push(fibArr[fibArrLen - 1] + fibArr[fibArrLen - 2]);
        fibArrLen += 1;
    }

    return fibArr[number-1];


};

// Do not edit below this line
module.exports = fibonacci;
