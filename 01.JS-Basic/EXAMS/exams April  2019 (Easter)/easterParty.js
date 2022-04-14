function easterParty(input) {

    let guests = Number(input[0])
    let cuvertPerPerson = Number(input[1])
    let buget = Number(input[2])
    let cakePrice = buget * 0.1

    if (guests >= 10) {
        if (guests <= 15) {
            cuvertPerPerson = cuvertPerPerson * 0.85
        }
    }
    if (guests > 15) {
        if (guests <= 20) {
            cuvertPerPerson = cuvertPerPerson * 0.80
        }
    }
    if (guests > 20) {
        cuvertPerPerson = cuvertPerPerson * 0.75
    }

    let totalExpence = (guests * cuvertPerPerson) + cakePrice

    if (buget >= totalExpence) {
        console.log(`It is party time! ${(buget - totalExpence).toFixed(2)} leva left.`)
    }
    else { console.log(`No party! ${(totalExpence - buget).toFixed(2)} leva needed.`) }

}
easterParty(["24", "35", "550"])