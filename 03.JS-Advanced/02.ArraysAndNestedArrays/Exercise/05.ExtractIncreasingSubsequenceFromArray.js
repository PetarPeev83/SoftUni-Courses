function extractSubsequence(input) {
    // let output = [input.shift()];
    // for (let i = 0; i < input.length; i++) {
    //     let element = input[i];
    //     if (element >= output[output.length - 1]) {
    //         output.push(element)
    //     }
    // }
    // console.log(output);
    let reducer = (a, b) => b >= a ;
    output = input.reduce(reducer);
    console.log(output);
    return output;
}
extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractSubsequence([1, 2, 3, 4]);
extractSubsequence([20, 3, 2, 15, 6, 1]);