class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    };
    add(element) {
        this.size++;
        this.collection.push(Number(element));
        this.collection.sort((a, b) => a - b);
    };
    remove(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Incorrect index');
        }
        this.size--;
        return this.collection.splice(index, 1);
    };
    get(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Incorrect index');
        }
        return this.collection[index];
    };
};

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
