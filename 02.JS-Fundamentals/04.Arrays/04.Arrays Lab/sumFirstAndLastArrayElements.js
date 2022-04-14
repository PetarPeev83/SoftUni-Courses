function sumFirstAndLastArrayElement(input) {

    let firstNum = Number(input[0]);
    let lastNum = Number(input[input.length - 1]);

    console.log(firstNum + lastNum);
}
sumFirstAndLastArrayElement([20, 30, 40]);
sumFirstAndLastArrayElement([10, 17, 22, 33]);
sumFirstAndLastArrayElement([11, 58, 69]);