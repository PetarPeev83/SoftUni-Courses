function heroes(input) {
    let heroesNum = Number(input.shift());
    let heroesList = {};
    let i = 0;
    for (i; i < heroesNum; i++) {
        let [hero, heal, mana] = input[i].split(" ");
        heroesList[hero] = {
            HP: Number(heal),
            MP: Number(mana),
        }
    }
    while (input[i] !== "End") {
        let command = input[i].split(' - ');
        if (command[0] === 'CastSpell') {
            castSpell(command[1], command[2], command[3]);
        } else if (command[0] === 'TakeDamage') {
            takeDamage(command[1], command[2], command[3]);
        } else if (command[0] === 'Recharge') {
            recharge(command[1], command[2]);
        } else if (command[0] === "Heal") {
            heal(command[1], command[2]);
        }
        i++
    }
    function castSpell(heroName, mpNeeded, spell) {
        if (heroesList[heroName]["MP"] >= Number(mpNeeded)) {
            heroesList[heroName]["MP"] -= Number(mpNeeded);
            console.log(`${heroName} has successfully cast ${spell} and now has ${heroesList[heroName]["MP"]} MP!`);
        }
        else {
            console.log(`${heroName} does not have enough MP to cast ${spell}!`);
        }
    }
    function takeDamage(heroName, damage, attacker) {
        heroesList[heroName]["HP"] -= Number(damage);
        if (heroesList[heroName]["HP"] > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesList[heroName]["HP"]} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete heroesList[heroName];
        }
    }
    function recharge(heroName, amountToAdd) {
        heroesList[heroName]["MP"] += Number(amountToAdd);
        if (heroesList[heroName]["MP"] > 200) {
            amountToAdd = amountToAdd - (heroesList[heroName]["MP"] - 200);
            heroesList[heroName]["MP"] = 200;
        }
        console.log(`${heroName} recharged for ${amountToAdd} MP!`);
    }
    function heal(heroName, amountToAdd) {
        heroesList[heroName]["HP"] += Number(amountToAdd);
        if (heroesList[heroName]["HP"] > 100) {
            amountToAdd = amountToAdd - (heroesList[heroName]["HP"] - 100);
            heroesList[heroName]["HP"] = 100;
        }
        console.log(`${heroName} healed for ${amountToAdd} HP!`);
    }
    let sortedByName = Object.entries(heroesList).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedByHP = sortedByName.sort((a, b) => b[1]["HP"] - a[1]["HP"]);
    for (let current of sortedByHP) {
        console.log(current[0]);
        console.log(`HP: ${current[1]['HP']}`);
        console.log(`MP: ${current[1]['MP']}`);
    }
}
// heroes(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End']);
heroes(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);