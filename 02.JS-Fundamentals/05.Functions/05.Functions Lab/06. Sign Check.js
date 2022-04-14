function signCheck(x, y, z) {

    let array = [];
    array.push(x, y, z);
    let negativeCounter = 0;
    let result = "";

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        if (currentNum < 0) {
            negativeCounter++;
        }
    }
    if (negativeCounter % 2 === 0) {
        result = "Positive";
    } else {
        result = "Negative";
    }
    return result;
}
console.log(signCheck(5, 12, -15));
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);