function add() {
    var name = document.getElementById("name").value;
    var game = document.getElementById("game").value;
    var date = document.getElementById("date").value;
    var score = document.getElementById("score").value;
    var newRow = "<tr>" + "<td>" + name + "</td>" + "<td>" + game + "</td>" + "<td>" + date + "</td>" + "<td>" + score + "</td>" + "</tr>";
    document.getElementById("body").innerHTML += newRow;
}