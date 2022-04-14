function pirates(input) {
    let current = input.shift();
    let townList = {};
    while (current !== 'Sail') {
        [town, people, money] = current.split("||");
        if (Object.keys(townList).includes(town)) {
            townList[town]['population'] += Number(people);
            townList[town]['gold'] += Number(money);
        } else {
            townList[town] = {
                population: Number(people),
                gold: Number(money),
            }
        }
        current = input.shift();
    }
    current = input.shift();
    while (current !== 'End') {
        let splitted = current.split("=>");
        if (splitted[0] === 'Plunder') {
            let plunderTown = splitted[1];
            let peopleToKill = Number(splitted[2]);
            let goldToSteal = Number(splitted[3]);
            townList[plunderTown]['population'] -= peopleToKill;
            townList[plunderTown]['gold'] -= goldToSteal;
            console.log(`${plunderTown} plundered! ${goldToSteal} gold stolen, ${peopleToKill} citizens killed.`);
            if (townList[plunderTown]['population'] <= 0 || townList[plunderTown]['gold'] <= 0) {
                console.log(`${plunderTown} has been wiped off the map!`);
                delete townList[plunderTown];
            }
        } else if (splitted[0] === 'Prosper') {
            let prosperTown = splitted[1];
            let goldToAdd = Number(splitted[2]);
            if (goldToAdd < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                townList[prosperTown]['gold'] += goldToAdd;
                console.log(`${goldToAdd} gold added to the city treasury. ${prosperTown} now has ${townList[prosperTown]['gold']} gold.`);
            }
        }
        current = input.shift();
    }
    if (Object.keys(townList).length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        let sortedByName = Object.entries(townList).sort((a, b) => a[0].localeCompare(b[0]));
        let sortedByGold = sortedByName.sort((a, b) => b[1]['gold'] - a[1]['gold']);
        console.log(`Ahoy, Captain! There are ${Object.keys(townList).length} wealthy settlements to go to:`);
        sortedByGold.forEach(element => console.log(`${element[0]} -> Population: ${element[1]['population']} citizens, Gold: ${element[1]['gold']} kg`));
    }
}
// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]);
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);