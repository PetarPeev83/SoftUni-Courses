function spiceMustFlow(spiceAmountPerDay) {

    let days = 0;
    let totalProduction = 0;

    while (spiceAmountPerDay >= 100) {
        days++;
        totalProduction += spiceAmountPerDay - 26;
        spiceAmountPerDay -= 10;
    }
    totalProduction -= 26;
    if (totalProduction < 0) {
        totalProduction = 0;
    }
    console.log(days);
    console.log(totalProduction);
}
spiceMustFlow(111);