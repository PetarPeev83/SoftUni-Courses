function reverseAnArrayOfNumbers(n, input) {

    // let reversedArr = input.reverse();
    // let reversedResult = '';
    // let numDifference = input.length - n;

    // for (let i = numDifference; i < input.length; i++) {
    //     reversedResult += reversedArr[i] + " ";
    // }

    let result = [];
    let reversedResult = "";

    for (let i = 0; i < n; i++) {
        result.push(input[i]);
    }
    for (let j = result.length - 1; j >= 0; j--) {
        reversedResult += result[j] + " ";
    }
    console.log(reversedResult);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);