function sorting(numsArr) {
    let maxToMinArr = numsArr.sort((a, b) => b - a).slice();
    let minToMaxArr = numsArr.sort((a, b) => a - b).slice();
    let output = [];
    let indexMaxArr = 0;
    let indexMinArr = 0;
    for (let i = 0; i < numsArr.length; i++) {
        if (i % 2 === 0) {
            output.push(maxToMinArr[indexMaxArr]);
            indexMaxArr++;
        } else {
            output.push(minToMaxArr[indexMinArr]);
            indexMinArr++;
        }
    }
    console.log(output.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);