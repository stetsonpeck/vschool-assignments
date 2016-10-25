function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

camelize("stetson is cool");
camelize("Equipment-className");
camelize("equipment class name");
camelize("Equipment Class Name");

function camelCase(string) {
    var isDashSeparated = string.indexOf("-") > -1;
    var isSpaceSeparated = string.indexOf(" ") > -1;
    var isUnderscoreSeparated = string.indexOf("_") > -1;

    if (isDashSeparated) {
        var wordArray = string.split("-");
    } else if (isSpaceSeparated) {
        var wordArray = string.split(" ");
    } else if (isUnderscoreSeparated) {
        var wordArray = string.split("_");
    }

    var camelString = wordArray[0];

    for (var i = 1; i < wordArray.length; i++) {
        var word = wordArray[i].toLowerCase();
        camelString += word.substring(0, 1).toUpperCase() + word.substring(1);
    }
    return camelString;
}

//["this", "is", "dash", "separated".substring(2,4)];

console.log(camelCase("this-iS-dAsh-SEParAted"));
console.log(camelCase("this_is_underscore_separated"));
console.log(camelCase("this is space separated"));