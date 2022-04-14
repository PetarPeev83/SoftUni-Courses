function condenseArrayToNumber(input) {

    let numbers = input;

    while (numbers.length > 1) {
        let condensed = [];
        for (let i = 0; i < numbers.length - 1; i++) {
            let current = numbers[i] + numbers[i + 1];
            condensed.push(Number(current));
        }
        numbers = condensed;
    }
    console.log(numbers[0]);
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);