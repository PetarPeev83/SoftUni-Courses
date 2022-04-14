function addAndSubtract(input) {

    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        sumArr += num;
        if (num % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }
        sumNewArr += num;
        newArr.push(num);
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);

// addAndSubtract([-5, 11, 3, 0, 2]);