function problem1(input) {
    let text = input.shift();
    while (input[0] !== 'Done') {
        let [command, token1, token2] = input.shift().split(" ");
        if (command === "Change") {
            let char = new RegExp(token1, "g");
            text = text.replace(char, token2);
            console.log(text);
        } else if (command === "Includes") {
            if (text.includes(token1)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === "End") {
            if (text.endsWith(token1)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (command === "Uppercase") {
            text = text.toUpperCase();
            console.log(text);
        } else if (command === "FindIndex") {
            console.log(text.indexOf(token1));
        } else if (command === "Cut") {
            let startIndex = Number(token1);
            let length = Number(token2);
            text = text.substring(startIndex, length + startIndex);
            console.log(text);
        }
    }
}
problem1(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
// problem1(["*S0ftUni is the B3St Plac3**",
// "Change 2 o",
// "Includes best",
// "End is",
// "Uppercase",
// "FindIndex P",
// "Cut 3 7",
// "Done"]);

