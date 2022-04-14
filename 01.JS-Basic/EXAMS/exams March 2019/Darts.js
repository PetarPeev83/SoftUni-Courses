function darts(input) {

    let playerName = input[0];
    let points = 301;
    let shots = 0;
    let badShots = 0;
    let i = 1;

    while (input[i] !== "Retire") {
        let zone = input[i];
        i++;
        let currentPoints = Number(input[i]);
        switch (zone) {
            case "Single": break;
            case "Double": currentPoints *= 2; break;
            case "Triple": currentPoints *= 3; break;
        }
        if (currentPoints > points) {
            badShots++;
            i++;
            continue;
        } else if (currentPoints < points) {
            points -= currentPoints;
            shots++;
        } else {
            shots++;
            console.log(`${playerName} won the leg with ${shots} shots.`);
            return;
        }
        i++;
    }
    console.log(`${playerName} retired after ${badShots} unsuccessful shots.`);
}
darts//(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);
//(["Stephen Bunting","Triple","20","Triple","20","Triple","20","Triple","20","Triple","20","Triple","20","Double","7","Single","12","Double","1","Single","1"]);
(["Rob Cross","Triple","20","Triple","20","Triple","20","Triple","20","Double","20","Triple","20","Double","5","Triple","10","Double","6","Retire"]);