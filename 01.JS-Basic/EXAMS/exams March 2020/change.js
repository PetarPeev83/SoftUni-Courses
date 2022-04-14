function change(input) {

    let bitcoins = Number(input[0])
    let yeni = Number(input[1])
    let commision = Number(input[2]) / 100

    let lev = (bitcoins * 1168) + (yeni * 0.15) * 1.76

    let euro = lev / 1.95

    let result = euro - (euro * commision)

    console.log(result.toFixed(2))

}
change(['1', '5', '5'])