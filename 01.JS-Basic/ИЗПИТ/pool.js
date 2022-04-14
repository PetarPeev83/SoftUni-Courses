function pool(input) {

    let people = Number(input[0])
    let entryTax = Number(input[1])
    let chairPrice = Number(input[2])
    let umbrellaPrice = Number(input[3])

    let totalEntryTax = people * entryTax
    let umbrellaNeeded = Math.ceil(people / 2)
    let chairNeeded = Math.ceil(people * 0.75)

    let total = totalEntryTax + umbrellaNeeded*umbrellaPrice + chairNeeded*chairPrice

    console.log(`${total.toFixed(2)} lv.`)
}
pool(["100","8","6","4"])

//(["50","6","8","4"])
//(['21', '5.50', '4.40', '6.20'])