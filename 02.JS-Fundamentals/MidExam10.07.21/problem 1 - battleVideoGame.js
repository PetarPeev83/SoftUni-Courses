function battle(input) {
    let neededExperience = Number(input.shift());
    let battlesNum = Number(input.shift());
    let battles = 0;
    for (let i = 1; i <= battlesNum; i++) {
        let currentBattleExp = Number(input[i - 1]);
        if (i % 3 === 0 && i > 0) {
            currentBattleExp *= 1.15;
        }
        if (i % 5 === 0 && i > 0) {
            currentBattleExp *= 0.9;
        }
        if (i % 15 === 0 && i > 0) {
            currentBattleExp *= 1.05;
        }
        neededExperience -= currentBattleExp;
        battles++;
        if (neededExperience <= 0) {
            return console.log(`Player successfully collected his needed experience for ${battles} battles.`);
        }
    }
    console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`);
}
// battle([500, 5, 50, 100, 200, 100, 30]);
battle([500, 5, 50, 100, 200, 100, 20]);
// battle([400, 5, 50, 100, 200, 100, 20]);