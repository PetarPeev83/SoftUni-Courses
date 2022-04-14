function passwordValidator(password) {

    function numOfCharactersCheck() {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function containsCheck() {
        for (let digit of password) {
            let currentDigitCharCode = digit.charCodeAt();
            if (!(currentDigitCharCode >= 48 && currentDigitCharCode <= 57) &&
                !(currentDigitCharCode >= 65 && currentDigitCharCode <= 90) &&
                !(currentDigitCharCode >= 97 && currentDigitCharCode <= 122)) {
                return false;
            }
        } return true;
    }
    function numOfDigitCheck() {
        let numCounter = 0;
        for (let digit of password) {
            let currentDigitCharCode = digit.charCodeAt();
            if (currentDigitCharCode >= 48 && currentDigitCharCode <= 57) {
                numCounter++;
            }
        } if (numCounter < 2) {
            return false;
        } else {
            return true;
        }
    }
    if (numOfCharactersCheck() && containsCheck() && numOfDigitCheck()) {
        console.log("Password is valid");
    } if (!numOfCharactersCheck()) {
        console.log("Password must be between 6 and 10 characters");
    } if (!containsCheck()) {
        console.log("Password must consist only of letters and digits");
    } if (!numOfDigitCheck()) {
        console.log("Password must have at least 2 digits");
    }
}
// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');