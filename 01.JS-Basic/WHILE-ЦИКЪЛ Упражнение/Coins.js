function coins(input) {

    let sum = Number(input[0])
    let coins = 0

    while (sum != 0) {
        if (sum >= 2) {
            coins++
            sum -= 2
        } else if (sum >= 1) {
            coins++
            sum -= 1
        } else if (sum >= 0.50) {
            coins++
            sum = (sum - 0.50).toFixed(2)
        } else if (sum >= 0.20) {
            coins++
            sum = (sum - 0.20).toFixed(2)
        } else if (sum >= 0.10) {
            coins++
            sum = (sum - 0.10).toFixed(2)
        } else if (sum >= 0.05) {
            coins++
            sum = (sum - 0.05).toFixed(2)
        } else if (sum >= 0.02) {
            coins++
            sum = (sum - 0.02).toFixed(2)
        } else if (sum >= 0.01) {
            coins++
            sum = (sum - 0.01).toFixed(2)
        } else { break }
    }
    console.log(coins)
}
coins(["2.73"])