function filmPremiere(input) {

    let movie = input[0];
    let pack = input[1];
    let tickets = Number(input[2]);
    let bill = 0;

    switch (movie) {
        case "John Wick":
            switch (pack) {
                case "Drink": bill = tickets * 12; break;
                case "Popcorn": bill = tickets * 15; break;
                case "Menu": bill = tickets * 19; break;
            }  break;
        case "Star Wars":
            switch (pack) {
                case "Drink": bill = tickets * 18; break;
                case "Popcorn": bill = tickets * 25; break;
                case "Menu": bill = tickets * 30; break;
            } if (tickets >= 4) {
                bill *= 0.7;
            } break;
        case "Jumanji":
            switch (pack) {
                case "Drink": bill = tickets * 9; break;
                case "Popcorn": bill = tickets * 11; break;
                case "Menu": bill = tickets * 14; break;
            } if (tickets === 2) {
                bill *= 0.85;
            } break;
    }
    console.log(`Your bill is ${bill.toFixed(2)} leva.`);
}
filmPremiere(["John Wick", "Drink", "6"]);