//function that finds longest word in string



function myFunction(stringy) {
    var myArray = stringy.split(" ");
    var longest = ""
    for (i = 0; i < myArray.length; i++)
        if (myArray[i].length > longest.length)
            longest = myArray[i];
    console.log(longest)
}


myFunction("I am a cat")