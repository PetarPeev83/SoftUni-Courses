function footballTournament(input) {

    let teamName = input.shift();
    let matchesPlayed = Number(input.shift());
    let teamPoints = 0;
    let w = 0;
    let d = 0;
    let l = 0;

    if (matchesPlayed <= 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
        return;
    }
    for (let i = 0; i < matchesPlayed; i++) {

        let matchResult = input.shift();

        switch (matchResult) {
            case "W": teamPoints += 3;
                w++; break;
            case "D": teamPoints += 1;
                d++; break;
            case "L":
                l++; break;
        }
    }
    console.log(`${teamName} has won ${teamPoints} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${w}`);
    console.log(`## D: ${d}`);
    console.log(`## L: ${l}`);
    console.log(`Win rate: ${(w / matchesPlayed * 100).toFixed(2)}%`);
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);

//(["Barcelona","7","W","D","L","L","W","W","D"]);
//(["Chelsea","0"]);