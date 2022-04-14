function fishLand(input) {

    let palamudPrice = Number(input[0]) + Number(input[0]) * 0.6
    let safridPrice = Number(input[1]) + Number(input[1]) * 0.8
    let midiPrice = 7.50

    let palamudKg = Number(input[2])
    let safridKg = Number(input[3])
    let midiKg = Number(input[4])

    let palamudSpend = palamudPrice * palamudKg
    let safridSpend = safridKg * safridPrice
    let midiSpend = midiKg * midiPrice

    let total = palamudSpend + safridSpend + midiSpend

    console.log(total.toFixed(2))

}
fishLand(['6.9', '4.2', '1.5', '2.5', '1'])