function password(input) {
    let pass = input.shift();
    let command = input.shift();
    while (command !== 'Done') {
        command = command.split(' ');
        if (command[0] === 'TakeOdd') {
            pass = takeOdd(pass);
        } else if (command[0] === 'Cut') {
            pass = cut(pass, Number(command[1]), Number(command[2]));
        } else if (command[0] === 'Substitute') {
            pass = substitute(pass, command[1], command[2]);
        }
        command = input.shift();
    }
    console.log(`Your password is: ${pass}`);

    function takeOdd(text) {
        let newText = "";
        for (let i = 1; i < text.length; i += 2) {
            newText += text[i];
        }
        console.log(newText);
        return newText;
    }
    function cut(text, index, length) {
        let toRemove = text.slice(index, index + length);
        text = text.replace(toRemove, "");
        console.log(text);
        return text;
    }
    function substitute(text, textToFind, replacement) {
        if (text.includes(textToFind)) {
            while (text.includes(textToFind)) {
                text = text.replace(textToFind, replacement);
            }
            console.log(text);
            return text;
        } else {
            console.log("Nothing to replace!");
            return text;
        }
    }
}
// password(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]);
password(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);