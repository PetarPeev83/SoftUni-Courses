function skeleton(input) {

    let controlMin = Number(input[0])
    let controlSec = Number(input[1])
    let lenght = Number(input[2])
    let secPer100metre = Number(input[3])

    let totalControlTime = controlMin * 60 + controlSec
    let delaySec = lenght / 120 * 2.5
    let totalTimeInSec = lenght * secPer100metre / 100 - delaySec

    if (totalTimeInSec <= totalControlTime) {
        console.log("Marin Bangiev won an Olympic quota!")
        console.log(`His time is ${totalTimeInSec.toFixed(3)}.`)

    }
    else { console.log(`No, Marin failed! He was ${(totalTimeInSec - totalControlTime).toFixed(3)} second slower.`) }

}
skeleton(["1", "20", "1546", "12"])