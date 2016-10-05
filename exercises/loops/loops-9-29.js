var readline = require("readline-sync");
var name = readline.question("What is your name?");
var char = readline.question("Type a character: ");
var foundChar = false;
var indexOfChar;
console.log(name);

for (var i = 0; i < name.length; i++) {
    console.log(name[i])
    if (name[i] === char) {
        foundChar = true;
        indexOfChar = i;
        break;
    }
}

if (foundChar === true) {
    console.log(indexOfChar)
} else {
    console.log("Character not found");
}