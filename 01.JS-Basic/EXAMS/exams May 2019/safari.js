function safari(input) {

    let buget = Number(input[0])
    let fuel = Number(input[1])
    let day = String(input[2])
    let fuelPrice = 2.10
    let guide = 100

    let safariPrice = fuel * fuelPrice + guide

    if (day === "Saturday") {
        safariPrice = safariPrice * 0.90
    }
    else if (day === "Sunday") {
        safariPrice = safariPrice * 0.80
    }

    if (buget >= safariPrice) {
        console.log(`Safari time! Money left: ${(buget - safariPrice).toFixed(2)} lv.`)
    }
    else { console.log(`Not enough money! Money needed: ${(safariPrice - buget).toFixed(2)} lv.`) }
}
safari(["120", "30", "Saturday"])