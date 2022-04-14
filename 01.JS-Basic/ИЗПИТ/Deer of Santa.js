function deerOfSanta(input) {

    let daysAway = Number(input[0])
    let foodLefted = Number(input[1])
    let firstDeerFood = Number(input[2])
    let secondDeerFood = Number(input[3])
    let thirdDeerFood = Number(input[4])

    let totalfoodNeded = firstDeerFood * daysAway + secondDeerFood * daysAway + thirdDeerFood * daysAway

    if (totalfoodNeded <= foodLefted) {
        console.log(`${Math.ceil(foodLefted) - Math.ceil(totalfoodNeded)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalfoodNeded) - Math.ceil(foodLefted)} more kilos of food are needed.`)
    }
}
deerOfSanta(['5', '10', '2.1', '0.8', '11'])