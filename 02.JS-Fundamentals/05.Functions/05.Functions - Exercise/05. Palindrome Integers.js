function palindromeIntegers(input) {

    let isPalindrome;

    for (let number of input) {
        let currentNumString = String(number);
        let reversedNumString = String(number).split('').reverse().join('');
        if (currentNumString === reversedNumString){
            isPalindrome = true;
        }else {
            isPalindrome = false;
        }
        console.log(isPalindrome);
    }
}
// palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);