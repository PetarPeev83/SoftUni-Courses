function divideWithoutRemainder(input) {

    let n = Number(input[0])

    let p1 = 0
    let p2 = 0
    let p3 = 0

    for (let i = 1; i <= n; i++) {

        let p = Number(input[i])

        if (p % 2 == 0) {
            p1 ++
        }
        if (p % 3 == 0) {
            p2 ++
        }
        if (p % 4 == 0) {
            p3 ++
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`)
    console.log(`${(p2 / n * 100).toFixed(2)}%`)
    console.log(`${(p3 / n * 100).toFixed(2)}%`)
}
divideWithoutRemainder(["3", "3", "6", "9"])