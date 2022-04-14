function cats(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let catsArr = [];
    for (let currentCat of input) {
        let [name, age] = currentCat.split(" ");
        let cat = new Cat(name, age);
        catsArr.push(cat);
    }
    for (let catToPrint of catsArr) {
        catToPrint.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);