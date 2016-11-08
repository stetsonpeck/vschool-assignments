function oddOdds(numberArray) {
    var counter = 0;
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 !== 0) {
            counter++;
        }
    }
    return counter % 2 !== 0;

}

console.log(oddOdds([1, 1, 3, 4])) // 3  
console.log(oddOdds([1, 1, 3, 4, 6, 9])) // 4  
console.log(oddOdds([3, 4, 4, 8, 1, 1, 3, 4, 5, 27])) // 6