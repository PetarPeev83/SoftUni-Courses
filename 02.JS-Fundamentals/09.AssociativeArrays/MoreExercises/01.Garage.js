function garage(input) {
    let garages = {};
    for (let current of input) {
        [garageNum, carInfo] = current.split(" - ");
        carInfo = carInfo.replace(/:/g, " -");
        if (garages.hasOwnProperty(garageNum)) {
            garages[garageNum] += (" , " + carInfo);
        } else {
            garages[garageNum] = carInfo;
        }
    }
    for (let key of Object.keys(garages)) {
        console.log(`Garage № ${key}`);
        let carsInGarage = garages[key].split(" , ");
        carsInGarage.forEach(element => {
            console.log(`--- ${element}`);
        });
    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);