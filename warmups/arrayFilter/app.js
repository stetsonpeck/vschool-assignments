var myArray = [11, 2, 33, 4, 51, 6, 7, 5, 41, 3, 2, 1, 6, 73, 80, 533, 8];
Array.prototype.myNumFilter = function (callback, largestNum) {
    var array = this;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= largestNum) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
var myAnswer = myArray.myNumFilter(function (element) {
    return element <= largestNum;
}, 10);
console.log(myAnswer);
var letterArray = ['s', 'b', 'c', 'd', 'e', 'f', 'a', 'ss', 's', 'c', 'b', 'd', 'a'];
Array.prototype.myLetterFilter = function (callback, letter) {
    var array = this;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === letter) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
var myLetterAnswer = letterArray.myLetterFilter(function (element) {
    return element === letter;
}, "s");
console.log(myLetterAnswer);