class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        } else {
            this.spaceAvailable -= spaceRequired;
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            });
            return `The ${plantName} has been successfully planted in the garden.`;
        };
    };

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        };
        for (let current of this.plants) {
            if (current.plantName == plantName) {
                if (current.ripe == true) {
                    throw new Error(`The ${plantName} is already ripe.`);
                } else {
                    current.ripe = true;
                    current.quantity = quantity;
                    if (quantity == 1) {
                        return `${quantity} ${plantName} has successfully ripened.`;
                    } else {
                        return `${quantity} ${plantName}s have successfully ripened.`;
                    }
                };
            };
        };
        throw new Error(`There is no ${plantName} in the garden.`);
    };

    harvestPlant(plantName) {
        for (let current of this.plants) {
            if (current.plantName == plantName) {
                if (current.ripe == false) {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
                } else {
                    this.storage.push({
                        plantName,
                        quantity: current.quantity
                    });
                    this.spaceAvailable += current.spaceRequired;

                    let index = this.plants.indexOf(current);
                    this.plants.splice(index, 1);

                    return `The ${plantName} has been successfully harvested.`
                };
            };
        }
        throw new Error(`There is no ${plantName} in the garden.`);
    };

    generateReport() {
        let result = [`The garden has ${this.spaceAvailable} free space left.`];
        // let plantsInTheGarden = "Plants in the garden: ";
        let plantsArr = [];
        let storageArr = [];

        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        sortedPlants.map(plant => plantsArr.push(`${plant.plantName}`));

        result.push(`Plants in the garden: ${plantsArr.join(', ')}`);

        if (this.storage.length == 0) {
            result.push("Plants in storage: The storage is empty.");
        } else {
            this.storage.map(plant => storageArr.push(`${plant.plantName} (${plant.quantity})`));
            result.push(`Plants in storage: ${storageArr.join(', ')}`);
        };

        return result.join('\n');
    };
};


// Input 1
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// // Output 1
// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // Uncaught Error Error: Not enough space in the garden.

// // Input 2
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// Output 2
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The orange is already ripe.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// Output 3
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: There is no olive in the garden.


// Input 4
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// Output 4
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The quantity cannot be zero or negative.

// Input 5
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));


// Output 5
// The apple has been successfully planted in the garden.

// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: There is no olive in the garden.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

// Output 6
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: The raspberry cannot be harvested before it is ripe.

// Input 6
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

// Output 6
// The apple has been successfully planted in the garden.

// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
