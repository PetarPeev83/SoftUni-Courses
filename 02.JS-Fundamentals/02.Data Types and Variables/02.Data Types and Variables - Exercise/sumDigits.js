function sumDigits(number) {

    let numberToString = number.toString();
    let sum = 0;

    for (let current of numberToString) {
        sum += Number(current);
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);