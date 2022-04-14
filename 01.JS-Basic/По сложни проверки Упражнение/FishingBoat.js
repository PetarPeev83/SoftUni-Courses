function fishingBoat(input) {

    let budget = Number(input[0])
    let season = input[1]
    let fishermans = Number(input[2])    //"Spring", "Summer", "Autumn", "Winter"

    let price = 0.0

    switch (season) {
        case "Spring":
            if (fishermans <= 6) {
                price = 3000 * 0.9
            }
            else if (fishermans > 7 && fishermans <= 11) {
                price = 3000 * 0.85
            }
            else if (fishermans > 12) {
                price = 3000 * 0.75
            }; break;
        case "Summer":
            if (fishermans <= 6) {
                price = 4200 * 0.9
            }
            else if (fishermans > 7 && fishermans <= 11) {
                price = 4200 * 0.85
            }
            else if (fishermans > 12) {
                price = 4200 * 0.75
            }; break;
        case "Autumn":
            if (fishermans <= 6) {
                price = 4200 * 0.9
            }
            else if (fishermans > 7 && fishermans <= 11) {
                price = 4200 * 0.85
            }
            else if (fishermans > 12) {
                price = 4200 * 0.75
            }; break;
        case "Winter":
            if (fishermans <= 6) {
                price = 2600 * 0.9
            }
            else if (fishermans > 7 && fishermans <= 11) {
                price = 2600 * 0.85
            }
            else if (fishermans > 12) {
                price = 2600 * 0.75
            }; break;
    }
    if (fishermans % 2 == 0 && season != "Autumn") {
        price = price * 0.95
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    }
    else { console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`) }
}
fishingBoat(["3600",
    "Autumn",
    "6"])


