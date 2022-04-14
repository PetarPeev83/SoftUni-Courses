function mountainRun(input) {

    let record = Number(input[0])
    let distance = Number(input[1])
    let timeForMeter = Number(input[2])

    hisTime = Math.floor(distance / 50) * 30 + (distance * timeForMeter)

    if (hisTime < record) {
        console.log(`Yes! The new record is ${hisTime.toFixed(2)} seconds.`)
    }
    else { console.log(`No! He was ${(hisTime - record).toFixed(2)} seconds slower.`) }
}
mountainRun(["1377", "389", "3"])