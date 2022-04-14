function training(input) {


    let lengthInSm = Number(input[0]) * 100
    let wideInSm = Number(input[1]) * 100

    let usebleWide = wideInSm - 100

    let tableForWide = Math.floor(usebleWide / 70)
    let tableForLeght = Math.floor(lengthInSm / 120)

    let total = tableForWide * tableForLeght - 3

    console.log(total)

}
training(['15', '8.9'])