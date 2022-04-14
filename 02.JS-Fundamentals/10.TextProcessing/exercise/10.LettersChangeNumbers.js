function lettersChange(input) {
    let splitted = input.split(" ").filter(x => x.length > 1);
    let alphabet = ["0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let totalSum = 0;
    for (let current of splitted) {
        let firstLetter = current.slice(0, 1);
        let lastLetter = current.slice(-1);
        let number = Number(current.slice(1, -1));
        if (firstLetter === firstLetter.toUpperCase()) {
            number /= alphabet.indexOf(firstLetter.toLowerCase());
        } else {
            number *= alphabet.indexOf(firstLetter);
        } if (lastLetter === lastLetter.toUpperCase()) {
            number -= alphabet.indexOf(lastLetter.toLowerCase());
        } else {
            number += alphabet.indexOf(lastLetter);
        }
        totalSum += number;
    }
    console.log(totalSum.toFixed(2));
}
lettersChange('A12b s17G');
// lettersChange('P34562Z q2576f   H456z');
// lettersChange('a1A');