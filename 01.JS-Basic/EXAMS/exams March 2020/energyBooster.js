function energyBooster(input) {

    let fruit = input[0]
    let size = input[1]
    let setsNum = Number(input[2])
    let price = 0

    switch (fruit) {
        case "Watermelon": switch (size) {
            case "small": price = setsNum * 56 * 2; break;
            case "big": price = setsNum * 28.7 * 5; break;
        };break;
        case "Mango": switch (size) {
            case "small": price = setsNum * 36.66 * 2; break;
            case "big": price = setsNum * 19.6 * 5; break;
        };break;
        case "Pineapple": switch (size) {
            case "small": price = setsNum * 42.1 * 2; break;
            case "big": price = setsNum * 24.8 * 5; break;
        };break;
        case "Raspberry": switch (size) {
            case "small": price = setsNum * 20 * 2; break;
            case "big": price = setsNum * 15.20 * 5; break;
        };break;
    }
    if (price >= 400 && price <= 1000) {
        price *= 0.85
    }
    else if (price > 1000) {
        price *= 0.5
    }

    console.log(`${price.toFixed(2)} lv.`)

}
energyBooster(['Watermelon', 'big', '4'])