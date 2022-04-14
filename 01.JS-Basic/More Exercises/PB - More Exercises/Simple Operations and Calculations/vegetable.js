function vegetable(input) {

    let vegetablePrice = Number(input[0])
    let fruitPrice = Number(input[1])
    let vegetableKg = Number(input[2])
    let fruitKg = Number(input[3])

    let vegetableIncome = vegetablePrice * vegetableKg
    let fruitIncome = fruitPrice * fruitKg

    let totalIncome = vegetableIncome + fruitIncome

    let priceEuro = totalIncome / 1.94

    console.log(priceEuro.toFixed(2))

}
vegetable(['0.194', '19.4', '10', '10'])