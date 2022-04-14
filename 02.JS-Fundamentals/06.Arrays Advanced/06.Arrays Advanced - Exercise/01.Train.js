function train(inputAsString) {

    let wagons = inputAsString.shift()
        .split(" ")
        .map(Number);
    let wagonCapacity = Number(inputAsString.shift());

    for (let i = 0; i < inputAsString.length; i++) {
        let current = inputAsString[i];
        current = current.split(" ");

        if (current.includes("Add")) {
            wagons.push(Number(current[1]))
        } else {
            for (let i = 0; i < wagons.length; i++) {
                let peopleInWagon = wagons[i];
                if (wagonCapacity >= Number(current[0]) + peopleInWagon) {
                    wagons[i] += Number(current[0]);
                    break;
                } 
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
// train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);