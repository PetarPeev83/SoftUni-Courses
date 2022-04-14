function santasHoliday(input) {

    let days = Number(input[0]) - 1
    let roomType = String(input[1])
    let rating = String(input[2])
    let price = 0

    if (days < 10) {
        switch (roomType) {
            case 'room for one person':
                price = 18 * days; break;
            case 'apartment':
                price = (25 * days) * 0.7; break;
            case 'president apartment':
                price = (35 * days) * 0.9; break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (roomType) {
            case 'room for one person':
                price = 18 * days; break;
            case 'apartment':
                price = (25 * days) * 0.65; break;
            case 'president apartment':
                price = (35 * days) * 0.85; break;
        }
    } else {
        switch (roomType) {
            case 'room for one person':
                price = 18 * days; break;
            case 'apartment':
                price = (25 * days) * 0.5; break;
            case 'president apartment':
                price = (35 * days) * 0.8; break;
        }
    }
    if (rating === "positive") {
        price *= 1.25
    } else {
        price *= 0.9
    }
    console.log(price.toFixed(2))
}
santasHoliday(['30', 'president apartment', 'negative'])