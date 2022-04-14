function basketballEquipment(input) {

    let anualFee = Number(input[0])
    let shoes = anualFee * 0.60
    let tracksuit = shoes * 0.80
    let ball = tracksuit / 4
    let accesories = ball / 5

    let cost = anualFee + shoes + tracksuit + ball + accesories

    console.log(cost.toFixed(2))
}
basketballEquipment(["320"])