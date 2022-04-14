function counterStrike(input) {
    let energy = Number(input.shift());
    let wins = 0;
    while (input[wins] !== 'End of battle') {
        energy -= Number(input[wins]);
        if (energy < 0) {
            return console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy + Number(input[wins])} energy`);
        }
        wins++;
        if (wins % 3 === 0) {
            energy += wins;
        }
    }
    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
// counterStrike(['200', '54', '14', '28', '13', 'End of battle']);