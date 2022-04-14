function uniquePin(input) {

    let firstMaxNum = Number(input[0])
    let secondMaxNum = Number(input[1])
    let thirdMaxNum = Number(input[2])

    for (let i = 2; i <= firstMaxNum; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        for (let p = 2; p <= secondMaxNum && p <= 7; p++) {
           
            let s = p

            if (s > 2 && s % 2 === 0) {
                s--
                continue
            }
            for (let m = 2; m <= thirdMaxNum; m++) {
                if (m % 2 !== 0) {
                    continue;
                }
                console.log(`${i} ${s} ${m}`)
            }
        }
    }
}
uniquePin(["8", "9", "8"])