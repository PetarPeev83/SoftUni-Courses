function journey(input) {

    let budget = Number(input[0])
    let season = input[1]

    let money = 0.0
    let type = ""
    let destination = ""

    if (budget <= 100) {
        destination = "Bulgaria"
        switch (season) {
            case "summer": money = budget * 0.3
                type = "Camp"; break;
            case "winter": money = budget * 0.7
                type = "Hotel"; break;
        }
    }
    else if (budget <= 1000) {
        destination = "Balkans"
        switch (season) {
            case "summer": money = budget * 0.4
                type = "Camp"; break;
            case "winter": money = budget * 0.8
                type = "Hotel"; break;
        }
    }
    else if (budget > 1000) {
        destination = "Europe"
        money = budget * 0.9
        type = "Hotel"
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${money.toFixed(2)}`)
}

journey(["312", "summer"])