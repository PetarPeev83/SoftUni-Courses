function diagonalSums(input) {
    let output = [];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < input.length; i++) {
        let num1 = input[i][i];
        sum1 += num1;
    }
    let index = 0;
    for (let j = input.length - 1; j >= 0; j--) {
        let num2 = input[index][j];
        sum2 += num2;
        index++;
    }
    console.log(sum1 + ' ' + sum2);
}
// diagonalSums([[20, 40],[10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);