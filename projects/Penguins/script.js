var readlineSync = require('readline-sync');

function Party(pName, population) {
    this.partyName = pName;
    this.population = population;
}
var trumps = new Party('trumps', 1000000);
console.log(trumps);
var clintons = new Party('clintons', 1000000);
console.log(clintons);
//Coin Flip
var ranNum = 0;

function randomNumber() {
    var ranNumDecimal = Math.random();
    var ranNumWhole = Math.ceil((ranNumDecimal) * 50);
    ranNum = parseInt(ranNumWhole);
}
randomNumber();
console.log(ranNum);
var attackedParty;
if (ranNum < 25) {
    attackedParty = clintons;
    console.log('The ' + attackedParty.partyName + ' are being attacked');
} else {
    attackedParty = trumps;
    console.log('The ' + attackedParty.partyName + ' are being attacked');
}

//Callback Functions
function onHit(party) {
    party.population -= (ranNum * 1000);
    console.log('The ' + party.partyName + 'now only have ' + party.population)
}

function onMiss(party) {
    console.log("The Attack Was Unsuccessful against the " + party.partyName);
}

function sendNuke(party, onHit, onMiss) {
    if (ranNum > 25) {
        onHit(party);
    } else {
        onMiss(party);
    }
}

function main() {
    while (true) {
        sendNuke(attackedParty, onHit, onMiss);
        console.log(attackedParty.partyName, attackedParty.population)
        if (attackedParty.population <= 0) {

            break
        }
        randomNumber();
        switchParty();
    }
}

function switchParty() {
    if (attackedParty === clintons) {
        attackedParty = trumps;
    } else {
        attackedParty = clintons;
    }
}
main();