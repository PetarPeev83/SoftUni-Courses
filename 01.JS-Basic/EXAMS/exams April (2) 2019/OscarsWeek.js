function oscars(input) {

    let movieName = String(input[0]);
    let saloonType = String(input[1]);
    let ticketsNum = Number(input[2]);
    let ticketPrice = 0;

    switch (movieName) {
        case "A Star Is Born":
            switch (saloonType) {
                case "normal": ticketPrice = 7.50; break;
                case "luxury": ticketPrice = 10.50; break;
                case "ultra luxury": ticketPrice = 13.50; break;
            } break;
        case "Bohemian Rhapsody":
            switch (saloonType) {
                case "normal": ticketPrice = 7.35; break;
                case "luxury": ticketPrice = 9.45; break;
                case "ultra luxury": ticketPrice = 12.75; break;
            } break;
        case "Green Book":
            switch (saloonType) {
                case "normal": ticketPrice = 8.15; break;
                case "luxury": ticketPrice = 10.25; break;
                case "ultra luxury": ticketPrice = 13.25; break;
            } break;
        case "The Favourite":
            switch (saloonType) {
                case "normal": ticketPrice = 8.75; break;
                case "luxury": ticketPrice = 11.55; break;
                case "ultra luxury": ticketPrice = 13.95; break;
            } break;
    }
    console.log(`${movieName} -> ${(ticketPrice * ticketsNum).toFixed(2)} lv.`);
}
oscars(["A Star Is Born",
    "luxury",
    "42"])