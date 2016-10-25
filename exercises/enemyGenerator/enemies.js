var enemies = [];

function get

function chooseEnemyType() {
    var enemyTypes = ["Mighty Grunt", "Prowler", "Ancient Dragon"];
    var random = Math.floor(Math.random() * 3);
    return enemyTypes[random];
}

function determinHitPoints(enemyType) {
    if (enemyType === "Mighty Grunt") {
        return getRandomInt(20, 49);
    } else if (enemyType === "Prowler") {
        return getRandomInt(50, 79);
    } else if (enemyType === "Ancient Dragon") {
        return getRandomInt(80, 100);
    }
}



function Enemy() {
    this.type = chooseEnemyType();
    this.hp = determinHitPoints(this.type);
    this.defense = this.hp * 3;
}

for (var i = 0; i < 100; i++) {
    enemies.push(new Enemy());
}