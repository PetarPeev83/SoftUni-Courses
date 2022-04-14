function uniquePin(input) {

    let firstMaxNum = Number(input[0])
    let secondMaxNum = Number(input[1])
    let thirdMaxNum = Number(input[2])

    for (let i = 2; i <= firstMaxNum; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        for (let p = 2; p <= secondMaxNum && p <= 7; p++) {

            if (p === 4 || p === 6) {
                continue;
            }
            for (let m = 2; m <= thirdMaxNum; m++) {
                if (m % 2 !== 0) {
                    continue;
                }
                console.log(`${i} ${p} ${m}`)
            }
        }
    }
}
uniquePin(["8", "9", "8"])