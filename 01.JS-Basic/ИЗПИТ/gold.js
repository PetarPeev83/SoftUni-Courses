function gold(input) {

    let locations = Number(input[0])
    let expectedGoldPerDay = Number(input[1])
    let days = Number(input[2])
    let locationCounter = 0
    let i = 3

    while (locationCounter < locations) {

        locationCounter++
        let currentGold = 0
        let daysCounter = 0

        while (daysCounter < days) {

            let currentCheck = Number(input[i])
            currentGold += currentCheck
            daysCounter++
            i++
        }
        if (currentGold / days >= expectedGoldPerDay) {
            console.log(`Good job! Average gold per day: ${(currentGold / days).toFixed(2)}.`)
        } else {
            console.log(`You need ${(expectedGoldPerDay - (currentGold / days)).toFixed(2)} gold.`)
        }
        expectedGoldPerDay = Number(input[i])
        i++
        days = Number(input[i])
        i++
    }
}
gold//(["1", "5", "3", "10", "1", "3"])


(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])