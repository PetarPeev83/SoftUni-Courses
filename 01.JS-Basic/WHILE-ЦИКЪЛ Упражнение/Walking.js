function walking(input) {

    let goal = 10000
    let i = 0
    let score = 0

    while (score <= goal) {

        let dailySteps = input[i]

        if (dailySteps === "Going home") {
            score += Number(input[i + 1]);
            break;
        } else {
            score += Number(dailySteps)
        }
        i++
    }
    if (score >= goal) {
        console.log("Goal reached! Good job!")
        console.log(`${score - goal} steps over the goal!`)
    } else {
        console.log(`${goal - score} more steps to reach goal.`)
    }
}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])

