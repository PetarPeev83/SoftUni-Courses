function puppyCare(input) {

    let foodGrams = Number(input[0]) * 1000
    let i = 1
    let foodEated = 0

    while (input[i] !== "Adopted") {

        let current = Number(input[i])
        foodEated += current

        i++
    }
    if (foodGrams >= foodEated) {
        console.log(`Food is enough! Leftovers: ${foodGrams - foodEated} grams.`)
    } else {
        console.log(`Food is not enough. You need ${foodEated - foodGrams} grams more.`)
    }
}
puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"])