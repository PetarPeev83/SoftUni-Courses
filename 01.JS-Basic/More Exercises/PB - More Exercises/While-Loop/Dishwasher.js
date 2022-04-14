function dishwasher(input) {

    let washingLiquid = Number(input[0]);
    let liquidValue = washingLiquid * 750;
    let index = 1;
    let plate = 0;
    let pot = 0;
    let loading = 0;

    while (liquidValue >= 0 && input[index] !== "End") {

        let currentWash = input[index]
        loading++

        if (loading % 3 === 0) {
            pot += Number(currentWash)
            liquidValue -= (currentWash * 15)
        } else {
            plate += Number(currentWash)
            liquidValue -= (currentWash * 5)
        }
        index++
    }
    if (liquidValue >= 0) {
        console.log("Detergent was enough!")
        console.log(`${plate} dishes and ${pot} pots were washed.`)
        console.log(`Leftover detergent ${liquidValue} ml.`)
    } else {
        console.log(`Not enough detergent, ${Math.abs(liquidValue)} ml. more necessary!`)
    }
}
dishwasher(["1",
    '10',
    '15',
    '10',
    '12',
    '13',
    '30'])
