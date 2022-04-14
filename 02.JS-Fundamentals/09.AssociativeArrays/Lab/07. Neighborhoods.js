function neighborhoods(input) {
    let neighborhoodsList = new Map();
    let neighborhoodsArr = input.shift().split(", ");
    neighborhoodsArr.forEach(element => neighborhoodsList.set(element, []));
    for (let current of input) {
        [strName, person] = current.split(" - ");
        if (neighborhoodsList.has(strName)) {
            neighborhoodsList.get(strName).push(person);
        }
    }
    let sorted = Array.from(neighborhoodsList).sort((a, b) => b[1].length - a[1].length);
    for (let element of sorted) {
        console.log(`${element[0]}: ${element[1].length}`);
        for (let name of element[1]) {
            console.log(`--${name}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);