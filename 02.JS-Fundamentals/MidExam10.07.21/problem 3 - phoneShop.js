function phoneShop(input) {
    let phonesList = input.shift().split(', ');
    for (let current of input) {
        let splittedCurrent = current.split(' - ');
        if (splittedCurrent[0] === 'Add') {
            if (!phonesList.includes(splittedCurrent[1])) {
                phonesList.push(splittedCurrent[1]);
            }
        } else if (splittedCurrent[0] === 'Remove') {
            if (phonesList.includes(splittedCurrent[1])) {
                phonesList.splice(phonesList.indexOf(splittedCurrent[1]), 1);
            }
        } else if (splittedCurrent[0] === 'Bonus phone') {
            [oldPhone, newPhone] = splittedCurrent[1].split(':');
            if (phonesList.includes(oldPhone)) {
                phonesList.splice(phonesList.indexOf(oldPhone) + 1, 0, newPhone);
            }
        } else if (splittedCurrent[0] === 'Last') {
            if (phonesList.includes(splittedCurrent[1])) {
                phonesList.splice(phonesList.indexOf(splittedCurrent[1]), 1);
                phonesList.push(splittedCurrent[1]);
            }
        } else if (splittedCurrent[0] === 'End') {
            console.log(phonesList.join(', '));
        }
    }
}
// phoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "Last - HuaweiP10", "End"]);