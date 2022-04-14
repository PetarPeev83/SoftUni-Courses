function petsFood(input) {

    let days = Number(input[0])
    let allFood = Number(input[1])
    let i = 2
    let dogFood = 0
    let catFood = 0
    let daysCount = 0
    let totalDailyFood = 0
    let bisquits = 0
    let totalEatenFood = 0

    while (days !== 0) {

        let currentPosition = Number(input[i])

        if (i % 2 === 0) {
            dogFood += currentPosition
            totalDailyFood += currentPosition
            totalEatenFood += currentPosition
        } else {
            catFood += currentPosition
            totalDailyFood += currentPosition
            totalEatenFood += currentPosition
            daysCount++
            days--
            if (daysCount % 3 === 0) {
                bisquits = bisquits + totalDailyFood * 0.1
            } else { totalDailyFood = 0 }
        }
        i++
    }
    console.log(`Total eaten biscuits: ${Math.trunc(bisquits)}gr.`)
    console.log(`${((totalEatenFood / allFood) * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${((dogFood / totalEatenFood) * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${((catFood / totalEatenFood) * 100).toFixed(2)}% eaten from the cat.`)
}
petsFood(['3', '1000', '300', '20', '100', '30', '110', '40'])