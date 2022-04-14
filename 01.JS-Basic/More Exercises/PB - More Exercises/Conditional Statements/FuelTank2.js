function fuelTank2(input) {

    let fuelType = input[0]
    let fuelAmount = Number(input[1])
    let clubCard = input[2]

    let price = 0.0

    switch (fuelType) {
        case "Gas":
            if (clubCard === "Yes") {
                price = fuelAmount * (0.93 - 0.08)
            }
            else { price = fuelAmount * 0.93 }; break;
        case "Gasoline":
            if (clubCard === "Yes") {
                price = fuelAmount * (2.22 - 0.18)
            }
            else { price = fuelAmount * 2.22 }; break;
        case "Diesel":
            if (clubCard === "Yes") {
                price = fuelAmount * (2.33 - 0.12)
            }
            else { price = fuelAmount * 2.33 }; break;
    }

    if (fuelAmount >= 20 && fuelAmount <= 25) {
        price = price * 0.92
    }
    else if (fuelAmount > 25) {
        price = price * 0.9
    }
    else if (fuelAmount > 25) {
        price = price * 0.9
    }

    console.log(`${price.toFixed(2)} lv.`)

}
fuelTank2(['Diesel', '19', 'No'])