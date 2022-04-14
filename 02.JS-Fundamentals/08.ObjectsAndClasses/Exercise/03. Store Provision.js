function storeProvision(inStore, ordered) {
  
    let inStoreListObj = {};
    for (let i = 0; i < inStore.length; i += 2) {
        let product = inStore[i];
        let quantity = Number(inStore[i + 1]);
        inStoreListObj[product] = quantity;
    }
    for (let q = 0; q < ordered.length; q += 2) {
        let product = ordered[q];
        let quantity = Number(ordered[q + 1]);
        if (Object.keys(inStoreListObj).includes(product)) {
            inStoreListObj[product] += quantity;
        } else {
            inStoreListObj[product] = quantity;
        }
    }
    let arrOfProducts = Object.keys(inStoreListObj);
    for (let currentProduct of arrOfProducts) {
        console.log(`${currentProduct} -> ${inStoreListObj[currentProduct]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);