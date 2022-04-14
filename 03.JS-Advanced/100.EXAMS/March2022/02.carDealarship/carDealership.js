class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0
    }
    addCar(model, horsepower, price, mileage) {
        if (model == "" || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        };

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    };

    sellCar(model, desiredMileage) {
        if (!this.availableCars.find(element => model == element.model)) {
            throw new Error(`${model} was not found!`)
        };

        let price = 0;

        for (let current of this.availableCars) {
            if (current.model == model) {
                if (desiredMileage >= current.mileage) {
                    price = current.price;
                } else if (desiredMileage + 40000 >= current.mileage) {
                    price = current.price * 0.95;
                } else {
                    price = current.price * 0.9;
                };
                this.soldCars.push({
                    model,
                    horsepower: current.horsepower,
                    price
                });
                let index = this.availableCars.indexOf(current);
                this.availableCars.splice(index, 1);
                this.totalIncome += price;
                return `${model} was sold for ${price.toFixed(2)}$`;
            };
        };

    };
    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        } else {
            let output = ["-Available cars:"];
            this.availableCars.forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
            return output.join('\n');
        };
    };
    salesReport(criteria) {
        let output = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`]

        if (criteria == 'horsepower') {
            let sortedByHP = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
            sortedByHP.forEach(car => output.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`));
        } else if (criteria == 'model') {
            let sortedByModel = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            sortedByModel.forEach(car => output.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`));
        } else {
            throw new Error('Invalid criteria!');
        };
        return output.join('\n');
    };
};


// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// Output 1
// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!

// // Input 2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));
// // console.log(dealership.sellCar('Mercedes', 110000));

// // Output 2
// // Toyota Corolla was sold for 3500.00$
// // Mercedes C63 was sold for 26100.00$

// // Input 3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// Output 3
// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$


// Input 4
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));

// Output 4
// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$

