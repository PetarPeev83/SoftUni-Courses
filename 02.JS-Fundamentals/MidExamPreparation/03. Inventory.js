function warriorInventory(input) {
    let invertory = input.shift().split(', ');
    for (let current of input) {
        let currentSplitted = current.split(" - ");
        let command = currentSplitted[0];
        let item = currentSplitted[1];
        if (command === "Collect") {
            if (!invertory.includes(item)) {
                invertory.push(item);
            }
        } else if (command === "Drop") {
            if (invertory.includes(item)) {
                let indexItem = invertory.indexOf(item);
                invertory.splice(indexItem, 1);
            }
        } else if (command === "Combine Items") {
            [oldItem, newItem] = item.split(":");
            if (invertory.includes(oldItem)) {
                let indexItem = invertory.indexOf(oldItem);
                invertory.splice(indexItem + 1, 0, newItem);
            }
        } else if (command === "Renew") {

            if (invertory.includes(item)) {
                let indexItem = invertory.indexOf(item);
                invertory.splice(indexItem, 1);
                invertory.push(item);
            }
        } else if (command === "Craft!") {
            console.log(invertory.join(", "));
        }
    }
}
// warriorInventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
warriorInventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);