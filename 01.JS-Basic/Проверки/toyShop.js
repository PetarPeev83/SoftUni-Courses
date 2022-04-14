function toyShop(input) {

    let tripPrice = Number(input[0])
    let puzlesCount = Number(input[1])
    let barbyCount = Number(input[2])
    let teddyBear = Number(input[3])
    let minions = Number(input[4])
    let truck = Number(input[5])

    let totalToys = puzlesCount + barbyCount + teddyBear + minions + truck
    let totalIncome = (puzlesCount * 2.6 + barbyCount * 3 + teddyBear * 4.1 + minions * 8.2 + truck * 2) * 0.9

    if (totalToys >= 50) {
        totalIncome = totalIncome * 0.75
    }

    if (totalIncome >= tripPrice) {
        console.log(`Yes! ${(totalIncome - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice - totalIncome).toFixed(2)} lv needed.`)
    }



}
toyShop(["320", "8", "2", "5", "5", "1"])