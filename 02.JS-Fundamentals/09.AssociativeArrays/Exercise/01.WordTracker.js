function wordTracker(input) {
    let wordsToSearchFor = input.shift().split(" ");
    let wordsList = {};
    for (let currentWordToSearch of wordsToSearchFor) {
        wordsList[currentWordToSearch] = 0;
        for (let currentWord of input) {
            if (currentWordToSearch === currentWord) {
                wordsList[currentWordToSearch]++;
            }
        }
    }
    let sorted = Object.entries(wordsList).sort((a, b) => b[1] - a[1]);
    for (let word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}
wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);