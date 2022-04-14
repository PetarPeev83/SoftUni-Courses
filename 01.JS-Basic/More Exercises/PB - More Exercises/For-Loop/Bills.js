function bills(input) {

    let mounts = Number(input[0])
    let mountsCount = 0
    let totalElectricityBill = 0
    let totalWaterBill = 0
    let totalInternetBill = 0
    let totalOtherBills = 0

    for (let i = 1; i <= mounts; i++) {
        let currentElectricity = Number(input[i])
        mountsCount++

        totalElectricityBill += currentElectricity
        totalWaterBill += 20
        totalInternetBill += 15
        totalOtherBills += ((20 + 15 + currentElectricity) * 1.20)
    }
    console.log(`Electricity: ${totalElectricityBill.toFixed(2)} lv`)
    console.log(`Water: ${totalWaterBill.toFixed(2)} lv`)
    console.log(`Internet: ${totalInternetBill.toFixed(2)} lv`)
    console.log(`Other: ${totalOtherBills.toFixed(2)} lv`)
    console.log(`Average: ${((totalElectricityBill + totalInternetBill + totalOtherBills + totalWaterBill) / mounts).toFixed(2)} lv`)
}
bills(['8', '123.54', '231.54', '140.23', '100', '122.4', '430', '178.52', '64.2'])