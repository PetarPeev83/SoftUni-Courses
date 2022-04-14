function lettersCombinations(input) {

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let startLetter = String(input[0])
    let stopLetter = String(input[1])
    let letterToIgnore = String(input[2])
    let counter = 0
    let printLetters = ''

    for (let i = 0; i < alphabet.length; i++) {

        let letter = alphabet[i]

        if (letter === startLetter) {

            let n = i;
            let firstLetter = ''
            do {
                if (alphabet[n] === letterToIgnore) {
                    if (letterToIgnore === stopLetter) {
                        break;
                    }
                    n++
                    continue;
                }
                firstLetter = alphabet[n]
                n++

                let o = i;
                let secondtLetter = ''
                do {
                    if (alphabet[o] === letterToIgnore) {
                        if (letterToIgnore === stopLetter) {
                            break;
                        }
                        o++;
                        continue;
                    }
                    secondtLetter = alphabet[o]
                    o++

                    let p = i;
                    let thirdLetter = '';
                    do {
                        if (alphabet[p] === letterToIgnore) {
                            if (letterToIgnore === stopLetter) {
                                break;
                            }
                            p++;
                            continue;
                        }
                        thirdLetter = alphabet[p];
                        counter++;
                        printLetters += `${firstLetter}${secondtLetter}${thirdLetter} `
                        p++;

                    } while (thirdLetter !== stopLetter);
                } while (secondtLetter !== stopLetter);
            } while (firstLetter !== stopLetter);
        }
    }
    console.log(`${printLetters}${counter}`)
}
lettersCombinations(['a', 'c', 'b'])    