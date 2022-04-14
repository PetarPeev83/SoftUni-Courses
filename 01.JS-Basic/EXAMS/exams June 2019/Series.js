function series(input) {

    let budget = Number(input[0]);
    let serialsNum = Number(input[1]);
    let price = 0;
    let index = 2;

    for (let i = 0; i < serialsNum; i++) {
        let serialName = input[index];
        index++;
        let serialPrice = Number(input[index]);
        index++;

        switch (serialName) {
            case "Thrones": serialPrice *= 0.5; break;
            case "Lucifer": serialPrice *= 0.6; break;
            case "Protector": serialPrice *= 0.7; break;
            case "TotalDrama": serialPrice *= 0.8; break;
            case "Area": serialPrice *= 0.9; break;
        }
        price += serialPrice;
    }
    if (budget >= price) {
        console.log(`You bought all the series and left with ${(budget - price).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(price - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
//(["25","6","Teen Wolf","8","Protector","5","TotalDrama","5","Area","4","Thrones","5","Lucifer","9"]);