function lettersCombinations(input) {

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let startLetter = String(input[0])
    let stopLetter = String(input[1])
    let letterToIgnore = String(input[2])
    let counter = 0
    let printLetters = ''
    let stopLetterNumber = 0

    for (let s = 0; s < alphabet.length; s++) {

        stopLetterNumber++

        let stopLetterCheck = alphabet[s]
        
        if (stopLetterCheck === stopLetter) {
            break;
        }
    }
    for (let i = 0; i < alphabet.length; i++) {

        let letter = alphabet[i]

        if (letter === startLetter) {
            for (let n = i; n < stopLetterNumber; n++) {
                if (alphabet[n] === letterToIgnore) {
                    continue;
                }
                let firstLetter = alphabet[n]

                for (let o = i; o < stopLetterNumber; o++) {
                    if (alphabet[o] === letterToIgnore) {
                        continue;
                    }
                    let secondtLetter = alphabet[o]

                    for (let p = i; p < stopLetterNumber; p++) {
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
lettersCombinations(['f', 'k', 'h'])