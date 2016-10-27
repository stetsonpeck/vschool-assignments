function findUniques(a, b) {
    var args = Array.from(arguments);
    var uniques = [];
    var index;
    args.forEach(function (array) {
        array.forEach(function (item) {
            index = uniques.indexOf(item);
            if (index === -1) {
                uniques.push(item);
            } else {
                uniques.splice(index, 1);
            }
        })
    })
    return uniques;
}

console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));