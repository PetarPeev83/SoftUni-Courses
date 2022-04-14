function matchTickets(input) {

    let budget = Number(input[0]);
    let category = String(input[1]);
    let people = Number(input[2]);
    let transport = 0;
    let ticketPrice = 0;

    if (people > 0 && people <= 4) {
        transport = budget * 0.75;
    } else if (people >= 5 && people <= 9) {
        transport = budget * 0.6;
    } else if (people >= 10 && people <= 24) {
        transport = budget * 0.5;
    } else if (people >= 25 && people <= 49) {
        transport = budget * 0.4;
    } else if (people >= 50) {
        transport = budget * 0.25;
    }
    switch (category) {
        case "VIP": ticketPrice = 499.99 * people; break;
        case "Normal": ticketPrice = 249.99 * people; break;
    }

    if ((budget - transport) >= ticketPrice) {
        console.log(`Yes! You have ${(budget - transport - ticketPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(ticketPrice - (budget - transport)).toFixed(2)} leva.`)
    }
}
matchTickets(['30000', 'VIP', '49'])