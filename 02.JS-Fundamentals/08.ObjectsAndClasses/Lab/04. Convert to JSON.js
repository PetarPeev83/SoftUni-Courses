function toJSON(name, last, hairColor) {

    let person = {
        name: name,
        lastName: last,
        hairColor: hairColor
    }

    console.log(JSON.stringify(person));

}
toJSON('George', 'Jones', 'Brown');