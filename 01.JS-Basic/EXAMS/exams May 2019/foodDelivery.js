function foodDelivery(input) {

    let chicken = Number(input[0])
    let fish = Number(input[1])
    let vege = Number(input[2])
    let delivery = 2.50

    let totalFood = (chicken * 10.35) + (fish * 12.40) + (vege * 8.15)
    let desert = totalFood * 0.20

    console.log(`Total: ${(totalFood + desert + delivery).toFixed(2)}`)

}
foodDelivery(["2", "4", "3"])