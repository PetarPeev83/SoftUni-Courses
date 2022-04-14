function reveal(words, text) {
    words = words.split(", ");
    let splittedText = text.split(" ");
    for (let word of words) {
        for (let current of splittedText) {
            if (current.startsWith("*") && current.endsWith("*") && word.length === current.length) {
                splittedText[splittedText.indexOf(current)] = word;
            }
        }
    }
    console.log(splittedText.join(" "));
}
// reveal('great',
// 'softuni is ***** place for learning new programming languages');
reveal('great, learning',
    'softuni is ***** place for ******** new programming languages');