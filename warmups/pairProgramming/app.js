var myArray = [7, 9, 11, 13, 15]

function pairWise(arr, arg) {

    var num = [];

    for (var i = 0; i <= arr.length; i++) {
        for (var j = 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] === arg && arr[i] < arr[j]) {
                console.log(i, j)
                num.push(i + j)
            }
        }
    }
    console.log(num.reduce(function (total, num) {
        return total + num
    }));
}

pairWise([7, 9, 11, 13, 15], 20);