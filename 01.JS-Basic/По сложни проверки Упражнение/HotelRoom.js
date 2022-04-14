function hotelRoom(input) {

    let mounth = input[0]
    let nightNum = Number(input[1])

    let priceApartment = 0.0
    let priceStudio = 0.0

    if (mounth === "May" || mounth === "October") {
        if (nightNum > 14) {
            priceStudio = 50 * 0.7
            priceApartment = 65 * 0.9
        }
        else if (nightNum > 7) {
            priceStudio = 50 * 0.95
            priceApartment = 65
        }
        else {
            priceStudio = 50
            priceApartment = 65
        }
    }
    else if (mounth === "June" || mounth === "September") {
        if (nightNum > 14) {
            priceStudio = 75.2 * 0.8
            priceApartment = 68.7 * 0.9
        }
        else {
            priceStudio = 75.2
            priceApartment = 68.7
        }
    }
    else if (mounth === "July" || mounth === "August") {
        if (nightNum > 14) {
            priceStudio = 76
            priceApartment = 77 * 0.9
        }
        else {
            priceStudio = 76
            priceApartment = 77
        }
    }
    console.log(`Apartment: ${(nightNum * priceApartment).toFixed(2)} lv.`)
    console.log(`Studio: ${(nightNum * priceStudio).toFixed(2)} lv.`)

}

hotelRoom(["June","14"])

