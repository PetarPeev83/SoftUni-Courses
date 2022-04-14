function streamOfLetters(input) {

    let i = 0
    let currentWord = ""
    let result = ""
    let c = 0
    let o = 0
    let n = 0

    while (input[i] !== "End") {

        let letter = input[i]

        if (!letter.match(/[a-z]/i)) {
            i++
        } else {
            if (letter === "c" && c === 0) {
                c++
                i++
            } else if (letter === "o" && o === 0) {
                o++
                i++
            } else if (letter === "n" && n === 0) {
                n++
                i++
            } else {
                currentWord += letter
                i++
            }
            if (c === 1 && o === 1 && n === 1) {
                result += currentWord
                currentWord = " "
                c = 0
                o = 0
                n = 0
            }

        }
    }
    console.log(result)
}
streamOfLetters(['%','!','c','^','B','`','o','%','o','o','M',')','{','n','/','A','D','End'])


//(['o','S','%','o','l','^','v','e','c','n','&','m','e','c','o','n','End'])