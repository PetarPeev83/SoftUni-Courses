function timePlus(input) {

    let hour = Number(input[0])
    let min = Number(input[1]) + 15

    if (min >= 60) {
        min = min - 60
        hour += 1
    }

    if (hour >= 24) {
        hour = hour - 24
    }

    if (min < 10) {
        console.log(`${hour}:0${min}`)
    }
    else {
        console.log(`${hour}:${min}`)
    }

}
timePlus(["23", "59"])