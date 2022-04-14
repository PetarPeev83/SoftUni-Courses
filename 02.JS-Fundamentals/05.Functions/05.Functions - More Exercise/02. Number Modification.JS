function numberModification(num) {

    let output = String(num);

    while (true) {
        let digitSum = 0;

        for (let digit of output) {
            digitSum += Number(digit);
        }
        let average = digitSum / output.length;

        if (average > 5) {
            return output;
        } else {
            output += "9";
            digitSum = 0;
        }
    }
}
// console.log(numberModification(101));
console.log(numberModification(5835));
