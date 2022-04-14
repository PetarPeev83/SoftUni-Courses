function equalPairs(input) {

    let n = Number(input[0])*2
    let pair = 0
    let sum = 0
    let diferentSum = Number(input[1]) + Number(input[2])
    let maxDiference = 0

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i])
        pair++
        sum += num

        if (pair % 2 == 0 && sum != diferentSum) {
            maxDiference = Math.abs(sum - diferentSum)
            diferentSum = sum
            sum = 0
            
        }
        else if (pair % 2 == 0 && sum == diferentSum) {
            sum = 0
        }

    }
    if (maxDiference != 0) {
        console.log(`No, maxdiff=${maxDiference}`)
    }
    else {
        console.log(`Yes, value=${diferentSum}`)
    }
}
equalPairs([
    '2',
    '1',
    '2',
    '2',
    '2',
])