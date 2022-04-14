function shoping(input) {

    let budget = Number(input[0])
    let videoCards = Number(input[1])
    let cpu = Number(input[2])
    let ramMemory = Number(input[3])

    let videoCardsPrice = videoCards * 250
    let cpuPrice = (videoCardsPrice * 0.35) * cpu
    let ramMemoryPrice = (videoCardsPrice * 0.1) * ramMemory

    let totalPrice = videoCardsPrice + cpuPrice + ramMemoryPrice

    if (videoCards > cpu) {
        totalPrice *= 0.85
    }
    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }
}
shoping(["920.45","3","1","1"])

//(["900", "2", "1", "3"])