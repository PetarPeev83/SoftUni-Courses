function mergeArrays(arrOne, arrTwo) {

    let newArr = [];

    for (let i = 0; i < arrOne.length; i++) {

        let elementArrOne = arrOne[i];
        let elementArrTwo = arrTwo[i];
        let result = "";

        if (i % 2 === 0) {
            result = Number(elementArrOne) + Number(elementArrTwo);
        } else {
            result = String(elementArrOne) + String(elementArrTwo);
        }
        newArr.push(result);
    }
    console.log(newArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
// mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);