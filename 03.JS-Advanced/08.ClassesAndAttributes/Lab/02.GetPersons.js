function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let result = [];
    let personsInfo = [['Anna', 'Simpson', 22, 'anna@yahoo.com'], ['SoftUni'],
    ['Stephan', 'Johnson', 25], ['Gabriel', 'Peterson', 24, 'g.p@gmail.com']];
    let person;
    for (let currentPersonInfo of personsInfo) {
        person = new Person(...currentPersonInfo);
        result.push(person);
    }
    // console.log(result);
    return result;
}
getPersons();