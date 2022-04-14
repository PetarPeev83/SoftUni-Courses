function reverseString(wordToReverse) {

    // let wordSplit = wordToReverse.split('');
    // let wordReverse = wordSplit.reverse();
    // let reversesdWord = wordReverse.join('');

    let reversed = wordToReverse.split('').reverse().join('')

    console.log(reversed);
}
reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");