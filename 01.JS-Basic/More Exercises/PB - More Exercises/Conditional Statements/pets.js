function pets(input) {

    let days = Number(input[0])
    let foodLeftKg = Number(input[1])
    let dogDayfoodKgPerDay = Number(input[2])
    let catDayfoodKgPerDay = Number(input[3])
    let turtleDayfoodGramsPerDay = Number(input[4])

    let totalFood = days * (dogDayfoodKgPerDay + catDayfoodKgPerDay + (turtleDayfoodGramsPerDay / 1000))

    if (totalFood > foodLeftKg) {
        console.log(`${Math.ceil(totalFood - foodLeftKg)} more kilos of food are needed.`)
    }
    else { console.log(`${Math.floor(foodLeftKg - totalFood)} kilos of food left.`) }

}
pets(["2", "10", "1", "1", "1200"])