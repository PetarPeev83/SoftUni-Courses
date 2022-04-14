function negativeOrPositive(nums) {

    let output = [];
    for (let num of nums) {
        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }
    for (let current of output) {
        console.log(current);
    }
}
// negativeOrPositive([7, -2, 8, 9]);
negativeOrPositive([3, -2, 0, -1]);