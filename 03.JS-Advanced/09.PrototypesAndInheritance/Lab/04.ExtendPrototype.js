function extendPrototype(classToExtend) {

    classToExtend.prototype.species = 'Human';  // vkarvam nov atribut v klasa;
    classToExtend.prototype.toSpeciesString = function () {   // vkarvam funkcia v klasa;
        return `I am a ${this.species}. ${this.toString()}`;
    };

};

//nadolu e vzeto ot judje za da probvam funkciata ;

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
};

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, subject: ${this.subject})`;
    }
};

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, course: ${this.course})`;
    }
};

extendPrototype(Person);
let p = new Person("Pesho", "email@hit.bg");
console.log(p.species)   //('Human',"No species property");
console.log(p.toSpeciesString())   //("I am a Human. Person (name: Pesho, email: email@hit.bg)");