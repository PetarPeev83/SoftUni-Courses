function club(input) {

    let target = Number(input[0])
    let index = 1
    let profit = 0
    let coktailName = ''

    while (profit < target && input[index] !== "Party!") {

        coktailName = input[index]

        let price = Number(coktailName.length)

        index++

        let coktailsNum = Number(input[index])
        let currentPrice = coktailsNum * price

        if (currentPrice % 2 !== 0) {
            currentPrice *= 0.75
            profit += currentPrice
        } else {
            profit += currentPrice
        }
        index++
    }
    if (target > profit) {
        console.log(`We need ${(target - profit).toFixed(2)} leva more.`)
    } else {
        console.log("Target acquired.")
    }
    console.log(`Club income - ${(profit).toFixed(2)} leva.`)
}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"])

//(["500", "Bellini", "6", "Bamboo", "7", "Party!"])