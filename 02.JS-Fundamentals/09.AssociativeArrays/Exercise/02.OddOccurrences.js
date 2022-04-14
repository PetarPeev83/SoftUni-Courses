function oddOccurrences(input) {
    let wordsList = {};
    let sentenceSplitted = input.toLowerCase().split(" ");
    for (let word of sentenceSplitted) {
        if (wordsList.hasOwnProperty(word)) {
            wordsList[word]++;
        } else {
            wordsList[word] = 1;
        }
    }
    let toPrint = [];
    for (let [key, value] of Object.entries(wordsList)) {
        if (value % 2 !== 0) {
            toPrint.push(key);
        }
    }
    console.log(toPrint.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');