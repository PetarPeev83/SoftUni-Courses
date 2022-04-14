function accountBalance(input) {

    let index = 0
    let totalSum = 0
    let increase = 0

    while (true) {
        let comand = input[index]
        if (comand === "NoMoreMoney") {
            break;
        }
        if (comand < 0) {
            console.log("Invalid operation!");
            break;
        }
        increase = Number(input[index])
        totalSum += increase
        console.log(`Increase: ${increase.toFixed(2)}`)
        index++
    }
    console.log(`Total: ${totalSum.toFixed(2)}`)

}
accountBalance(["120",
    "45.55",
    "-150"])
