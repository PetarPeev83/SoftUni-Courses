function searchForNumber(arrOne, arrTwo) {

    let numsToTake = arrTwo[0];
    let numsToDelete = arrTwo[1];
    let numSearch = arrTwo[2];
    let output = arrOne.slice(0 , numsToTake).slice(numsToDelete);
    // output.splice(0, numsToDelete);
    let repeatCounter = 0;
    for (let num of output) {
        if (num === numSearch) {
            repeatCounter++;
        }
    }
    console.log(`Number ${numSearch} occurs ${repeatCounter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
