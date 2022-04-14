function weatherForecast(input) {

    let degreece = Number(input[0])

    if (degreece >= 26.00) {
        if (degreece <= 35.00) {
            console.log("Hot")
        }
    }
    if (degreece >= 20.01) {
        if (degreece <= 25.9) {
            console.log("Warm")
        }
    }
    if (degreece >= 15.00) {
        if (degreece <= 20.00) {
            console.log("Mild")
        }
    }
    if (degreece >= 12.00) {
        if (degreece <= 14.9) {
            console.log("Cool")
        }
    }
    if (degreece >= 5.00) {
        if (degreece <= 11.9) {
            console.log("Cold")
        }
    }
    else { console.log("unknown") }
}
weatherForecast(["16.5'"])