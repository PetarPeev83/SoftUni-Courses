function cleverLily(input) {

    let liliAge = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let toyPrice = Number(input[2])

    let totalMoney = 0
    let toys = 0
    let money = 0
    for (let i = 1; i <= liliAge; i++) {
        if (i % 2 == 0) {
            totalMoney -= 1
            money += 10
            totalMoney += money
        }
        else {
            toys += 1
        }
    }
    if ((totalMoney + toyPrice * toys) >= washingMachinePrice) {
        console.log(`Yes! ${((totalMoney + toyPrice * toys) - washingMachinePrice).toFixed(2)}`)
    }
    else {
        console.log(`No! ${(washingMachinePrice - (totalMoney + toyPrice * toys)).toFixed(2)}`)
    }
}
cleverLily(["21", "1570.98", "3"])