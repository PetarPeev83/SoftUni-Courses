function personInfo(first, last, age) {

    let person = {
        firstName: first,
        lastName: last,
        age: Number(age)
    }
    return person;
}
console.log(personInfo("Peter", "Pan", "20"));