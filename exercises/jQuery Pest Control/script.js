function gAdd() {
    $("#ding").get(0).play();
    var gNumber = parseInt($("#gBox").val());
    console.log(gNumber * 5);
    $("#addAnswerG").html(gNumber * 5);
}

function bAdd() {
    $("#ding").get(0).play();
    var bNumber = parseInt($("#bBox").val());
    console.log(bNumber * 7);
    $("#addAnswerB").html(bNumber * 7);
}

function cAdd() {
    $("#ding").get(0).play();
    var cNumber = parseInt($("#cBox").val());
    console.log(cNumber * 11);
    $("#addAnswerC").html(cNumber * 11);
}

function tAdd() {
    $("#ding").get(0).play();
    var gNum = parseInt($("#addAnswerG").html());
    var bNum = parseInt($("#addAnswerB").html());
    var cNum = parseInt($("#addAnswerC").html());
    $("#addAnswerT").html(gNum + bNum + cNum);
}

function nightMode() {
    this.style.backgroundImage = "url(blackMario.png)";
}