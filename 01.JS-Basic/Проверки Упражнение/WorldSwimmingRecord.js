function swimmingRecord(input) {

    let worldRecord = Number(input[0])
    let distance = Number(input[1])
    let timePerMeter = Number(input[2])

    let waterResistence = Math.floor(distance / 15) * 12.5
    let hisTime = distance * timePerMeter + waterResistence

    if (hisTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${hisTime.toFixed(2)} seconds.`)
    }
    else { console.log(`No, he failed! He was ${(hisTime - worldRecord).toFixed(2)} seconds slower.`) }

}
swimmingRecord(["55555.67","3017","5.03"])

