function movieDestination(input) {

    let filmBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                filmBudget -= days * 45000 * 0.7;
            } else if (season === "Summer") {
                filmBudget -= 40000 * days * 0.7;
            } break;
        case "Sofia":
            if (season === "Winter") {
                filmBudget -= days * 17000 * 1.25;
            } else if (season === "Summer") {
                filmBudget -= 12500 * days * 1.25;
            } break;
        case "London":
            if (season === "Winter") {
                filmBudget -= days * 24000;
            } else if (season === "Summer") {
                filmBudget -= 20250 * days;
            } break;
    }
    if (filmBudget >= 0) {
        console.log(`The budget for the movie is enough! We have ${filmBudget.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${Math.abs(filmBudget).toFixed(2)} leva more!`);
    }
}
movieDestination(["400000","Sofia","Winter","20"]);
//(["200000", "London", "Summer", "7"]);