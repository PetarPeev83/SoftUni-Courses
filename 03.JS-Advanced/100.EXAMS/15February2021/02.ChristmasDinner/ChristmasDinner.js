class ChristmasDinner {
    constructor(budget) {
        if (Number(budget) < 0) {
            throw new Error("The budget cannot be a negative number");
        };
        this.budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.myDishes = {};
    };
    shopping(input) {
        const product = input[0];
        const price = Number(input[1]);

        if (this.budget >= price) {
            this.budget -= price;
            this.products.push(product);
            return `You have successfully bought ${product}!`;
        } else {
            throw new Error("Not enough money to buy this product");
        };
    };

    recipes(recipe) {
        for (let current of recipe.productsList) {
            if (!this.products.includes(current)) {
                throw new Error("We do not have this product");
            };
        };
        this.dishes.push(recipe);
        this.myDishes[recipe.recipeName] = recipe.productsList;
        return `${recipe.recipeName} has been successfully cooked!`;
    };

    inviteGuests(name, dish) {
        let gotTheDish = false;
        let alreadySigned = false;
        for (let current of this.dishes) {
            if (current.recipeName == dish) {
                gotTheDish = true;
                if (!Object.keys(this.guests).includes(name)) {
                    this.guests[name] = dish;
                    alreadySigned = true;
                    return `You have successfully invited ${name}!`;
                };
            };
        };
        if (gotTheDish == false) {
            throw new Error("We do not have this dish");
        };
        if (alreadySigned == true) {
            throw new Error("This guest has already been invited");
        };
    };

    showAttendance() {
        if (this.guests.length == 0) {
            return;
        };
        let result = Object.entries(this.guests)
            .map(([name, dish]) => `${name} will eat ${dish}, which consists of ${(this.myDishes[dish]).join(', ')}`);
        return result.join('\n');
    };
};

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
console.log(dinner.products);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
console.log(dinner.dishes);

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
console.log(dinner.guests);

console.log(dinner.showAttendance());

// Corresponding output:
// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt
