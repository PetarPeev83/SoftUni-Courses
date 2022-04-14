function NonDecreasingSubsequence(input) {

    let toPrint = [input[0]];

    for (let i = 1; i < input.length; i++) {
        let current = input[i];

        if (current >= toPrint[toPrint.length - 1]) {
            toPrint.push(current);
        }
    }
    console.log(toPrint.join(" "));
}
NonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// NonDecreasingSubsequence([ 1, 2, 3, 4]);
// NonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);