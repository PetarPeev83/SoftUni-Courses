function tennisRanklist(input) {

    let tournamentsNumber = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = 0;
    let tournamentsWin = 0;
    let index = 2;

    while (tournamentsNumber > index - 2) {
        let currentPlace = input[index];
        switch (currentPlace) {
            case "W": points += 2000; tournamentsWin++; break;
            case "F": points += 1200; break;
            case "SF": points += 720; break;
        }
        index++;
    }
    console.log(`Final points: ${points + startingPoints}`);
    console.log(`Average points: ${Math.floor(points / tournamentsNumber)}`);
    console.log(`${(tournamentsWin / tournamentsNumber * 100).toFixed(2)}% `);
}
tennisRanklist//(["5", "1400", "F", "SF", "W", "W", "SF"]);

(["4","750","SF","W","SF","W"]);