function biggestElement(input) {
    let output = [];
    for (let arr of input) {
        let currentMax = Math.max(...arr);
        output.push(currentMax);
    }
    return Math.max(...output);
    // console.log(Math.max(...output));
}
biggestElement([[20, 50, 10],
[8, 33, 145]]);
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);