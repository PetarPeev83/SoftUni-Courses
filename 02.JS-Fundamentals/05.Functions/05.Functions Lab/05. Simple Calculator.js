function simpleCaculator(numOne, numTwo, operator) {

    let result = 0;
    switch (operator) {
        case "multiply":
            result = numOne * numTwo;
            break;
        case "divide":
            result =  numOne / numTwo;
            break;
        case "add":
            result =  numOne + numTwo;
            break;
        case "subtract":
            result =  numOne - numTwo;
            break;
    }
    console.log(result);
}
simpleCaculator(5, 5, 'multiply');
simpleCaculator(40, 8, 'divide',);
simpleCaculator(12, 19, 'add');
simpleCaculator(50, 13, 'subtract');