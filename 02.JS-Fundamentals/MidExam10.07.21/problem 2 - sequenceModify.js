function sequenceModify(input) {
    let numbers = input.shift().split(' ').map(Number);
    for (let current of input) {
        [command,value,replacement] = current.split(' ');
        if (command === 'Add') {
            numbers.push(Number(value));
        } else if (command === 'Remove') {
            if (numbers.includes(Number(value))) {
                numbers.splice(numbers.indexOf(Number(value)), 1);
            }
        } else if (command === 'Replace') {
            if (numbers.includes(Number(value))) {
                numbers.splice(numbers.indexOf(Number(value)), 1, Number(replacement));
            }
        } else if (command === 'Collapse') {
           numbers =  numbers.filter(x => x >= Number(value));
        } else if (command === 'Finish') {
            console.log(numbers.join(' '));
        }
    }
}
// sequenceModify(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
// sequenceModify(["1 20 -1 10","Collapse 8","Finish"]);
sequenceModify(["5 9 70 -56 9 9","Replace 9 10","Remove 9","Finish"]);