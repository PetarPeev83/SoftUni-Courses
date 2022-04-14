function magneticMatrices(input) {

    let isMagic = true;
    let firstRow = input[0];
    let firstRowSum = 0;

    for (let i = 0; i < firstRow.length; i++) {
        let num = Number(firstRow[i]);
        firstRowSum += num;
    }

    for (let index = 0; index < input.length; index++) {
        let currentArr = input[index];
        let currentRowSum = 0;

        for (let j = 0; j < currentArr.length; j++) {
            let currentNum = Number(currentArr[j]);
            currentRowSum += currentNum;
        }
        if (currentRowSum !== firstRowSum) {
            isMagic = false;
            break;
        }
    }
    let currentColumnSum = 0;
    for (let q = 0; q < input.length; q++) {
        let arr = input[q];
        for (let m = q; m <= q; m++) {
            currentColumnSum += Number(arr[m]);
        }
    }
    console.log(isMagic);
}
magneticMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magneticMatrices([[4, 5, 6, 5], [6, 5, 4, 5], [5, 5, 5, 5], [4, 4, 7, 5]]);
magneticMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magneticMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);