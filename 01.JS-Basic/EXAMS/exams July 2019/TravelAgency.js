function travelAgency(input) {

    let town = input[0];
    let packType = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let dayPrice = 0;

    if (days < 1) {
        console.log("Days must be positive number!");
        return;
    }
    switch (town) {
        case "Bansko":
        case "Borovets":
            switch (packType) {
                case "withEquipment":
                    dayPrice = 100;
                    if (vip === "yes") {
                        dayPrice *= 0.9;
                    } break;
                case "noEquipment":
                    dayPrice = 80;
                    if (vip === "yes") {
                        dayPrice *= 0.95;
                    } break;
                default:
                    console.log("Invalid input!");
                    return;
            }
            break;
        case "Varna":
        case "Burgas":
            switch (packType) {
                case "withBreakfast":
                    dayPrice = 130;
                    if (vip === "yes") {
                        dayPrice *= 0.88;
                    } break;
                case "noBreakfast":
                    dayPrice = 100;
                    if (vip === "yes") {
                        dayPrice *= 0.93;
                    } break;
                default:
                    console.log("Invalid input!");
                    return;
            }
            break;
        default:
            console.log("Invalid input!");
            return;
    }
    let totalPrice = dayPrice * days;
    if (days > 7) {
        totalPrice -= dayPrice;
    }
    console.log(`The price is ${(totalPrice).toFixed(2)}lv! Have a nice time!`)
}
travelAgency(["Bansko", "withEquipment", "no", "2"])

//(["Gabrovo","noBreakfast","no","3"])

//(["Varna","withBreakfast","no","0"])

//(["Borovets","noEquipment","yes","6"])

