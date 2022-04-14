function agencyProfit(input) {

    let company = String(input[0])
    let adultTickets = Number(input[1])
    let childrensTickets = Number(input[2])
    let ticketPriceAdult = Number(input[3])
    let serviceTax = Number(input[4])

    let ticketPriceChildrens = ticketPriceAdult * 0.3

    let total = (adultTickets * ticketPriceAdult) + (childrensTickets * ticketPriceChildrens) + (adultTickets + childrensTickets) * serviceTax

    console.log(`The profit of your agency from ${company} tickets is ${(total * 0.2).toFixed(2)} lv.`)
}
agencyProfit(['Ryanair', '60', '23', '158.96', '39.12'])