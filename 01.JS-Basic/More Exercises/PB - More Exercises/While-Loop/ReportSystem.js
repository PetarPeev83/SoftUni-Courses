function reportSystem(input) {

    let target = Number(input[0]);
    let i = 1;
    let totalIncome = 0
    let transactions = 0
    let cash = 0
    let cashPayments = 0
    let card = 0
    let cardPayments = 0

    while (totalIncome < target) {

        let income = input[i]
        transactions++

        if (input[i] === "End") {
            console.log('Failed to collect required money for charity.')
            break;
        }
        if (transactions % 2 !== 0) {
            if (income > 100) {
                console.log("Error in transaction!")
            } else {
                console.log("Product sold!")
                cash += Number(income)
                totalIncome += Number(income)
                cashPayments++
            }
        } else {
            if (income < 10) {
                console.log("Error in transaction!")
            } else {
                console.log("Product sold!")
                card += Number(income)
                totalIncome += Number(income)
                cardPayments++
            }
        }

        i++

    }
    if (totalIncome >= target) {
        console.log(`Average CS: ${(cash / cashPayments).toFixed(2)}`)
        console.log(`Average CC: ${(card / cardPayments).toFixed(2)}`)
    }
}
reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End"
])
