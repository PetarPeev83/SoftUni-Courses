function vacation(input) {

    let holidayPrice = Number(input[0]);
    let ownMoney = Number(input[1]);
    let currentMoney = ownMoney;
    let index = 2;
    let spend = 0;
    let days = 0;

    while (true) {

        let operation = String(input[index])

        if (spend == 5) {
            console.log("You can't save the money.")
            console.log(days)
            break;
        }

        if (index % 2 == 0) {
            days++
            switch (operation) {
                case "spend": currentMoney -= Number(input[index + 1])
                    spend++
                    if (currentMoney < 0) {
                        currentMoney = 0
                    };
                    break;
                case "save": currentMoney += Number(input[index + 1])
                    spend = 0;
                    break;
            }
        }
        if (currentMoney >= holidayPrice) {
            console.log(`You saved the money for ${days} days.`)
            break;
        }
        index++
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])
