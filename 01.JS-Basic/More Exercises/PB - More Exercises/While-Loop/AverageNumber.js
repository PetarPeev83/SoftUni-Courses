function averageNumber(input) {

    let n = Number(input[0])
    let i = 1
    let sum = 0
    let numCount = 0

    while (n >= i) {
        sum += Number(input[i])
        numCount++
        i++
    }
console.log((sum / numCount).toFixed(2))

}
averageNumber(['4', '3', '2', '4', '2'])