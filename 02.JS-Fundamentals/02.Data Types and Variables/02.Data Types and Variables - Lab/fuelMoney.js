function fuelMoney(distance, passengers, dieselPrice) {

    let neededFuel = (distance / 100) * (7 + passengers * 0.1);

    console.log(`Needed money for that trip is ${(neededFuel * dieselPrice).toFixed(2)}lv.`);
}
fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);