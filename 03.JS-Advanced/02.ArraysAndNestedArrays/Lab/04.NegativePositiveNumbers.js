function negativePositiveNumbers(input) {
    let output = [];
    for (let num of input) {
        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }
    console.log(output.join('\n'));
}
// negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);