function easterTrip(input) {

    let destination = input[0];
    let dates = String(input[1]);
    let nights = Number(input[2]);
    let pricePerNight = 0;

    switch (destination) {
        case "France":
            switch (dates) {
                case "21-23": pricePerNight = 30; break;
                case "24-27": pricePerNight = 35; break;
                case "28-31": pricePerNight = 40; break;
            }break;
        case "Italy":
            switch (dates) {
                case "21-23": pricePerNight = 28; break;
                case "24-27": pricePerNight = 32; break;
                case "28-31": pricePerNight = 39; break;
            }break;
        case "Germany":
            switch (dates) {
                case "21-23": pricePerNight = 32; break;
                case "24-27": pricePerNight = 37; break;
                case "28-31": pricePerNight = 43; break;
            }break;
    }
    console.log(`Easter trip to ${destination} : ${(pricePerNight * nights).toFixed(2)} leva.`);
}
easterTrip(["France","28-31","8"])

//(["Italy","21-23","7"])
//(["Germany", "24-27", "5"])