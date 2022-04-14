function juiceFlavors(input) {
    let flavors = {};
    let bottles = {};

    for (let current of input) {
        let [flavor, qty] = current.split(' => ');
        qty = Number(qty);

        let currentBottles = 0;
        if (qty >= 1000 && Object.keys(flavors).includes(flavor)) {
            qty += flavors[flavor];
            while (qty >= 1000) {
                currentBottles++;
                qty -= 1000;
            };
            flavors[flavor] += qty;
            if (bottles[flavor]) {
                bottles[flavor] += currentBottles;
            } else {
                bottles[flavor] = currentBottles;
            }
        } else if (qty >= 1000 && !Object.keys(flavors).includes(flavor)) {
            while (qty >= 1000) {
                currentBottles++;
                qty -= 1000;
            };
            flavors[flavor] = qty;
            if (bottles[flavor]) {
                bottles[flavor] += currentBottles;
            } else {
                bottles[flavor] = currentBottles;
            }
        } else if (Object.keys(flavors).includes(flavor) && qty + flavors[flavor] >= 1000) {
            qty += flavors[flavor];
            while (qty >= 1000) {
                currentBottles++;
                qty -= 1000;
            };
            flavors[flavor] += qty;
            if (bottles[flavor]) {
                bottles[flavor] += currentBottles;
            } else {
                bottles[flavor] = currentBottles;
            }
        } else {
            if (!flavors[flavor]) {
                flavors[flavor] = qty;
            } else {
                flavors[flavor] += qty;
            }
        };
    };
    if (Object.keys(bottles).length > 0) {
        Object.entries(bottles).forEach(element => console.log(element[0] + ' => ' + element[1]));
    };
};
// juiceFlavors(['Orange => 20',
//     'Peach => 32',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);