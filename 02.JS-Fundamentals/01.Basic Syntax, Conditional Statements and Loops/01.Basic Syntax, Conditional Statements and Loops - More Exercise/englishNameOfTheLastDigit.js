function englishNameOfTheLastDigit(number) {

    let digitToConvert = number % 10;
    let digitName = ["zero" , "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine"];

    console.log(digitName[digitToConvert]);
}
englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);