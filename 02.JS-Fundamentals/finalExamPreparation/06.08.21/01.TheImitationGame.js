function imitation(input) {
    let message = input.shift();
    for (let current of input) {
        let [command, token1, token2] = current.split("|");
        if (command === "Move") {
            let lettersNum = Number(token1);
            let lettersToMove = message.slice(0, lettersNum);
            message = message.slice(lettersNum) + lettersToMove;
        } else if (command === "Insert") {
            let index = Number(token1);
            let value = token2;
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + value + right;
        } else if (command === "ChangeAll") {
            let substring = token1;
            let replacement = token2;
            message = message.split(substring).join(replacement);
        } else if (current === "Decode") {
            console.log(`The decrypted message is: ${message}`);
            return;
        }
    }
}
imitation(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
// imitation(['owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode']);