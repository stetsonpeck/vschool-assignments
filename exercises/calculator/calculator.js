function addFun() {
    var fnumber = parseInt(document.getElementById("fbox").value);
    var lnumber = parseInt(document.getElementById("lbox").value);
    console.log(fnumber + lnumber);
    document.getElementById("addAnswer").innerHTML = fnumber + lnumber;
}

function minFun() {
    var fnumber = parseInt(document.getElementById("fbox").value)
    var lnumber = parseInt(document.getElementById("lbox").value)
    console.log(fnumber - lnumber)
}

function multFun() {
    var fnumber = parseInt(document.getElementById("fbox").value)
    var lnumber = parseInt(document.getElementById("lbox").value)
    console.log(fnumber * lnumber)
}