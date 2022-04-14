function CharactersInRange(firstChar, secondChar) {

    let firstNum = firstChar.charCodeAt();
    let secondNum = secondChar.charCodeAt();
    if (firstNum > secondNum) {
        firstNum = secondNum;
        secondNum = firstChar.charCodeAt();
    }
    let output = [];
    for (let i = firstNum + 1; i < secondNum; i++) {
        let currentCharCode = i;
        let charFromCurrent = String.fromCharCode(i);
        output.push(charFromCurrent);
    }
    return output.join(" ");
}
console.log(CharactersInRange('a', 'd'));;
console.log(CharactersInRange('#', ':'));;
console.log(CharactersInRange('C', '#'));;