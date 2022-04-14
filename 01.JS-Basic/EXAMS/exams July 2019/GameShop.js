function gameShop(input) {

    let soldedGames = Number(input[0]);
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= soldedGames; i++) {
        let currentGameName = input[i]

        switch (currentGameName) {
            case "Hearthstone": hearthstone++; break;
            case "Fornite": fornite++; break;
            case "Overwatch": overwatch++; break;
            default: others++; break;
        }
    }
    console.log(`Hearthstone - ${(hearthstone / soldedGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite / soldedGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch / soldedGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / soldedGames * 100).toFixed(2)}%`);
}
gameShop(["3","Hearthstone","Diablo 2","Star Craft 2"])

//(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);