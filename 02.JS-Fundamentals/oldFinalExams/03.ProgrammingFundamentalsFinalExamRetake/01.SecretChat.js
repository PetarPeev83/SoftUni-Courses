function secretChat(input) {
    let message = input.shift();
    while (input[0] !== "Reveal") {
        let [command, token1, token2] = input.shift().split(':|:');
        if (command === 'InsertSpace') {
            let index = Number(token1);
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + " " + right;
            console.log(message);
        } else if (command === 'Reverse') {
            let substring = token1;
            if (message.includes(substring)) {
                let replacer = substring.split("").reverse().join("");
                message = message.replace(substring, "") + replacer;
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === 'ChangeAll') {
            let substring = new RegExp(token1, "g");
            let replacer = token2;
            message = message.replace(substring, replacer);
            // let substring = token1;
            // while (message.includes(substring)) {
            //     message = message.replace(substring, replacer);
            // }
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
// secretChat(['Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal']);