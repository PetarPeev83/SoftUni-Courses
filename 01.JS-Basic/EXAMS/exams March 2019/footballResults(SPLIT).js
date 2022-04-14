function footballResults(input) {

    let first = input[0].split(":")
    let second = input[1].split(":")
    let third = input[2].split(":")

    let firstHomeResult = Number(first[0])
    let firstAwayResult = Number(first[1])
    let secondHomeResult = Number(second[0])
    let secondAwayResult = Number(second[1])
    let thirdHomeResult = Number(third[0])
    let thirdAwayResult = Number(third[1])

    let win = 0
    let lost = 0
    let draw = 0

    if (firstHomeResult > firstAwayResult) {
        win = win + 1
    }
    else if (firstHomeResult < firstAwayResult) {
        lost = lost + 1
    }
    else { draw = draw + 1 }

    if (secondHomeResult > secondAwayResult) {
        win = win + 1
    }
    else if (secondHomeResult < secondAwayResult) {
        lost = lost + 1
    }
    else { draw = draw + 1 }

    if (thirdHomeResult > thirdAwayResult) {
        win = win + 1
    }
    else if (thirdHomeResult < thirdAwayResult) {
        lost = lost + 1
    }
    else { draw = draw + 1 }

    console.log(`Team won ${win} games.`)
    console.log(`Team lost ${lost} games.`)
    console.log(`Drawn games: ${draw}`)
}
footballResults(["4:2", "0:3", "1:0"])