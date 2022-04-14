function rightPlace(string, char, toString) {

    let result = string.replace("_", char);

    if (result === toString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');