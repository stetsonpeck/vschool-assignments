var ask = require("readline-sync");
var Location = require("./location");
var grid = makeGrid();
var hits = 0;

function makeGrid() {
    var myGrid = [];
    for (var i = 0; i < 10; i++) {
        var line = [];
        for (var j = 0; j < 10; j++) {
            line.push(new Location());
        }
        myGrid.push(line);
    }
    return myGrid;
}

function displayGrid(grid) {
    var printGrid = "";
    for (var i = 0; i < grid.length; i++) {
        var line = "";
        for (var j = 0; j < grid.length; j++) {
            line += grid[i][j].display + "  ";
        }
        printGrid += line + "\n" + "\n";
    }
    console.log("\n" + printGrid);
}

function updateGrid(y, x, grid) {
    var currentLocation = grid[y][x];
    if (currentLocation.ship) {
        console.log("HIT!!!");
        currentLocation.display = "0";
        currentLocation.hit = true;
        hits++
    } else {
        console.log("MISSED");
        currentLocation.display = "m";
    }
    displayGrid(grid);
}

function userGuess() {
    var y = ask.question("Guess an Y coordinate: ");
    var x = ask.question("Guess a X coordinate: ");
    updateGrid(y, x, grid);
}

(function playGame() {
    displayGrid(grid);

    while (hits < 3) {
        userGuess(grid);
    }
    console.log("You won!");
})();