function processOddNumbers(array) {

    let oddArr = array.filter((x, i) => i % 2 !== 0);
    let doubled = oddArr.map(x => x * 2);
    let reversed = doubled.reverse();
    let output = reversed.join(" ");
    console.log(output);
}
// processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);