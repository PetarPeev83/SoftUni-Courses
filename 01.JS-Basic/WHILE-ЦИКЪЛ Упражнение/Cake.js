function cake(input) {

    let cakeSize = Number(input[0]) * Number(input[1])
    let index = 2

    while (cakeSize > 0 && input[index] !== "STOP") {
        let piecesTaken = input[index]
        cakeSize -= piecesTaken
        index++
    }
    if (cakeSize > 0) {
        console.log(`${cakeSize} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
