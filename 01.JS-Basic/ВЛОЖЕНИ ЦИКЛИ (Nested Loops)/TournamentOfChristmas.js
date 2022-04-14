function tournamentChristmas(input) {

    let tournamentDays = Number(input[0])
    let indexCounter = 1
    let dayCounter = 1
    let totalProfit = 0
    let totalWins = 0

    for (let i = dayCounter; i <= tournamentDays; i++) {
        let dayProfit = 0
        let wins = 0
        let loses = 0
        for (let x = indexCounter; input[x] !== "Finish"; x++) {

            indexCounter++

            let result = String(input[x])

            if (result === "win") {
                wins++
                dayProfit += 20
            } else if (result === "lose") {
                loses++
            }
        }
        if (wins > loses) {
            dayProfit *= 1.1
            totalWins++
        } else {
            totalWins--
        }
        indexCounter++
        totalProfit += dayProfit
        dayCounter++
    }
    if (totalWins > 0) {
        totalProfit *= 1.2
        console.log(`You won the tournament! Total raised money: ${(totalProfit).toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${(totalProfit).toFixed(2)}`)
    }
}
tournamentChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])

