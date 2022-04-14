function backToThePast(input) {

    let money = Number(input[0])
    let yearToLive = Number(input[1])
    let spendMoney = 0
    let age = 17

    for (let i = 1800; i <= yearToLive; i++) {

        age++

        if (i % 2 == 0) {
            spendMoney += 12000
        }
        else { spendMoney += 12000 + 50 * age }
    }
    if (money >= spendMoney) {
        console.log(`Yes! He will live a carefree life and will have ${(money - spendMoney).toFixed(2)} dollars left.`)
    }
    else { console.log(`He will need ${(spendMoney - money).toFixed(2)} dollars to survive.`) }

}
backToThePast(["100000.15", "1808"])