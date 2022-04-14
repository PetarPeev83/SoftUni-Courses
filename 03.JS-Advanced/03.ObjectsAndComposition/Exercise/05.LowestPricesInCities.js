function lowestPrice(input) {
    let output = {};
    for (let current of input) {
        [town, product, price] = current.split(' | ');
        price = Number(price);
        if (!output.hasOwnProperty(product) || output[product].price > price) {
            output[product] = {
                price,
                town,
            }
        }
    }
    for (let productName in output) {

        console.log(`${productName} -> ${output[productName].price} (${output[productName].town})`);
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);