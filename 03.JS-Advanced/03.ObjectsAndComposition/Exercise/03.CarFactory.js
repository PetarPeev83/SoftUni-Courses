function carFactory(carDetailsObj) {
    const result = {
        model: carDetailsObj.model,
        engine: {},
        carriage: {},
        wheels: [],
    };
    if (carDetailsObj.power <= 90) {
        result.engine = { power: 90, volume: 1800 };
    } else if (carDetailsObj.power <= 120) {
        result.engine = { power: 120, volume: 2400 };
    } else if (carDetailsObj.power <= 200) {
        result.engine = { power: 200, volume: 3500 };
    }
    if (carDetailsObj.carriage == 'coupe') {
        result.carriage = { type: 'coupe', color: carDetailsObj.color };
    } else {
        result.carriage = { type: 'hatchback', color: carDetailsObj.color };
    }
    if (carDetailsObj.wheelsize % 2 == 0) {
        carDetailsObj.wheelsize--; 
    }
    result.wheels = new Array(4).fill(carDetailsObj.wheelsize, 0, 4);

    // console.log(result);
    return result;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);