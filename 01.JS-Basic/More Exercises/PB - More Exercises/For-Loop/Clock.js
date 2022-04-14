function clock() {

    let minutes = 0
    let hour = 0

    for (let i = 0; i < 1440; i++) {

        if (minutes == 60) {
            hour++
            minutes = 0
        }
        console.log(`${hour} : ${minutes}`)

        minutes++

    }
}
clock()