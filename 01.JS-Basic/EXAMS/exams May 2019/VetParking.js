function vetParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalPrice = 0;

    for (let i = 1; i <= days; i++) {
        let dayPrice = 0;
        for (let q = 1; q <= hours; q++) {
            if (i % 2 === 0 && q % 2 === 1) {
                dayPrice += 2.5;
            } else if (i % 2 === 1 && q % 2 === 0) {
                dayPrice += 1.25;
            } else {
                dayPrice++;
            }
        }
        console.log(`Day: ${i} - ${dayPrice.toFixed(2)} leva`);
        totalPrice += dayPrice;
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking//(["2", "5"]);
(["5","2"]);