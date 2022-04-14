function sumEvenNumbers(input) {

    let sum = 0;

    for (let num of input) {
          if (Number(num) % 2 === 0) {
              sum += Number(num);
          }
      }

    // for (let i = 0; i < input.length; i++) {
    //     let currentNum = Number(input[i]);
    //     if (currentNum % 2 === 0) {
    //         sum += currentNum;
    //     }
    // }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);