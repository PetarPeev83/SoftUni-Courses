function catFood(input) {

    let cats = Number(input[0])
    let foodPriceForKg = 12.45
    let foodPriceForGram = foodPriceForKg / 1000
    let totalFood = 0
    let catGroup1 = 0
    let catGroup2 = 0
    let catGroup3 = 0

    for (let i = 1; i <= cats; i++) {

        let current = Number(input[i])

        if (current >= 100 && current < 200) {

            totalFood += current
            catGroup1++

        } else if (current >= 200 && current < 300) {

            totalFood += current
            catGroup2++

        } else if (current >= 300 && current < 400) {

            totalFood += current
            catGroup3++

        }
    }
    console.log(`Group 1: ${catGroup1} cats.`)
    console.log(`Group 2: ${catGroup2} cats.`)
    console.log(`Group 3: ${catGroup3} cats.`)
    console.log(`Price for food per day: ${(totalFood * foodPriceForGram).toFixed(2)} lv.`)
}
catFood(["6", "102", "236", "123", "399", "342", "222"])