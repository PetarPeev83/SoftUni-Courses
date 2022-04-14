function aluminumJoinery(input) {

    let aluminiumNum = Number(input[0])
    let model = String(input[1])
    let delivery = String(input[2])
    let price = 0

    switch (model) {
        case ("90X130"):
            if (aluminiumNum <= 30) {
                price += 110
            } else if (aluminiumNum > 30 && aluminiumNum <= 60) {
                price += (110 * 0.95)
            } else if (aluminiumNum > 60) {
                price += (110 * 0.92)
            }; break;
        case ("100X150"):
            if (aluminiumNum <= 40) {
                price += 140
            } else if (aluminiumNum > 40 && aluminiumNum <= 80) {
                price += (140 * 0.94)
            } else if (aluminiumNum > 80) {
                price += (140 * 0.90)
            }; break;
        case ("130X180"):
            if (aluminiumNum <= 20) {
                price += 190
            } else if (aluminiumNum > 20 && aluminiumNum <= 50) {
                price += (190 * 0.93)
            } else if (aluminiumNum > 50) {
                price += (190 * 0.88)
            }; break;
        case ("200X300"):
            if (aluminiumNum <= 25) {
                price += 250
            } else if (aluminiumNum > 25 && aluminiumNum <= 50) {
                price += (250 * 0.91)
            } else if (aluminiumNum > 50) {
                price += (250 * 0.86)
            }; break;
    }
    let totalPrice = price * aluminiumNum

    if (delivery === "With delivery") {
        totalPrice += 60
    }
    if (aluminiumNum < 10) {
        console.log("Invalid order");
        return;
    } else if (aluminiumNum > 99) {
        totalPrice *= (0.96)
    }
    console.log(`${totalPrice.toFixed(2)} BGN`)
}
aluminumJoinery(["105", "100X150", "With delivery"])