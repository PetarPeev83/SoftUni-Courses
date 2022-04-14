function repainting(input) {

    let shieldPlastic = Number(input[0]) + 2
    let paintLitre = Number(input[1]) + Number(input[1]) * 0.10
    let paintTinner = Number(input[2])
    let workHours = Number(input[3])

    let bags = 0.40
    let shieldPlasticPriceSqMeter = 1.50
    let paintPricePerLitre = 14.50
    let paintThinnerPricePerLitre = 5.00
    let totalExpencesPrice = (shieldPlastic * shieldPlasticPriceSqMeter) + (paintLitre * paintPricePerLitre) +
        (paintTinner * paintThinnerPricePerLitre) + bags

    let workPricePerHour = totalExpencesPrice * 0.30

    console.log(`Total expenses: ${(workHours * workPricePerHour + totalExpencesPrice).toFixed(2)} lv.`)

}
repainting(['10', '11', '4', '8'])