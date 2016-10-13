var readlineSync = require('readline-sync');

function Player(playerName, playerHealth, playerItems) {
    this.name = playerName;
    this.health = playerHealth || 200;
    this.items = playerItems || [];
    this.min = 5;
    this.max = 10;
    this.shakeOffBase = 0.2;
    this.shakeOffRatio = 0.2;
    this.attack = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
    this.hp = function () {
        return this.health + " Health";
    };
}

function Enemy(enemyObj) {
    this.name = enemyObj.name;
    this.health = enemyObj.health;
    this.min = enemyObj.min;
    this.max = enemyObj.max;
    this.intro = enemyObj.intro;
    this.attackCaption = enemyObj.attackCaption;
    this.droppedItem = enemyObj.droppedItem;
    this.attack = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
}

function Item(itemObj) {
    this.name = itemObj.name;
    this.description = itemObj.description;
    this.action = itemObj.action;
}

var items = {
    knife: {
        name: "Knife",
        description: "Shanks and used knife",
        action: "Great job"
    },
    gun: {
        name: "Gun",
        description: "Used gun",
        action: "Nice!!"
    },
    machete: {
        name: "Machete",
        description: "Watch out, somone has a Machete",
        action: "Wowzers"
    },
    booz: {
        name: "Booz",
        description: "Booz works everytime",
        action: "Hammer time"
    }
};


var enemyList = [
    {
        intro: "Ohh no zombies",
        name: "Zombies",
        health: 30,
        min: 5,
        max: 15,
        attackCaption: "Crazy Zombies ",
        droppedItem: "Knife"
    },
    {
        intro: "Ohhh SH*T its Sponge Bob",
        name: "Sponge Bob",
        health: 20,
        min: 5,
        max: 15,
        attackCaption: "I live in a pineapple under the see",
        droppedItem: "Gun"
    },
    {
        intro: "Well look who it is... Mr. Donald Trump",
        name: "Donald Trump",
        health: 30,
        min: 15,
        max: 25,
        attackCaption: "My wig can never be defeated",
        droppedItem: "Machete"

    },
    {
        intro: "No!!! The crazy lady is here!",
        name: "Hillary Clinton",
        health: 10,
        min: 5,
        max: 10,
        attackCaption: "Just like in real life, i should be in prison, but i'm not",
        droppedItem: "Booz"
    }
];


var name = readlineSync.question("Hello fine fellow! What is your name? ");


//var play = readlineSync.question("Do you wanna play a game? Press (w)to enter    ")

var player = new Player(name, 100);
var enemy = new Enemy(enemyList[0]);

console.log("Hi " + player.name + '!');

console.log("Lets get ready to rumble");

var winning = true;
var turn = 0;

while (winning && turn < 3) {
    console.log("You have " + player.hp());
    var response = readlineSync.question("Are you ready to go? walk(w) - inventory(print) - Exit (exit) ", {
        limit: ["w", "print", "exit"],
        limitMessage: "Try again!"
    });

    if (response === "w") {
        var random = Math.random();
        if (random < 0.66) {

            winning = battle();

        } else {

            console.log("You are safe");

        }
    } else if (response === "print") {

        printInventory();
        continue;

    } else {
        return;
    }
    turn++;
}

if (winning === true) {

    readlineSync.question("Good job" + player.name + "!");

} else {

    readlineSync.question("You are dead");

}

function battle() {
    var enemy = new Enemy(enemyList[Math.floor(Math.random() * 4)]);

    console.log(enemy.intro);

    while ((player.health > 0 || enemy.health > 0)) {
        console.log("You have " + player.hp());
        var response = readlineSync.question("Attack (a) inventory (print) Run (run) ", {
            limit: ["a", "print", "run"],
            limitMessage: "Try again!"
        });

        if (response === "a") {

            enemy.health -= playerAttack(player, enemy);

        } else if (response === "run") {

            if (Math.random() < 0.5) {

                console.log("You escaped " + enemy.name + "!");
                player.shakeOffRatio = player.shakeOffBase;
                return true;

            } else {

                console.log("Oh no, you can't get away");

            }
        } else {

            printInventory();

        }

        if (enemy.health > 0) {
            var shakenOff = Math.random();

            if (shakenOff <= player.shakeOffRatio) {
                console.log("You defeated" + enemy.name + "!");
            } else {
                player.health -= enemyAttack(enemy);
            }


        } else {

            console.log("You defeated the " + enemy.name + "!");
            player.shakeOffRatio = player.shakeOffBase;
            dropItem();

            return true;
        }

        if (player.health <= 0) {

            console.log("You were defeated by " + enemy.name + "!");
            return false;

        }

    }
}

function dropItem() {
    var random = Math.random();

    if (random < 0.40) {
        if (enemy.name === "Zombies") {
            console.log("You can shank peeps now!");
            player.items.push(new Item(items.knife));
        } else if (enemy.name === "Sponge Bob") {
            console.log("Sponge Bob had a gun?? WTF");
            player.items.push(new Item(items.gun));
        } else if (enemy.name === "Donald Trump") {
            console.log("You picked up a Machete");
            player.items.push(new Item(items.machete));
        } else {
            console.log("Hillary gave you some Booz");
            player.items.push(new Item(items.booz));
        }
    }

}

function printInventory(battling) {
    console.log(player.name);
    console.log("You have " + player.hp());
    console.log("Inventory");
    var selectedItem;
    var selectedIndex;
    var limits = ["back"];
    if (player.items.length > 0) {
        for (var i = 0; i < player.items.length; i++) {
            console.log(player.items[i].name);
            limits.push(player.items[i].name);
        }
        console.log("");
    } else {
        console.log("Nothing here");
    }
    while (true) {

        var response = readlineSync.question("What item would you like to use? Or go (back) ", {
            limit: limits
        });
        if (response === "back") {
            return "";
        } else {
            for (var j = 0; j < player.items.length; j++) {
                if (response === player.items[j].name) {
                    selectedIndex = j;
                    selectedItem = player.items[j];
                    break;
                }
            }
            console.log("Description: " + selectedItem.description);
            if ((selectedItem.name === "Knife" || selectedItem.name === "Booz")) {
                if (battling === true) {
                    response = readlineSync.question("Use this item? (y/n)", {
                        limit: ["y", "n"]
                    });
                } else {
                    readlineSync.question("This item can only be used in a conflict\n");
                }
            } else {
                response = readlineSync.question("Use this item? (y/n)", {
                    limit: ["y", "n"]
                });
            }
            if (response === "y") {
                useItem(selectedItem);
                player.items.splice(selectedIndex, 1);
                return;
            }
        }
    }
}


function useItem(item) {
    if (item.name === "Knife") {
        console.log(item.action);
        player.health += 20;
    } else if (item.name === "Gun") {
        console.log(item.action);
        player.shakeOffRatio *= 2;
    } else if (item.name === "Machete") {
        console.log(item.action);
        player.health += 50;
    } else {
        console.log(item.action);
        enemy.health -= 10;
    }
}

function playerAttack(player, enemy) {
    var attack = player.attack();

    console.log("You are winning " + enemy.name + "you took away " + attack + " points");

    return attack;
}


function enemyAttack(enemy) {
    var attack = enemy.attack();

    console.log(enemy.attackCaption + attack + " points");

    return attack;
}