function diagonalAttack(input) {
    let output = [];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < input.length; i++) {
        let splitted1 = input[i].split(' ');
        let num1 = Number(splitted1[i]);
        sum1 += num1;
    }
    let index = 0;
    for (let j = input.length - 1; j >= 0; j--) {
        let splitted2 = input[index].split(' ');
        let num2 = Number(splitted2[j]);
        sum2 += num2;
        index++;
    }
    if (sum1 == sum2) {
        let counter = 0;
        for (let q = 0; q < input.length; q++) {
            let current = input[q].split(' ');
            for (let p = 0; p < current.length; p++) {
                if (p == counter || p == current.length - 1 - counter) {
                    continue;
                } else {
                    current[p] = sum1;
                }
            }
            output.push(current.join(' '));
            counter++;
        }
    } else {
        for (let line of input) {
            console.log(line);
        }
    }
    // output.forEach(x => console.log(x));
    console.log(output.join('\n'));
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
// diagonalAttack([
//     '1 1 1',
//     '1 1 1',
//     '1 1 0']);