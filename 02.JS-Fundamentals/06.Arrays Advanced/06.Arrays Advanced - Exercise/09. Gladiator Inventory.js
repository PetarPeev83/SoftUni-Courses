function gladiator(array) {

    let invertory = array.shift().split(" ");

    for (let current of array) {
        let splitted = current.split(" ");
        let command = splitted[0];
        if (command === "Buy") {
            if (!invertory.includes(splitted[1])) {
                invertory.push(splitted[1]);
            }
        } else if (command === "Trash") {
            if (invertory.includes(splitted[1])) {
                let index = invertory.indexOf(splitted[1]);
                invertory.splice(index, 1);
            }
        } else if (command === "Repair") {
            if (invertory.includes(splitted[1])) {
                let repairIndex = invertory.indexOf(splitted[1]);
                let repairElement = invertory.splice(repairIndex, 1);
                invertory.push(repairElement);
            }
        } else if (command === "Upgrade") {
            let upgrade = splitted[1].split("-");
            if (invertory.includes(upgrade[0])) {
                let upgradeIndex = invertory.indexOf(upgrade[0]);
                invertory.splice(upgradeIndex + 1, 0, `${upgrade[0]}:${upgrade[1]}`);
            }
        }
    }
    console.log(invertory.join(" "));
}
gladiator(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
// gladiator(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V']);