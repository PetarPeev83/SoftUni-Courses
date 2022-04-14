function newHouse(input) {

    let flowerType = input[0]
    let flowerNum = Number(input[1])
    let budget = Number(input[2])

    let price = 0.0

    switch (flowerType) {
        case "Roses": if (flowerNum > 80) {
            price = 5 * 0.9
        }
        else { price = 5 }; break;

        case "Dahlias": if (flowerNum > 90) {
            price = 3.8 * 0.85
        }
        else { price = 3.8 }; break;

        case "Tulips": if (flowerNum > 80) {
            price = 2.8 * 0.85
        }
        else { price = 2.8 }; break;

        case "Narcissus": if (flowerNum < 120) {
            price = 2.8 * 1.15
        }
        else { price = 3 }; break;

        case "Gladiolus": if (flowerNum < 80) {
            price = 2.5 * 1.2
        }
        else { price = 2.5 }; break;
    }
    let totalPrice = price * flowerNum
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    }
    else { console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`) }

}
newHouse(["Tulips",
"88",
"260"])

