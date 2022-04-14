function flowerShop(input) {

    let magnolias = Number(input[0])
    let hyacinths = Number(input[1])
    let roses = Number(input[2])
    let cactus = Number(input[3])
    let presentPrice = Number(input[4])

    let profitBeforeTax = (magnolias * 3.25) + (hyacinths * 4) + (roses * 3.5) + (cactus * 8)
    let profitAfterTax = profitBeforeTax * 0.95

    if (profitAfterTax >= presentPrice) {
        console.log(`She is left with ${Math.floor(profitAfterTax - presentPrice)} leva.`)
    }
    else { console.log(`She will have to borrow ${Math.ceil(presentPrice - profitAfterTax)} leva.`) }
}
flowerShop(['2', '3', '5', '1', '50'])