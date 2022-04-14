function tennisEqipment(input) {

    let rocketPrice = Number(input[0])
    let rocketNumbers = Number(input[1])
    let trainers = Number(input[2])
    let trainersPrice = rocketPrice / 6
    let rocketsAndTrainers = ((rocketPrice * rocketNumbers) + (trainers * trainersPrice))
    
    let totalCost = (rocketsAndTrainers * 0.20) + rocketsAndTrainers

    console.log(`Price to be paid by Djokovic ${Math.floor(totalCost / 8)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(totalCost * 7 / 8)}`)
}
tennisEqipment(["1000", "3", "1"])