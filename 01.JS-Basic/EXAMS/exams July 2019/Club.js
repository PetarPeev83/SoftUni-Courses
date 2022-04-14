function club(input) {

    let expectedProfit = Number(input[0]);
    let profit = 0;
    let i = 1;

    while (input[i] !== "Party!") {

        let drinkName = String(input[i]);
        i++;
        let drinksNum = Number(input[i]);
        let drinkPrice = Number(drinkName.length);

        let currentProfit = drinkPrice * drinksNum;
        if (currentProfit % 2 !== 0) {
            currentProfit *= 0.75;
        } 
        profit += currentProfit;
        if (profit >= expectedProfit) {
            console.log("Target acquired.");
            console.log(`Club income - ${profit.toFixed(2)} leva.`);
            return;
        }
        i++;
    }
    console.log(`We need ${(expectedProfit - profit).toFixed(2)} leva more.`);
    console.log(`Club income - ${profit.toFixed(2)} leva.`);
}
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);

//(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);

