function addBags(input) {

    let bagOver20kgPrice = Number(input[0])
    let bagWeight = Number(input[1])
    let daysToTravel = Number(input[2])
    let bagsNum = Number(input[3])

    let BagPrice = 0

    if (bagWeight < 10) {
        BagPrice = bagOver20kgPrice * 0.20
    } else if (bagWeight >= 10 && bagWeight <= 20) {
        BagPrice = bagOver20kgPrice * 0.50
    } else if (bagWeight > 20) {
        BagPrice = bagOver20kgPrice
    }

    if (daysToTravel > 30) {
        BagPrice *= 1.1
    } else if (daysToTravel >= 7 && daysToTravel <= 30) {
        BagPrice *= 1.15
    } else if (daysToTravel < 7) {
        BagPrice *= 1.4
    }

    console.log(`The total price of bags is: ${(BagPrice * bagsNum).toFixed(2)} lv.`)
}
addBags(['25.50',
    '5',
    '36',
    '6'
])