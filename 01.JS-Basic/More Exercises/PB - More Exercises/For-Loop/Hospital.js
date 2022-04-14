function hospital(input) {

    let period = Number(input[0])
    let doctors = 7
    let treated = 0
    let untreated = 0
    let days = 0

    for (let i = 1; i <= period; i++) {

        days++

        if ((days % 3 == 0) && (untreated > treated)) {
            doctors++
        }

        if (doctors >= Number(input[i])) {
            treated += Number(input[i])
        }

        else {
            untreated += (Number(input[i]) - doctors)
            treated += doctors
        }

    }
    console.log(`Treated patients: ${treated}.`)
    console.log(`Untreated patients: ${untreated}.`)
}
hospital(['6', '25', '25', '25', '25','25','2'])