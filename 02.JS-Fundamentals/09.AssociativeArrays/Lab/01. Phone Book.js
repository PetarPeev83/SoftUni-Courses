function phoneBook(input) {

    let phoneBookObject = {};

    for (let person of input) {
        let [name, telNumber] = person.split(" ");
        phoneBookObject[name] = telNumber;
    }
    for (let key in phoneBookObject) {
        console.log(`${key} -> ${phoneBookObject[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);