function skiTrip(input) {

    let days = Number(input[0])
    let room = input[1]
    let rating = input[2]

    let nights = days - 1

    let price = 0.0

    if (days < 10) {

        switch (room) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = (nights * 25) * 0.7; break;
            case "president apartment": price = (nights * 35) * 0.9; break;
        }
    }
    else if (days >= 10 && days <= 15) {
        switch (room) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = (nights * 25) * 0.65; break;
            case "president apartment": price = (nights * 35) * 0.85; break;
        }
    }
    else if (days > 15) {
        switch (room) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = (nights * 25) * 0.5; break;
            case "president apartment": price = (nights * 35) * 0.8; break;
        }
    }
    if (rating === "positive") {
        console.log((price * 1.25).toFixed(2))
    }
    else { console.log((price * 0.9).toFixed(2)) }

}
skiTrip(["12",
"room for one person",
"positive"])


