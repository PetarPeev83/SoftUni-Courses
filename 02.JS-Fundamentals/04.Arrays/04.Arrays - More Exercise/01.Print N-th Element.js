function printNthElement(input) {

    let toPrint = [];
    let n = Number(input[input.length - 1]);

    for (let i = 0; i < input.length - 1; i += n) {
        let element = input[i];
        toPrint.push(element);
    }
    console.log(toPrint.join(" "));
}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);