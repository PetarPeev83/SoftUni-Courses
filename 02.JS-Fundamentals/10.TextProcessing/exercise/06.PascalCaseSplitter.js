function paskalCase(text) {
    let result = [];
    let i = 0;
    while (i < text.length) {
        let word = text[i];
        i++;
        while (i < text.length && text[i] !== text[i].toUpperCase()) {
            word += text[i];
            i++;
        }
        result.push(word);
    }
    console.log(result.join(", "));
}
paskalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
paskalCase('HoldTheDoor');
paskalCase('ThisIsSoAnnoyingToDo');