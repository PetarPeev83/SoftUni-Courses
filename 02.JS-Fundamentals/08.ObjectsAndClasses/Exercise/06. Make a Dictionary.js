function dictionary(jsonArrOfWords) {
    let list = {};
    for (let word of jsonArrOfWords) {
        let wordInObj = JSON.parse(word);
        let key = Object.keys(wordInObj)[0];
        let value = Object.values(wordInObj)[0];
        list[key] = value;
    }
    let keysArr = Object.keys(list);
    keysArr.sort((a, b) => a.localeCompare(b));
    for (let key of keysArr) {
        console.log(`Term: ${key} => Definition: ${list[key]}`);
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);