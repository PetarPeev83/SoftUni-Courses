function equalNeightbors(arrOfArr) {
    let counter = 0;
    for (let i = 0; i < arrOfArr.length - 1; i++) {
        let currentArr = arrOfArr[i];
        let nextArr = arrOfArr[i + 1];
        for (let j = 0; j < currentArr.length; j++) {
            if (currentArr[j] === nextArr[j]) {
                counter++;
            }
            if (nextArr[j] === nextArr[j + 1]) {
                counter++;
            }
        }
    }
    let firstArr = arrOfArr[0];
    for (let x = 0; x < firstArr.length - 1; x++) {
        if (firstArr[x] === firstArr[x + 1]) {
            counter++;
        }
    }
    console.log(counter);
}
// equalNeightbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]);
// equalNeightbors([['test', 'yes', 'yo', 'ho'],['well', 'done', 'yo', '6'],['not', 'done', 'yet', '5']]);
equalNeightbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);