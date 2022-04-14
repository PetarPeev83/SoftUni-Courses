function maxNumber(input) {

    let i = 0
    let maxNum = Number(input[0])

    while (input[i] !== "Stop") {
        let num = Number(input[i])
        if (num > maxNum) {
            maxNum = num
        }
        i++
    }
    console.log(maxNum)

}
maxNumber(["-1",
    "-2",
    "Stop"])
