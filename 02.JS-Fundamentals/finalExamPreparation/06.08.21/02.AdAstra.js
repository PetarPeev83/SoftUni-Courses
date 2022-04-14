function astra(input) {
    let pattern = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<cal>[0-9]+)\1/g;
    let match = pattern.exec(input);
    let foodList = [];
    let calories = 0;
    while (match !== null) {
        let name = match['groups']['item'];
        let date = match['groups']['date'];
        let nutr = Number(match['groups']['cal']);

        foodList.push(`Item: ${name}, Best before: ${date}, Nutrition: ${nutr}`)
        calories += nutr;
        match = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(calories / 2000)} days!`);
    for (let current of foodList) {
        console.log(current);
    }
}
// astra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');
astra('$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|');
// astra('Hello|#Invalid food#19/03/20#450|$5*(@');