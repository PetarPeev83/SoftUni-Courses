function tseamAccount(input) {

    let ownedGames = String(input[0]).split(" ");
    let index = 1;
    let currentArr = [];

    while (currentArr[0] !== 'Play!') {
        currentArr = String(input[index]).split(" ");
        let comand = currentArr[0];
        let currentGame = currentArr[1];

        if (comand === "Install") {
            if (ownedGames.includes(currentGame)) {
                break;
            } else {
                ownedGames.push(currentGame);
                index++;
                continue;
            }
        }
        for (let i = 0; i < ownedGames.length; i++) {
            let gameCheck = ownedGames[i];

            if (comand === "Uninstall") {
                if (gameCheck === currentGame) {
                    ownedGames.splice(i, 1);
                    break;
                }
            } else if (comand === "Update") {
                if (gameCheck === currentGame) {
                    ownedGames.splice(i, 1);
                    ownedGames.push(gameCheck);
                    break;
                }
            } else if (comand === "Expansion") {
                let expansion = String(currentGame).split("-");
                if (gameCheck === expansion[0]) {
                    ownedGames.splice(i + 1, 0, `${gameCheck}:${expansion[1]}`);
                    break;
                }
            }
        }
        index++;
    }
    console.log(ownedGames.join(" "));
}
// tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
// tseamAccount(['CS WoW Diablo','Expansion CS-Go', 'Install LoL', 'Uninstall WoW', 'Update Diablo',  'Play!']);