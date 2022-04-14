function coffeeMachine(input) {

    let drink = input[0];
    let sugar = input[1];
    let drinksNum = Number(input[2]);
    let price = 0;

    switch (drink) {
        case "Espresso":
            switch (sugar) {
                case "Without": price = 0.9 * drinksNum * 0.65; break;
                case "Normal": price = 1 * drinksNum; break;
                case "Extra": price = 1.2 * drinksNum; break;
            }
            if (drinksNum >= 5) {
                price *= 0.75;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": price = 1 * drinksNum * 0.65; break;
                case "Normal": price = 1.2 * drinksNum; break;
                case "Extra": price = 1.6 * drinksNum; break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without": price = 0.5 * drinksNum * 0.65; break;
                case "Normal": price = 0.6 * drinksNum; break;
                case "Extra": price = 0.7 * drinksNum; break;
            }
            break;
    }
    if (price > 15) {
        price *= 0.8;
    }
    console.log(`You bought ${drinksNum} cups of ${drink} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso", "Without", "10"])