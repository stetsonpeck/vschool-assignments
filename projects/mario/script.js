function gAdd() {
    var gNumber = parseInt(document.getElementById("gBox").value);
    console.log(gNumber * 5);
    document.getElementById("addAnswerG").innerHTML = gNumber * 5;
}

function bAdd() {
    var bNumber = parseInt(document.getElementById("bBox").value);
    console.log(bNumber * 7);
    document.getElementById("addAnswerB").innerHTML = bNumber * 7;
}

function cAdd() {
    var cNumber = parseInt(document.getElementById("cBox").value);
    console.log(cNumber * 11);
    document.getElementById("addAnswerC").innerHTML = cNumber * 11;
}

function tAdd() {
    var gNum = parseInt(document.getElementById("addAnswerG").innerHTML);
    var bNum = parseInt(document.getElementById("addAnswerB").innerHTML);
    var cNum = parseInt(document.getElementById("addAnswerC").innerHTML);
    document.getElementById("addAnswerT").innerHTML = gNum + bNum + cNum;
}