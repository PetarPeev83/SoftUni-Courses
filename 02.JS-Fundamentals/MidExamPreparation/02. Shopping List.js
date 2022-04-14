function shopingList(input) {
    let list = input.shift().split('!');
    let index = 0;
    while (input[index] !== 'Go Shopping!') {
        let current = input[index].split(' ');
        let currentCommand = current.shift();
        if (currentCommand === 'Urgent') {
            let item = current.shift();
            if (!list.includes(item)) {
                list.unshift(item);
            }
        } else if (currentCommand === 'Unnecessary') {
            let item = current.shift();
            if (list.includes(item)) {
                list.splice(list.indexOf(item), 1);
            }
        } else if (currentCommand === 'Correct') {
            let oldItem = current.shift();
            let newItem = current.shift();
            if (list.includes(oldItem)) {
                list.splice(list.indexOf(oldItem), 1, newItem);
            }
        } else if (currentCommand === 'Rearrange') {
            let item = current.shift();
            if (list.includes(item)) {
                list.splice(list.indexOf(item), 1);
                list.push(item);
            }
        }
        index++;
    }
    console.log(list.join(', '));
}
// shopingList(['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!']);
shopingList(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt', 'Unnecessary Grapes', 'Correct Pepper Onion', 'Rearrange Grapes', 'Correct Tomatoes Potatoes', 'Go Shopping!']);