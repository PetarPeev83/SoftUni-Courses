function houseParty(inputList) {
    let outputList = [];
    for (let current of inputList) {
        current = current.split(" ");
        let person = current[0];
        if (current.includes("not")) {
            if (!outputList.includes(person)) {
                console.log(`${person} is not in the list!`);
            } else {
                let personIndex = outputList.indexOf(person);
                outputList.splice(personIndex, 1);
            }
        } else {
            if (!outputList.includes(person)) {
                outputList.push(person);
            } else {
                console.log(`${person} is already in the list!`);
            }
        }
    }
    console.log(outputList.join("\n"));
}
// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
// houseParty(['Allie is not going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);