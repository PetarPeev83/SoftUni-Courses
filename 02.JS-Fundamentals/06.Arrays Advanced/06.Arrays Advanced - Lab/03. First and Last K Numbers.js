function firstAndLastNumber(nums) {

    let k = nums.shift();
    let first = nums.slice(0 , k);
    let last = nums.slice(-k , nums.length);

    console.log(first.join(" "));
    console.log(last.join(" "));
}
firstAndLastNumber([2, 7, 8, 9]);
// firstAndLastNumber([3, 6, 7, 8, 9]);