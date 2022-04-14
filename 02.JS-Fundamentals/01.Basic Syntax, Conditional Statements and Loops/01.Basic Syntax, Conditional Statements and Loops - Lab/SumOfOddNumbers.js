function sumOfOddNumbers(n) {

    let toPrint = 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        console.log(toPrint);
        sum += toPrint;
        toPrint += 2;
    }
    console.log("Sum: " + sum);
}
sumOfOddNumbers(3);