function gameOfIntervals(input) {

    let gameMoves = Number(input[0])

    let result = 0
    let from0to9 = 0
    let from40to50 = 0
    let from30to39 = 0
    let from20to29 = 0
    let from10to19 = 0
    let notValid = 0

    for (let i = 1; i <= gameMoves; i++) {

        let n = Number(input[i])

        if (n < 0 || n > 50) {
            notValid++
            result /= 2
        }
        else if (n >= 0 && n < 10) {
            from0to9++
            result += n * 0.2
        }
        else if (n >= 10 && n < 20) {
            from10to19++
            result += n * 0.3
        }
        else if (n >= 20 && n < 30) {
            from20to29++
            result += n * 0.4
        }
        else if (n >= 30 && n < 40) {
            from30to39++
            result += 50
        }
        else if (n >= 40 && n <= 50) {
            from40to50++
            result += 100
        }

    }
    console.log(result.toFixed(2))
    console.log(`From 0 to 9: ${(from0to9/gameMoves*100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${(from10to19/gameMoves*100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${(from20to29/gameMoves*100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${(from30to39/gameMoves*100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${(from40to50/gameMoves*100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${(notValid/gameMoves*100).toFixed(2)}%`)
}
gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20'])