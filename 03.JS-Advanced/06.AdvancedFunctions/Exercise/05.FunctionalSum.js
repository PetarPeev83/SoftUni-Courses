function add(num) {
    let sum = num;
    function addToSum(num2) {
        sum += num2
        return addToSum;
    }
    addToSum.toString = () => { return sum };
    return addToSum;
}
console.log(add(1)(2)(3).toString())
