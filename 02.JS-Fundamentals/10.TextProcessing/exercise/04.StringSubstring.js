function stringSubstring(word, sentence) {
    let wordToCheck = word.toLowerCase();
    let result = sentence.split(" ").filter(a => a.toLowerCase() === wordToCheck);
    if (result.length > 0) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');