function histogram(input) {

    let n = Number(input[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0

    for (let i = 1; i <= n; i++) {

        let p = Number(input[i])

        if (p < 200) {
            p1 += 1
        }
        else if (p >= 200 && p < 400) {
            p2 += 1
        }
        else if (p >= 400 && p < 600) {
            p3 += 1
        }
        else if (p >= 600 && p < 800) {
            p4 += 1
        }
        else if (p >= 800) {
            p5 += 1
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`)
    console.log(`${(p2 / n * 100).toFixed(2)}%`)
    console.log(`${(p3 / n * 100).toFixed(2)}%`)
    console.log(`${(p4 / n * 100).toFixed(2)}%`)
    console.log(`${(p5 / n * 100).toFixed(2)}%`)
}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])