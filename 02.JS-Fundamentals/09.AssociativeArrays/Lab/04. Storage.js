function storage(input) {

    let storageList = new Map();
    for (let current of input) {
        let [product, quantity] = current.split(" ");
        if (storageList.has(product)) {
            storageList.set(product, Number(storageList.get(product)) + Number(quantity))
        } else {
            storageList.set(product, quantity);
        }
    }
    for (let [key, value] of storageList) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);