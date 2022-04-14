function addAndSubtract(numOne, numTwo, numThree) {

    function sum() {
        let sumResult = numOne + numTwo;
        return sumResult;
    }
    function subtract() {
        let subtractResult = sum() - numThree;
        return subtractResult;
    }
    console.log(subtract());
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);