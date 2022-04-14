function godzila(input) {

    let buget = Number(input[0]);
    let statist = Number(input[1]);
    let clothesPrisePerStatist = Number(input[2]);
    let dekor = buget * 0.10;

    if (statist > 150) {
        clothesPrisePerStatist = clothesPrisePerStatist * 0.90
    }

    let totalPriceForStatist = statist * clothesPrisePerStatist;
    totalSpend = totalPriceForStatist + dekor;

    if (buget >= totalSpend) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(buget - totalSpend).toFixed(2)} leva left.`)
    }
    else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalSpend - buget).toFixed(2)} leva more.`)
    }

}
godzila(["9587.88",
"222",
"55.68"])

