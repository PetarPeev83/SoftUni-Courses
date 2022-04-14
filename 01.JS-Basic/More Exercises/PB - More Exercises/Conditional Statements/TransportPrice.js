function transportPrice(input) {

    let n = Number(input[0])
    let timeOfTheDay = input[1]

    let price = 0.0

    switch (timeOfTheDay) {
        case "day":
            if (n >= 100) { price = n * 0.06 }
            else if (n >= 20) { price = n * 0.09 }
            else { price = 0.70 + (n * 0.79) }; break;
        case "night":
            if (n >= 100) { price = n * 0.06 }
            else if (n >= 20) { price = n * 0.09 }
            else { price = 0.70 + (n * 0.90) }; break;
    }
    console.log(price.toFixed(2))
}
transportPrice(["180", "night"])