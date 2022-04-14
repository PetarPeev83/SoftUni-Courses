function miningRig(input){

let videoCardPrice = Number(input[0])
let adapterPrice = Number(input[1])
let electricityDayPriceForCard = Number(input[2])
let dayProfitPerCard = Number(input[3])
let otherExpenses = 1000

let cardTotalPrice = videoCardPrice * 13
let adapterTotalPrice = adapterPrice * 13

let totalPrice = cardTotalPrice + adapterTotalPrice + otherExpenses
let totalDayProfitFromCard = dayProfitPerCard * 13
let totalCardsElectrisityForDay = electricityDayPriceForCard * 13
let cardProfitPerDay = totalDayProfitFromCard - totalCardsElectrisityForDay

let daysNeeded = Math.ceil(totalPrice / cardProfitPerDay)

console.log(totalPrice)
console.log(daysNeeded)
}
miningRig(["700","15","0.20","2"])