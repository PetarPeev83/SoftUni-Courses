function validityChecker(x1, y1, x2, y2) {
    let distance = 0
    let validation = '';

    distance = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    validation = Number.isInteger(distance) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${validation}`);

    distance = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
    validation = Number.isInteger(distance) ? 'valid' : 'invalid';
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${validation}`);

    distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    validation = Number.isInteger(distance) ? 'valid' : 'invalid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validation}`);
}
validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);