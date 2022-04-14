function familyTrip(input) {

    let buget = Number(input[0])
    let days = Number(input[1])
    let dayPrice = Number(input[2])
    let percentExpences = Number(input[3])

    if (days > 7) {
        dayPrice = dayPrice * 0.95
    }
    let expenses = buget * percentExpences / 100
    let totalExpences = days * dayPrice + expenses

    if (buget >= totalExpences) {
        console.log(`Ivanovi will be left with ${(buget - totalExpences).toFixed(2)} leva after vacation.`)
    }
    else { console.log(`${(totalExpences - buget).toFixed(2)} leva needed.`) }

}
familyTrip(['800.50', '8', '100', '2',])