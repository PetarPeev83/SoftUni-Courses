function magicMatrices(input) {
    let magicNum = input[0].reduce((a, b) => a + b);
    for (let i = 1; i < input.length; i++) {
        let currentNum = input[i].reduce((a, b) => a + b);
        if (magicNum != currentNum) {
            console.log(false);
            return;
        }
    }
    for (let j = 0; j < input.length; j++) {
        let currentColumnSum = 0;
        for (let q = 0; q < input.length; q++) {
            let arr = input[q];
            currentColumnSum += arr[j];
        }
        if (magicNum != currentColumnSum) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);