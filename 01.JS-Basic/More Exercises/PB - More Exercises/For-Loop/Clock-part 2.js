function clock2() {

    let seconds = 0
    let minutes = 0
    let hour = 0

    for (let i = 0; i < 24 * 60 * 60; i++) {

        if (seconds == 60) {
            minutes++
            seconds = 0

            if (minutes == 60) {
                hour++
                minutes = 0
            }
        }
        console.log(`${hour} : ${minutes} : ${seconds}`)

        seconds++

    }
}
clock2()