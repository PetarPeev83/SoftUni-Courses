function poolDay(input) {

    let people = Number(input[0])
    let entranceTax = Number(input[1])
    let chairPrice = Number(input[2])
    let umbrellaPrice = Number(input[3])

    let chairNum = Math.ceil(people * 0.75)
    let umbrellaNum = Math.ceil(people / 2)

    let total = (people * entranceTax) + (chairNum * chairPrice) + (umbrellaNum * umbrellaPrice)

    console.log(`${total.toFixed(2)} lv.`)

}
poolDay(["21", "5.50", "4.40", "6.20"])