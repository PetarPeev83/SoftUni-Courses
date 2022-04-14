function addressBook(input) {
    let list = {};
    for (let person of input) {
        let [name, address] = person.split(":");
        list[name] = address;
    }
    let sorted = Object.keys(list).sort((a, b) => a.localeCompare(b));
    for (let current of sorted) {
        console.log(`${current} -> ${list[current]}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);