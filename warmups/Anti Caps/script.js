function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function isLower(letter) {
    return letter === letter.toLowerCaseCase();
}

function antiCaps(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (isCaps(str[i])) {
            newString = newString + str[i].toLowerCase();
        } else {
            newString = newString + str[i].toUpperCase();
        }
    }
    return newString
}


console.log(antiCaps('Hello'))
console.log(antiCaps('racEcar'))
console.log(antiCaps('bAnAnA'))