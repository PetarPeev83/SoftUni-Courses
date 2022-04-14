function barIncome(input) {
    let pattern = /\%(?<name>[A-Z][a-z]+)\%[^\|\$\%\.]*?<(?<product>\w+)>[^\|\$\%\.]*?\|(?<count>\d+)\|[^\|\$\%\.0-9]*?(?<price>\d+(\.\d+)?)\$/;
    let current = input.shift();
    let match = pattern.exec(current);
    let totalIncome = 0;
    while (current !== "end of shift") {
        let match = pattern.exec(current)
        if (pattern.test(current)) {
            let currentIncome = Number(match.groups.count) * Number(match.groups.price);
            totalIncome += currentIncome;
            console.log(`${match.groups.name}: ${match.groups.product} - ${currentIncome.toFixed(2)}`);
        }
        current = input.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"]);
// barIncome(["%InvalidName%<Croissant>|2|10.3$",
//     "%Peter%<Gum>1.3$",
//     "%Maria%<Cola>|1|2.4",
//     "%Valid%<Valid>valid|10|valid20$",
//     "end of shift"]);

//80% В ДЖЪДЖА