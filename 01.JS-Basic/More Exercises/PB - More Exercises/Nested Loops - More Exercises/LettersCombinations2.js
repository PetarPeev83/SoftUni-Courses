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

            for (let n = i; alphabet[n - 1] !== stopLetter; n++) {
                if (alphabet[n] === letterToIgnore) {
                    continue;
                }
                let firstLetter = alphabet[n]

                for (let o = i; alphabet[o - 1] !== stopLetter; o++) {
                    if (alphabet[o] === letterToIgnore) {
                        continue;
                    }
                    let secondtLetter = alphabet[o]

                    for (let p = i; alphabet[p - 1] !== stopLetter; p++) {
                        if (alphabet[p] === letterToIgnore) {
                            continue;
                        }
                        let thirdLetter = alphabet[p]
                        counter++
                        printLetters += `${firstLetter}${secondtLetter}${thirdLetter} `
                    }
                }
            }
        }
    }
    console.log(`${printLetters}${counter}`)
}
lettersCombinations(['a', 'c', 'b'])