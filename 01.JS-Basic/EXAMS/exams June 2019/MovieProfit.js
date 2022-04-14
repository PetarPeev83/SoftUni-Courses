function movieProfit(input) {

    let filmName = input[0]
    let days = Number(input[1])
    let tickets = Number(input[2])
    let ticketPrice = Number(input[3])
    let cinemaPercent = Number(input[4]) / 100

    let totalTickets = days * tickets
    let totalProfit = totalTickets * ticketPrice

    console.log(`The profit from the movie ${filmName} is ${(totalProfit - (totalProfit * cinemaPercent)).toFixed(2)} lv.`)

}
movieProfit(["The Programmer", "20", "500", "7.50", "7"])