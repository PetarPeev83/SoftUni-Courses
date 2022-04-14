function building(input) {

    let floors = Number(input[0])
    let rooms = Number(input[1])

    for (let i = floors; i > 0; i--) {

        let toPrint = ''

        for (let x = 0; x < rooms; x++) {
            if (i === floors) {
                toPrint += `L${i}${x} `
            } else if (i % 2 === 0) {
                toPrint += `O${i}${x} `
            } else {
                toPrint += `A${i}${x} `
            }
        }
        console.log(toPrint)
    }
}
building(["6", "4"])