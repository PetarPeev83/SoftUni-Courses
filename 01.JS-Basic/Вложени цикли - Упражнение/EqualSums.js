function equalSums(input) {

    let x = Number(input[0])
    let y = Number(input[1])
    let printNum = ''

    for (let i = x; i <= y; i++) {
        let currentNumber = String(i)
        let even = 0
        let odd = 0
        for (let z = 0; z < currentNumber.length; z++) {
            let currentCheck = Number(currentNumber[z])
            if (z % 2 === 0) {
                even += currentCheck
            } else {
                odd += currentCheck
            }
        }
        if (even === odd) {
            printNum += currentNumber + " "
        }
    }
    console.log(printNum)
}
equalSums(["100000",
"100050"])


