function Location() {
    this.ship = shipGenerator();
    this.hit = false;
    this.display = "+";
}

function numberGenerator() {
    return Math.floor(Math.random() * 5) + 1;
}

function shipGenerator() {
    var num = numberGenerator();
    return num === 1;
}

module.exports = Location;