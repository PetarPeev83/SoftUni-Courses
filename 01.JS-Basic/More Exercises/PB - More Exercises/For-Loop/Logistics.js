function logistics(input) {

    let n = Number(input[0])
    let minibus = 0
    let truck = 0
    let train = 0

    for (let i = 1; i <= n; i++) {

        let weight = Number(input[i])

        if (weight <= 3) {
            minibus += weight
        }
        else if (weight >= 4 && weight <= 11) {
            truck += weight
        }
        else {
            train += weight
        }
    }
    let minibusPrice = minibus * 200
    let truckPrice = truck * 175
    let trainPrice = train * 120

    totalPrice = minibusPrice + truckPrice + trainPrice

    let totalWeight = minibus + truck + train

    console.log((totalPrice / totalWeight).toFixed(2))
    console.log(`${(minibus / totalWeight * 100).toFixed(2)}%`)
    console.log(`${(truck / totalWeight * 100).toFixed(2)}%`)
    console.log(`${(train / totalWeight * 100).toFixed(2)}%`)
}
logistics(['4', '1', '5', '16', '3',])