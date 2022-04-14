function sumTwoNumbers(input) {

    let start = Number(input[0])
    let end = Number(input[1])
    let magicNumber = Number(input[2])
    let combinationsCount = 0

    for (let i = start; i <= end; i++) {
        for (let x = start; x <= end; x++) {
            combinationsCount++
            if (x + i === magicNumber) {
                console.log(`Combination N:${combinationsCount} (${i} + ${x} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${combinationsCount} combinations - neither equals ${magicNumber}`)
}
sumTwoNumbers(["23","24","20"])
