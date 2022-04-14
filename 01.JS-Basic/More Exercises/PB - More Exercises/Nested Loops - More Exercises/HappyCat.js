function happyCat(input) {

    let days = Number(input[0])
    let hoursPerDay = Number(input[1])
    let totalPrice = 0

    for (let d = 1; d <= days; d++) {
        let dayPrice = 0
        for (let h = 1; h <= hoursPerDay; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                dayPrice += 2.5
            } else if (d % 2 !== 0 && h % 2 === 0) {
                dayPrice += 1.25
            } else { dayPrice += 1 }
        }
        totalPrice += dayPrice
        console.log(`Day: ${d} - ${dayPrice.toFixed(2)} leva`)
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
happyCat(["2", "5"])