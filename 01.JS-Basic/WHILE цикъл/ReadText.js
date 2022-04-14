function readText(input) {
    let i = 0
    while (true) {
        let word = input[i]
        i++
        if (word === "Stop") {
            break;
        }
        console.log(word)
    }
}
readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
