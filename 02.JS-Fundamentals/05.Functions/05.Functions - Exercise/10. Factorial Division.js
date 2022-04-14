function factorialDivision(numOne, numTwo) {

    console.log((factorialOne() / factorialTwo()).toFixed(2));

    function factorialOne() {
        let result = 1;
        for (i = 1; i <= numOne; i++) {
            result *= i;
        }
        return result;
    }
    function factorialTwo() {
        let result = 1
        for (i = 1; i <= numTwo; i++) {
            result *= i;
        }
        return result;
    }
}
// factorialDivision(5, 2);
factorialDivision(6, 2);