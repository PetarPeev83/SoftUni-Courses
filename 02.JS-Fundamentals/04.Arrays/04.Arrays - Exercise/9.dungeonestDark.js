function dungeonestDark(input) {

    let health = 100;
    let coins = 0;
    let array = input[0].split("|");
    let room = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let splitedElement = element.split(" ");

        let itemOrMonster = splitedElement[0];
        let number = Number(splitedElement[1]);
        room++;

        switch (itemOrMonster) {
            case "potion":
                health += number;
                if (health > 100) {
                    number = Math.abs(health - 100 - number);
                    health = 100;
                }
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${itemOrMonster}.`);
                } else {
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${room}`);
                    return;
                }
                break;
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);