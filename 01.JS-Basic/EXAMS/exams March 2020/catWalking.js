function catWalking(input) {

    let minutes = Number(input[0])
    let walkingPerDay = Number(input[1])
    let calories = Number(input[2])

    let caloriesSpend = minutes * walkingPerDay * 5

    if (caloriesSpend >= calories * 0.5) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesSpend}.`)
    }
    else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesSpend}.`)
    }

}
catWalking(['40', '2', '300'])