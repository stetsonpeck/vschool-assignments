var arrA = [1, 2, 3, 7, 9, “Belly”, 20]
var arrB = [2, 3, 4, 8, 10, “jelly”]


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

console.log(findUniques(, ));