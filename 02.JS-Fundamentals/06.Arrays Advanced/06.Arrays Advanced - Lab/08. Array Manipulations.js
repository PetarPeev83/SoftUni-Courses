function arrayManipulation(input) {

    let arrToChange = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        current = current.split(" ");
        let command = current[0];

        if (command === "Add") {
            arrToChange.push(current[1]);
        } else if (command === "Remove") {
            arrToChange = arrToChange.filter(x => x !== current[1]);
        } else if (command === "RemoveAt") {
            arrToChange.splice(current[1], 1)
        } else if (command === "Insert") {
            arrToChange.splice(current[2], 0, current[1]);
        }
    }
    console.log(arrToChange.join(" "));
}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);