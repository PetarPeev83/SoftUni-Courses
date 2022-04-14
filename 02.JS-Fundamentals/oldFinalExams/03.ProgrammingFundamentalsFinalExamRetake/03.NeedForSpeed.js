function needForSpeed(input) {
    let n = Number(input.shift());
    let carList = {};
    for (let i = 0; i < n; i++) {
        let [carName, km, fuelCount] = input.shift().split("|");
        carList[carName] = {
            mileage: Number(km),
            fuel: Number(fuelCount),
        }
    }
    while (input[0] !== "Stop") {
        let [command, car, token1, token2] = input.shift().split(" : ");
        if (command === "Drive") {
            drive(car, Number(token1), Number(token2));
        } else if (command === "Refuel") {
            refuel(car, Number(token1));
        } else if (command === "Revert") {
            revert(car, Number(token1));
        }
    }

    let sorted = Object.entries(carList).sort(compare);
    for (let [carPrint, obj] of sorted) {
        console.log(`${carPrint} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`)
    }

    function drive(car, distance, fuel) {
        if (carList[car].fuel < fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            carList[car].mileage += distance;
            carList[car].fuel -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        }
        if (carList[car].mileage >= 100000) {
            delete carList[car];
            console.log(`Time to sell the ${car}!`);
        }
    }
    function refuel(car, fuel) {
        carList[car].fuel += fuel;
        if (carList[car].fuel > 75) {
            let fuelToAdd = (fuel + 75) - carList[car].fuel;
            carList[car].fuel = 75;
            console.log(`${car} refueled with ${fuelToAdd} liters`);
        } else {
            console.log(`${car} refueled with ${fuel} liters`);
        }
    }
    function revert(car, kilometers) {
        carList[car].mileage -= kilometers;
        if (carList[car].mileage < 10000) {
            carList[car].mileage = 10000;
        } else {
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }
    function compare(a, b) {
        return (b[1].mileage - a[1].mileage) || (a[0].localeCompare(b[0]));
    }
}
// needForSpeed(['3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop']);
needForSpeed(['4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);