function agency(input) {

    let town = String(input[0])
    let included = String(input[1])
    let vip = String(input[2])
    let days = Number(input[3])
    let dayPrice = 0

    if (days < 1) {
        console.log("Days must be positive number!")
        return;
    }
    if (town === "Bansko") {
        switch (included) {
            case "withEquipment":
                dayPrice = 100
                if (vip === "yes") {
                    dayPrice *= 0.9
                } break;
            case "noEquipment":
                dayPrice = 80
                if (vip === "yes") {
                    dayPrice *= 0.95
                } break;
            default: console.log("Invalid input!"); return;
        }
    } else if (town === "Borovets") {
        switch (included) {
            case "withEquipment":
                dayPrice = 100
                if (vip === "yes") {
                    dayPrice *= 0.9
                }; break;
            case "noEquipment":
                dayPrice = 80
                if (vip === "yes") {
                    dayPrice *= 0.95
                }; break;
            default: console.log("Invalid input!"); return;
        }
    }
    else if (town === "Burgas") {
        switch (included) {
            case "withBreakfast":
                dayPrice = 130
                if (vip === "yes") {
                    dayPrice *= 0.88
                }; break;
            case "noBreakfast":
                dayPrice = 100
                if (vip === "yes") {
                    dayPrice *= 0.93
                }; break;
            default: console.log("Invalid input!"); return;
        }
    } else if (town === "Varna") {
        switch (included) {
            case "withBreakfast":
                dayPrice = 130
                if (vip === "yes") {
                    dayPrice *= 0.88
                }; break;
            case "noBreakfast":
                dayPrice = 100
                if (vip === "yes") {
                    dayPrice *= 0.93
                }; break;
            default: console.log("Invalid input!"); return;
        }
    }
    else { console.log("Invalid input!"); return; };

    let totalPrice = days * dayPrice

    if (days > 7) {
        totalPrice -= dayPrice
    }
    console.log(`The price is ${(totalPrice).toFixed(2)}lv! Have a nice time!`)
}
agency(['Borovets',
    'noEquipment',
    'yes',
    '6'])