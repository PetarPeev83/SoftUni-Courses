function lunchBreak(input) {

    let filmName = input[0]
    let episodeTime = Number(input[1])
    let brakeTime = Number(input[2])

    let lunchTime = brakeTime / 8
    let restTime = brakeTime / 4

    if (brakeTime >= (lunchTime + restTime + episodeTime)) {
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(brakeTime - (episodeTime + lunchTime + restTime))} minutes free time.`)
    }
    else 
    {console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil((lunchTime + restTime + episodeTime) - brakeTime)} more minutes.`)}

}
lunchBreak(["Game of Thrones", "60", "96"])