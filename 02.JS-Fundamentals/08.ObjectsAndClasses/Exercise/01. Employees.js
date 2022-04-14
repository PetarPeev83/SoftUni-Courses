function employees(names) {

    // for (let currentPerson of names) {
    //     let personInfo = {};
    //     personInfo.name = currentPerson;
    //     personInfo.number = currentPerson.length;
    //     console.log(`Name: ${personInfo.name} -- Personal Number: ${personInfo.number}`);
    // }
    for (let currentPerson of names) {
        let personInfo = {
            name: currentPerson,
            number: currentPerson.length
        };
        console.log(`Name: ${personInfo.name} -- Personal Number: ${personInfo.number}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);