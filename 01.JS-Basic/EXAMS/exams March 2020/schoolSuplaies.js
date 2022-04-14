function school(input) {

    let pensPrice = Number(input[0]) * 5.8
    let markerPrice = Number(input[1]) * 7.20
    let liqudPrice = Number(input[2]) * 1.20
    let discount = Number(input[3]) / 100

    let total = pensPrice + markerPrice + liqudPrice

    let finalPrice = total - (total * discount)

    console.log(finalPrice.toFixed(3))

}
school(['4', '2', '5', '13'])