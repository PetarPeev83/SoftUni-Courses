function examPreparation(input) {

    let maximumBad = Number(input[0]);
    let badScoreCount = 0
    let allScoreCount = 0
    let lastExercies = ""
    let index = 1
    let scoreSum = 0

    while (maximumBad != badScoreCount) {
        let current = input[index]

        if (current === "Enough") {
            console.log(`Average score: ${(scoreSum / allScoreCount).toFixed(2)}`)
            console.log(`Number of problems: ${allScoreCount}`)
            console.log(`Last problem: ${lastExercies}`)
            break;
        }
        else if (index % 2 != 0) {
            lastExercies = current
            allScoreCount++
        }
        else {
            if (current <= 4) {
                badScoreCount++
                scoreSum += Number(current)
            } else {
                scoreSum += Number(current)
            }
        }
        if (maximumBad === badScoreCount) {
            console.log(`You need a break, ${badScoreCount} poor grades.`)
        }
        index++
    }

}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

