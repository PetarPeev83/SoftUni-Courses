function equalNeightboors(input) {
    let counter = 0;
    for (let i = 0; i < input.length - 1; i++) {
        let currentArr = input[i];
        let nextArr = input[i + 1];
        for (let j = 0; j < currentArr.length; j++) {
            if (currentArr[j] === nextArr[j]) {
                counter++;
            }
            if (nextArr[j] === nextArr[j + 1]) {
                counter++;
            }
        }
    }
    let firstArr = input[0];
    for (let x = 0; x < firstArr.length - 1; x++) {
        if (firstArr[x] === firstArr[x + 1]) {
            counter++;
        }
    }
    return counter;
    // console.log(counter);
}
equalNeightboors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
equalNeightboors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);