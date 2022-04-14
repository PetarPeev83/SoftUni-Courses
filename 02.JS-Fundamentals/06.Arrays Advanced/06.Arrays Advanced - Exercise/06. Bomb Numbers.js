function bombNumbers(arrOne, arrTwo) {
    let specialNumber = arrTwo[0];
    while (arrOne.includes(specialNumber)) {
        let power = arrTwo[1];
        let specialNumberIndex = arrOne.indexOf(specialNumber);
        let indexToSpliceFrom = specialNumberIndex - power;
        power = power * 2 + 1;
        if (indexToSpliceFrom < 0) {
            power += indexToSpliceFrom;
            indexToSpliceFrom = 0;
        }
        arrOne.splice((indexToSpliceFrom), (power));
    }
    if (arrOne.length > 0) {
        let sum = arrOne.reduce((a, b) => a + b);
        console.log(sum);
    } else {
        console.log(0);
    }
}
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);
