function storeCatalogue(input) {

    let productList = {};
    for (let current of input) {
        [product, price] = current.split(' : ');
        let firstLetter = product[0];
        if (productList.hasOwnProperty(firstLetter)) {
            productList[firstLetter][product] = Number(price);
        } else {
            productList[firstLetter] = {
                [product]: Number(price),
            }
        }
    }
    let sorted = Object.entries(productList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let toPrint of sorted) {
        console.log(toPrint[0]);
        let sortedProducts = Object.entries(toPrint[1]).sort((a, b) => a[0].localeCompare(b[0]));
        sortedProducts.forEach(x => console.log(`  ${x[0]}: ${x[1]}`));
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
// storeCatalogue(['Banana : 2',
//     'Rubics Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']);