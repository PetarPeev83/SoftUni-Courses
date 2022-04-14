function car(input) {

    let budget = Number(input[0])
    let season = input[1]
    let carClass = ""
    let carType = ""

    if (budget <= 100) {
        carClass = "Economy class"
        switch (season) {
            case "Summer":
                carType = "Cabrio"
                budget *= 0.35; break;
            case "Winter":
                carType = "Jeep"
                budget *= 0.65; break;
        }
    }
    else if (budget > 100 && budget <= 500) {
        carClass = "Compact class"
        switch (season) {
            case "Summer":
                carType = "Cabrio"
                budget *= 0.45; break;
            case "Winter":
                carType = "Jeep"
                budget *= 0.8; break;
        }

    }
    else if (budget > 500) {
        carClass = "Luxury class"
        carType = "Jeep"
        budget *= 0.9
    }
    console.log (`${carClass}`)
    console.log (`${carType} - ${budget.toFixed(2)}`)
}
car(['450', 'Winter'])