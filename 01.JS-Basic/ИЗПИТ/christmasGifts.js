function christmas(input) {

    let i = 0
    let adults = 0
    let kids = 0
    let toys = 0
    let sweaters = 0

    while (input[i] !== 'Christmas') {

        let current = Number(input[i])

        if (current > 16) {
            adults++
            sweaters++
        } else {
            kids++
            toys++
        }
        i++
    }
    console.log(`Number of adults: ${adults}`)
    console.log(`Number of kids: ${kids}`)
    console.log(`Money for toys: ${toys * 5}`)
    console.log(`Money for sweaters: ${sweaters * 15}`)
}
christmas(["18", "20", "48", "45", "56", "37", "12", "14", "Christmas"])

//(["16","16","16","16","16","Christmas"])
//(["16", "20", "46", "12", "8", "20", "49", "Christmas"])