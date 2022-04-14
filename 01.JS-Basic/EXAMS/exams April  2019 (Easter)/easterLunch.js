function easterLunch(input) {

    let kozunakCount = Number(input[0])
    let eggPacks = Number(input[1])
    let cookiesKg = Number(input[2])

    let kozunakCost = kozunakCount * 3.20
    let eggCost = (eggPacks * 4.35) + (eggPacks * 12 * 0.15)
    let cookiesCost = cookiesKg * 5.40

    let totalCost = (kozunakCost + eggCost + cookiesCost)

    console.log(totalCost.toFixed(2))


}
easterLunch(["3", "2", "3"])