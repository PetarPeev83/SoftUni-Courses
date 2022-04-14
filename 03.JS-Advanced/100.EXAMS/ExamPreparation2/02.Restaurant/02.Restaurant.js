class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(productsArr) {
        for (let current of productsArr) {
            let [name, qty, price] = current.split(' ');
            qty = Number(qty);
            price = Number(price);
            if (price <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] += qty;
                } else {
                    this.stockProducts[name] = qty;
                };
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${qty} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${qty} ${name}`);
            }
        };
        return this.history.join('\n');
    };
    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: {},
                price: price,
            };
            for (let current of neededProducts) {
                let splitted = current.split(' ');
                let product = splitted[0]
                let qty = Number(splitted[1])
                // let qty = Number(splitted.splice(splitted.length - 1, 1));
                // let product = splitted.join(' ');
                this.menu[meal].products[product] = qty;
            };
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        };
        if (Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        };
    };
    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        };
        let result = [];
        for (let meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`);
        }
        return result.join('\n');
    };
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        };
        let neededProducts = this.menu[meal].products;
        for (let current of Object.keys(neededProducts)) {
            if (!this.stockProducts.hasOwnProperty(current) || this.stockProducts[current] < neededProducts[current]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            };
        };
        for (let currentProduct of Object.keys(neededProducts)) {
            this.stockProducts[currentProduct] -= neededProducts[currentProduct];
        };
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    };
};

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.stockProducts);
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.menu);
// // Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// // Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?

// // let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());
// // frozenYogurt - $ 9.99
// Pizza - $ 15.55

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 10', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.stockProducts);
// Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.
