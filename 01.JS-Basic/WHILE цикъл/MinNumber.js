function minNumber(input){

    let i = 0
    let minNum = Number(input[0])

    while (input[i] !== "Stop") {
        let num = Number(input[i])
        if (num < minNum) {
            minNum = num
        }
        i++
    }
    console.log(minNum)
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])
