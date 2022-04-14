function oddEven(num) {

    let oddSum = 0;
    let evenSum = 0;

    let numArr = String(num).split("");
    for (let i = 0; i < numArr.length; i++) {
        let currentNum = numArr[i];
        if (currentNum % 2 !== 0) {
            oddSum += Number(currentNum);
        } else {
            evenSum += Number(currentNum);
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(oddEven(1000435));
console.log(oddEven(3495892137259234));