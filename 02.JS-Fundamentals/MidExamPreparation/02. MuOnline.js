function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split("|");
    let roomCounter = 0;
    for (let currentRoom of rooms) {
        roomCounter++;
        let splitted = currentRoom.split(" ")
        let current = splitted.shift();
        let points = Number(splitted.shift());
        if (current === 'potion') {
            health += points;
            if (health > 100) {
                console.log(`You healed for ${100 - (health - points)} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (current === "chest") {
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`);
        } else {
            health -= points;
            if (health > 0) {
                console.log(`You slayed ${current}.`);
            } else {
                console.log(`You died! Killed by ${current}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
// muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');