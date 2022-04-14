function carRegister(input) {
    
    let cars = new Map();

    for (let current of input) {
        let [brand, model, producedCars] = current.split(' | ');
        producedCars = Number(producedCars);

        if (!cars.has(brand)) {
            let modelsMap = new Map();
            modelsMap.set(model, producedCars);
            cars.set(brand, modelsMap);
        } else {
            let carBrand = cars.get(brand);
            if (carBrand.has(model)) {
                let carModelCount = carBrand.get(model);
                carModelCount += producedCars;
                carBrand.set(model, carModelCount);
            } else {
                carBrand.set(model, producedCars);
            };
        };
    };
    for (let currentBrand of cars.entries()) {
        console.log(currentBrand[0]);
        for (let currentModels of currentBrand[1].entries()) {
            console.log(`###${currentModels[0]} -> ${currentModels[1]}`);
        };
    };
};
carRegister(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);