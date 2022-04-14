function armies(input) {
    let leadersList = {};
    for (let current of input) {
        if (current.includes(" arrives")) {
            let leaderToAdd = current.split(" ");
            leaderToAdd = leaderToAdd.slice(0, -1).join(" ");
            leadersList[leaderToAdd] = {};
        } else if (current.includes(": ")) {
            [leaderName, army] = current.split(": ");
            if (leadersList.hasOwnProperty(leaderName)) {
                [armyName, armyNumber] = army.split(", ");
                leadersList[leaderName][armyName] = Number(armyNumber);
            }
        } else if (current.includes(" + ")) {
            [armyName, armyToAdd] = current.split(" + ");
            for (let leader of Object.keys(leadersList)) {
                if (leadersList[leader].hasOwnProperty(armyName)) {
                    leadersList[leader][armyName] += Number(armyToAdd);
                }
            }
        } else if (current.includes(" defeated")) {
            let leaderToDel = current.split(" ").slice(0, -1).join(" ");
            delete leadersList[leaderToDel];
        }
    }
    let leaderNoArmy = "";
    for (let check of Object.entries(leadersList)) {
        if (Object.keys(check[1]).length === 0) {
            leaderNoArmy = `${check[0]}: 0`;
            delete leadersList[check[0]];
        }
    }
    let totalArmySorted = Object.entries(leadersList).sort((a, b) => totalArmySort(a[1], b[1]));
    function totalArmySort(a, b) {
        let aArmy = Object.values(a).reduce((c, d) => c + d);
        let bArmy = Object.values(b).reduce((c, d) => c + d);
        return bArmy - aArmy;
    }
    for (let armyToPrint of totalArmySorted) {
        console.log(`${armyToPrint[0]}: ${Object.values(armyToPrint[1]).reduce((a, b) => a + b)}`);
        let sortedArmy = Object.entries(armyToPrint[1]).sort((a, b) => b[1] - a[1]);
        sortedArmy.forEach(element => console.log(`>>> ${element[0]} - ${element[1]}`));
    }
    console.log(leaderNoArmy);
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205']);