function matchTickets(input) {

    let budget = Number(input[0])
    let category = input[1]
    let people = Number(input[2])

    let transport = 0.0
    let price = 0.0

    if (people >= 1 && people <= 4) {
        transport = budget * 0.75
    }
    else if (people >= 5 && people <= 9) {
        transport = budget * 0.6
    }
    else if (people >= 10 && people <= 24) {
        transport = budget * 0.5
    }
    else if (people >= 25 && people <= 49) {
        transport = budget * 0.4
    }
    else if (people >= 50) {
        transport = budget * 0.25
    }

    if (category === "VIP") {
        price = 499.99
    }
    else if (category === "Normal") {
        price = 249.99
    }

    if (price > budget - transport) {
        console.log(`Not enough money! You need ${(price - (budget - transport)).toFixed(2)} leva.`)
    }
    else { console.log(`Yes! You have ${((budget - transport) - price).toFixed(2)} leva left.`) }

}
matchTickets(['1000', 'Normal', '1'])