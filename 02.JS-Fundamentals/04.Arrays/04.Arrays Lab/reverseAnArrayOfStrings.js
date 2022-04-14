function reverseAnArrayOfStrings(input) {

    // let result = [];
    // let reversedResult = "";

    // for (let i = 0 ; i < input.length ; i++) {
    //     result.push(input[i]);
    // }
    // for (let j = result.length - 1; j >= 0; j--) {
    //     reversedResult += result[j] + " ";
    // }


    // let reversedArr = input.reverse();
    // let reversedResult = "";
    
    // for (let i = 0; i < reversedArr.length; i++) {
    //     reversedResult += reversedArr[i] + " ";
    // }
    // console.log(reversedResult);


    let reversedArr = input.reverse();
    let reversedResult = [];

    for (let i = 0; i < reversedArr.length; i++) {
        reversedResult.push(reversedArr[i]);
    }
    console.log(reversedResult.join(" "));
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);