function easterGuests(input) {

    let guests = Number(input[0])
    let buget = Number(input[1])

    let kozunakNeed = Math.ceil(guests / 3)
    let eggsNeed = guests * 2

    let moneyNeed = (kozunakNeed * 4) + (eggsNeed * 0.45)

    if (moneyNeed <= buget) {
        console.log(`Lyubo bought ${kozunakNeed} Easter bread and ${eggsNeed} eggs.`)
        console.log(`He has ${(buget - moneyNeed).toFixed(2)} lv. left.`)
    }
    else {
        console.log("Lyubo doesn't have enough money.")
        console.log(`He needs ${(moneyNeed - buget).toFixed(2)} lv. more.`)
    }

}
easterGuests(["9", "12"])