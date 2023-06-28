const sumAll = function(a, b) {
    let ans = 0;

    if ((!Number.isInteger(a)) || !Number.isInteger(b)) {
        return "ERROR";
    } else if (a <=0 || b <=0) {
        return "ERROR";
    }

    let smallN = Math.min(a,b);
    let bigN = Math.max(a,b);

    for (i = smallN; i <= bigN; i++) {
        ans += i;
    }

    return ans

}; 

// Do not edit below this line
module.exports = sumAll;
