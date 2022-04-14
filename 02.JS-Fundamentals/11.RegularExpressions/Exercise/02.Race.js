function race(input) {
    let racerList = {};
    input.shift().split(", ").forEach(racer => racerList[racer] = 0);
    let patternName = /[A-Za-z]/g;
    let patternDistance = /[0-9]/g;
    let currentLine = input.shift();
    while (currentLine !== "end of race") {
        let name = [...currentLine.matchAll(patternName)].join('');
        let currentDistance = [...currentLine.matchAll(patternDistance)].map(Number).reduce((a, b) => a + b);
        if (racerList.hasOwnProperty(name)) {
            racerList[name] += currentDistance;
        }
        currentLine = input.shift();
    }
    let sorted = Object.entries(racerList).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]);