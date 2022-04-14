function pcStore(input) {

    let cpuPriceDolars = Number(input[0]);
    let videoCardPriceDolars = Number(input[1]);
    let ramMemoryPriceDolars = Number(input[2]);
    let numbersOfRamMemory = Number(input[3]);
    let discount = 1 - Number(input[4])

    let total = cpuPriceDolars * discount + videoCardPriceDolars * discount + ramMemoryPriceDolars * numbersOfRamMemory

    console.log(`Money needed - ${(total * 1.57).toFixed(2)} leva.`)
}
pcStore(['500', '200', '80', '2', '0.05'])