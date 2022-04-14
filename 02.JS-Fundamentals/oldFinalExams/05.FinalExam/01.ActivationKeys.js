function activationKeys(input) {
    let key = input.shift();
    let current = input.shift();
    while (current !== 'Generate') {
       let  splitted = current.split(">>>");
        if (splitted[0] === "Contains") {
            if (key.includes(splitted[1])) {
                console.log(`${key} contains ${splitted[1]}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (splitted[0] === "Flip") {
            key = key.split('');
            if (splitted[1] === 'Upper') {
                for (let i = Number(splitted[2]); i < Number(splitted[3]); i++) {
                    key[i] = key[i].toUpperCase();
                }
            } else {
                for (let i = Number(splitted[2]); i < Number(splitted[3]); i++) {
                    key[i] = key[i].toLowerCase();
                }
            }
            key = key.join("");
            console.log(key);
        } else if (splitted[0] === "Slice") {
            let first = key.slice(0, Number(splitted[1]));
            let second = key.slice(Number(splitted[2]), key.length);
            key = first + second;
            console.log(key);
        }
        current = input.shift();
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>MNO",
    "Contains>>>deF",
    "Generate"]);
// activationKeys(["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"]);