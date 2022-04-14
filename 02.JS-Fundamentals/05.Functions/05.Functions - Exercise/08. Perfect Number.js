function perfectNumber(n) {

    let sumOfDeivided = 0;
    for (let num of dividedWithoutResidue()) {
        sumOfDeivided += num;
    }
    if (sumOfDeivided === n){
        return "We have a perfect number!";
    } else {
        return "It's not so perfect.";
    }

    function dividedWithoutResidue() {
        result = [];
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                result.push(i)
            }
        }
        return result;
    }
}
// console.log(perfectNumber(6));
// console.log(perfectNumber(28));
console.log(perfectNumber(1236498));