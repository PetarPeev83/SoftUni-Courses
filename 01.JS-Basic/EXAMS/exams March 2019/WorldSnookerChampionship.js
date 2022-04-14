function worldSnookerChampionship(input) {

    let competationStage = input[0];
    let ticketType = input[1];
    let ticketsNum = Number(input[2]);
    let trophyPicture = input[3];
    let price = 0;

    switch (competationStage) {
        case "Quarter final":
            switch (ticketType) {
                case "Standard": price = ticketsNum * 55.5; break;
                case "Premium": price = ticketsNum * 105.2; break;
                case "VIP": price = ticketsNum * 118.9; break;
            } break;
        case "Semi final":
            switch (ticketType) {
                case "Standard": price = ticketsNum * 75.88; break;
                case "Premium": price = ticketsNum * 125.22; break;
                case "VIP": price = ticketsNum * 300.4; break;
            } break;
        case "Final":
            switch (ticketType) {
                case "Standard": price = ticketsNum * 110.1; break;
                case "Premium": price = ticketsNum * 160.66; break;
                case "VIP": price = ticketsNum * 400; break;
            } break;
    } if (price > 4000) {
        price *= 0.75;
    } else if (price > 2500) {
        price *= 0.9;
        if (trophyPicture === "Y") {
            price += ticketsNum * 40;
        }
    } else if (trophyPicture === "Y") {
        price += ticketsNum * 40;
    }
    console.log(price.toFixed(2));
}
worldSnookerChampionship(["Final", "Premium", "25", "Y"]);

//(["Semi final","VIP","9","Y"]);
//(["Quarter final","Standard","11","N"]);