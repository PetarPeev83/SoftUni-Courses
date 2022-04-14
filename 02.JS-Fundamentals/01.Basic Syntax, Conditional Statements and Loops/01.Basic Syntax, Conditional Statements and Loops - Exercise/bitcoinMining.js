function bitcoinMining(input) {

    let day = 1;
    let money = 0;
    let bitcoins = 0;
    let firstBitcoinDay = 0;

    for (let i = 0; i < input.length; i++) {
        let currentDayGoldGrams = Number(input[i]);
        if (day % 3 === 0) {
            currentDayGoldGrams *= 0.7;
        }
        money += currentDayGoldGrams * 67.51;
        while (money >= 11949.16) {
            bitcoins++;
            if (bitcoins === 1) {
                firstBitcoinDay = day;
            }
            money -= 11949.16;
        }
        day++;
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);