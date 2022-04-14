function basketballTournament(input) {

    let i = 0;
    let totalGames = 0;
    let win = 0;
    let lost = 0;

    while (input[i] !== "End of tournaments") {
        let currentTournament = input[i];
        i++;
        let currentTournamentMatches = Number(input[i]);
        i++;
        let currentTournamentGames = 0;
        for (let index = 0; index < currentTournamentMatches; index++) {
            totalGames++;
            currentTournamentGames++;
            let desiTeamPoints = Number(input[i]);
            i++;
            let otherTeamPoints = Number(input[i]);
            i++;
            if (desiTeamPoints > otherTeamPoints) {
                win++;
                console.log(`Game ${currentTournamentGames} of tournament ${currentTournament}: win with ${desiTeamPoints - otherTeamPoints} points.`);
            } else {
                lost++;
                console.log(`Game ${currentTournamentGames} of tournament ${currentTournament}: lost with ${otherTeamPoints - desiTeamPoints} points.`);
            }
        }
    }
    console.log(`${(win / totalGames * 100).toFixed(2)}% matches win`);
    console.log(`${(lost / totalGames * 100).toFixed(2)}% matches lost`);
}
basketballTournament//(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
(["Ballers","3","87","63","56","65","75","64","Sharks","4","64","76","65","86","68","99","45","78","End of tournaments"]);