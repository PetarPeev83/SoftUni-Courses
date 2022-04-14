class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.availableProductsTypes = [];
    }
    loadingVegetables(vegetables) {
        for (let current of vegetables) {
            let [type, quantity, price] = current.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if (!this.availableProductsTypes.includes(type)) {
                this.availableProducts.push({
                    quantity: quantity,
                    price: price,
                });
                this.availableProductsTypes.push(type);
            } else {
                let index = this.availableProductsTypes.indexOf(type);
                this.availableProducts[index].quantity += quantity;
                if (price > this.availableProducts[index].price) {
                    this.availableProducts[index].price = price;
                };
            };
        };
        let result = [];
        this.availableProductsTypes.map(t => result.push(`${t}`));
        return 'Successfully added ' + result.join(', ');
    };
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let current of selectedProducts) {
            let [currentType, currentQty] = current.split(' ');
            currentQty = Number(currentQty);
            if (this.availableProductsTypes.includes(currentType)) {
                let index = this.availableProductsTypes.indexOf(currentType);
                if (currentQty > this.availableProducts[index].quantity) {
                    throw new Error(`The quantity ${currentQty} for the vegetable ${currentType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                } else {
                    totalPrice += currentQty * this.availableProducts[index].price;
                    this.availableProducts[index].quantity -= currentQty;
                };
            } else {
                throw new Error(`${currentType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            };
        };
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    };
    rottingVegetable(type, quantity) {
        quantity = Number(quantity);
        if (this.availableProductsTypes.includes(type)) {
            let i = this.availableProductsTypes.indexOf(type);
            if (quantity > this.availableProducts[i].quantity) {
                this.availableProducts[i].quantity = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else {
                this.availableProducts[i].quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`;
            };
        } else {
            throw new Error(`${type} is not available in the store.`);
        };
    };
    revision() {
        let result = ["Available vegetables:"];
        let availableProducts = {};
        for (let i = 0; i < this.availableProductsTypes.length; i++) {
            availableProducts[this.availableProductsTypes[i]] = this.availableProducts[i];
        };
        let sorted = Object.entries(availableProducts).sort((a, b) => a[1].price - b[1].price);
        sorted.forEach(x => result.push(`${x[0]}-${x[1].quantity}-$${x[1].price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        
        return result.join('\n');
    }
};

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Okra 2.5 3.5", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// //Successfully added Okra, Beans, Celery

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
// //Successfully added Okra, Beans, Celery
// // Great choice! You must pay the following amount $3.50.
// // Great choice! You must pay the following amount $27.65.
// // Uncaught Error: Banana is not available in the store, your current bill is $0.00.

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// //Successfully added Okra, Beans, Celery
// // Some quantity of the Okra has been removed.
// // The entire quantity of the Okra has been removed.
// // Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));

console.log(vegStore.revision());
//Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Great choice! You must pay the following amount $26.15.
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.

