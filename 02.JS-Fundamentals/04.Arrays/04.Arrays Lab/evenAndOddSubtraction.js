function evenAndOdSubtraction(input) {

    let evenSum = 0;
    let oddSum = 0;

    for (let num of input) {
        num = Number(num);
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOdSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOdSubtraction([3, 5, 7, 9]);
evenAndOdSubtraction([2, 4, 6, 8, 10]);