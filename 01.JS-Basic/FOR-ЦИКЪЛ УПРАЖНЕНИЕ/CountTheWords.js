function countTheWords(input) {

    let text = input[0]
    let words = 1


    for (i = 0; i < text.length; i++) {
        let letter = text[i]
        if (letter === " ") {
            words += 1
        }
    }
    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`)
    }
    else {
        console.log(`The message was send successfully!`)
    }
}
countTheWords(["This message has ten words and you can send it!"])