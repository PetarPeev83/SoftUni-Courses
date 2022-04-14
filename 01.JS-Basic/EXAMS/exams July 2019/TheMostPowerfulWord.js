function theMostPowerfulWord(input) {

    let word = input.shift();
    let mostPowerfulWord = "";
    let mostPowerfulWordPoints = 0;

    while (word !== "End of words") {

        let currentWordPoints = 0;

        for (let i = 0; i < word.length; i++) {
            currentWordPoints += word.charCodeAt(i);
        }
        if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" ||
            word.charAt(0) === "o" || word.charAt(0) === "u" || word.charAt(0) === "y" ||
            word.charAt(0) === "A" || word.charAt(0) === "E" || word.charAt(0) === "I" ||
            word.charAt(0) === "O" || word.charAt(0) === "U" || word.charAt(0) === "Y") {
            currentWordPoints *= word.length;
        } else {
            currentWordPoints = Math.floor(currentWordPoints / word.length);
        }
        if (currentWordPoints > mostPowerfulWordPoints) {
            mostPowerfulWord = word;
            mostPowerfulWordPoints = currentWordPoints;
        }
        word = input.shift();
    }
    console.log(`The most powerful word is ${mostPowerfulWord} - ${mostPowerfulWordPoints}`);
}
theMostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);

//(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);