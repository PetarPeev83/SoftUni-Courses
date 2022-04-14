function sortNumbers(numOne, numTwo, numThree) {

    let max = Math.max(numOne, numTwo, numThree);
    let min = Math.min(numOne, numTwo, numThree);
    let secondNum = (numOne + numTwo + numThree) - (max + min);

    console.log(max);
    console.log(secondNum);
    console.log(min);
}
sortNumbers(2, 1, 3);
console.log("------");
sortNumbers(-2, 1, 3);
console.log("-------");
sortNumbers(0, 0, 2);