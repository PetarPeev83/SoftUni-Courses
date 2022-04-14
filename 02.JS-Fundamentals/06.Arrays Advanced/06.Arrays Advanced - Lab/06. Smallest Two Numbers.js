function smallestTwoNumbers(numsArr) {

    let sorted = numsArr.sort((a, b) => a - b);
    let firstTwoNums = sorted.slice(0, 2);
    let output = firstTwoNums.join(" ");

    console.log(output);
}
smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);