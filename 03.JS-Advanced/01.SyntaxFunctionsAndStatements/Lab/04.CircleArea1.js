function circleArea1(input) {

    if (typeof (input) == 'number') {
        console.log((Math.pow(input, 2) * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (input)}.`);
    }
}
circleArea1(5);
circleArea1('name');