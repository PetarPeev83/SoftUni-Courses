function easterBakery(input) {

    let flourPriceKg = Number(input[0])
    let flourKg = Number(input[1])
    let sugarKg = Number(input[2])
    let eggPacks = Number(input[3])
    let yeast = Number(input[4])

    let sugarPrice = flourPriceKg * 0.75
    let eggPackPrice = flourPriceKg * 1.1
    let yeastPrice = sugarPrice * 0.20

    let totalCost = (flourPriceKg * flourKg) + (sugarPrice * sugarKg) + 
    (eggPacks * eggPackPrice) + (yeast * yeastPrice)

    console.log(totalCost.toFixed(2))

}
easterBakery(["63.44", "3.57", "6.35", "8", "2"])