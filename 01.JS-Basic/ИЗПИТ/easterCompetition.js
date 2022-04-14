function easterCompetition(input) {

    let easterBreadNum = Number(input[0])
    let chiefName = input[1]
    let breadMakers = 0
    let bestPoints = 0
    let bestChief = ''
    let index = 2

    while (breadMakers < easterBreadNum) {

        let currentPoints = 0

        for (let i = index; input[i] !== "Stop"; i++) {
            index++
            let currentCheck = Number(input[i])
            currentPoints += currentCheck
        }
        console.log(`${chiefName} has ${currentPoints} points.`)
        if (currentPoints > bestPoints) {
            console.log(`${chiefName} is the new number 1!`)
            bestPoints = currentPoints
            bestChief = chiefName
        }
        index++
        chiefName = String(input[index])
        index++
        breadMakers++
    }
    console.log(`${bestChief} won competition with ${bestPoints} points!`)
}
easterCompetition(["2","Chef Angelov","9","9","9","Stop","Chef Rowe","10","10","10","10","Stop"])

//(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"])