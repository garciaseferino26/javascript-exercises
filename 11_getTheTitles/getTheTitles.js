const getTheTitles = function(array) {
    let lenArr = array.length;
    let bookTitles = [];

    for (i = 0; i < lenArr; i++) {
        bookTitles.push(array[i].title)
    }
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
