function circle(input) {

    let r = Number(input[0])

    let calculatedArea = Math.PI * r * r
    let calculatedParameter = Math.PI * r * 2


    console.log(calculatedArea.toFixed(2))

    console.log(calculatedParameter.toFixed(2))

}
circle("3")