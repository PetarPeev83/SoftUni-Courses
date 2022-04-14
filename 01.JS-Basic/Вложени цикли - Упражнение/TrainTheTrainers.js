function trainTheTrainers(input) {

    let n = Number(input[0]);
    let ratingsCounter = 0
    let totalRating = 0

    for (let i = 1; input[i] !== "Finish"; i += n) {
        let examName = String(input[i])
        let currentRating = 0
        i++

        for (let x = i; x < n + i; x++) {
            currentRating += Number(input[x])
            ratingsCounter++
        }
        console.log(`${examName} - ${(currentRating / n).toFixed(2)}.`)
        totalRating += currentRating
    }
    console.log(`Student's final assessment is ${(totalRating / ratingsCounter).toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


