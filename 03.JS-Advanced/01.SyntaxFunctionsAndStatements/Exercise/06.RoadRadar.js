function roadRadar(speed, area) {
    let restrictions = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    if (speed <= restrictions[area]) {
        console.log(`Driving ${speed} km/h in a ${restrictions[area]} zone`);
    } else {
        let overSpeed = speed - restrictions[area];
        let status = '';
        if (overSpeed > 40) {
            status = 'reckless driving';
        } else if (overSpeed > 20) {
            status = 'excessive speeding';
        } else {
            status = 'speeding';
        }
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${restrictions[area]} - ${status}`);
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');