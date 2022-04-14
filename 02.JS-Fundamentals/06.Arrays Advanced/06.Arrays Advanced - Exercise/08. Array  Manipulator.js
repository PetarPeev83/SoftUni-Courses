function arrayManipulation(numsArr, commandsArr) {

    let arrToMnipulate = numsArr.slice();

    for (let elements of commandsArr) {
        let splittedElement = elements.split(" ");
        let command = splittedElement.shift();
        let index = 0;
        let element = 0;
        switch (command) {
            case "add":
                index = Number(splittedElement.shift());
                element = Number(splittedElement.shift());
                arrToMnipulate.splice(index, 0, element)
                break;
            case "addMany":
                index = Number(splittedElement.shift());
                for (let i = splittedElement.length - 1; i >= 0; i--) {
                    arrToMnipulate.splice(index, 0, Number(splittedElement[i]));
                }
                break;
            case "contains":
                element = Number(splittedElement.shift());
                console.log(arrToMnipulate.indexOf(element));
                break;
            case "remove":
                index = Number(splittedElement.shift());
                arrToMnipulate.splice(index, 1);
                break;
            case "shift":
                let positions = Number(splittedElement.shift());
                for (let i = 0; i < positions; i++) {
                    let elementToShift = arrToMnipulate.shift();
                    arrToMnipulate.push(elementToShift);
                }
                break;
            case "sumPairs":
                if (arrToMnipulate.length % 2 === 1) {
                    arrToMnipulate.push(0);
                }
                for (let i = 0; i < arrToMnipulate.length; i++) {
                    arrToMnipulate.splice(i, 2, (arrToMnipulate[i] + arrToMnipulate[i + 1]))
                }
                break;
            case "print":
                console.log(`[ ${arrToMnipulate.join(", ")} ]`);
                return;
        }
    }
}
// arrayManipulation([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulation([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulation([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);