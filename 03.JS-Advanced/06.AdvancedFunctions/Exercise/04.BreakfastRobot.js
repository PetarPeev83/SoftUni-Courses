function breakfastRobot() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    let products = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }
    function restock(element, quantity) {
        storage[element] += Number(quantity);
        return 'Success';
    }
    function prepare(product, quantity) {
        let productsNeeded = {};
        for (let currentProduct in products[product]) {
            if (storage[currentProduct] >= products[product][currentProduct] * Number(quantity)) {
                productsNeeded[currentProduct] = products[product][currentProduct];
            } else {
                return `Error: not enough ${currentProduct} in stock`;
            }
        }
        for (let current in productsNeeded) {
            storage[current] -= (productsNeeded[current] * Number(quantity));
        }
        return 'Success';
    }
    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }
    function solution(input) {
        [operation, item, qty] = input.split(' ');
        if (operation == 'restock') {
            return restock(item, qty);
        } else if (operation == 'prepare') {
            return prepare(item, qty);
        } else if (operation == 'report') {
            return report();
        }
    }
    return solution;
}
let manager = breakfastRobot();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));