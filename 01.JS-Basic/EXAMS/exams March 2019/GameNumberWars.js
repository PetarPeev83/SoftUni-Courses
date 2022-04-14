function gameNumberWars(input) {

    let firstPlayerName = input[0];
    let secondPlayerName = input[1];
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let i = 2;

    while (input[i] !== "End of game") {

        let firstPlayerCard = Number(input[i]);
        i++;
        let secondPlayerCard = Number(input[i]);

        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += (firstPlayerCard - secondPlayerCard);
        } else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoints += (secondPlayerCard - firstPlayerCard);
        } else {
            console.log("Number wars!");
            firstPlayerCard = Number(input[i + 1]);
            secondPlayerCard = Number(input[i + 2]);
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`);
            } else {
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
            }
            return;
        }
        i++;
    }
    console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
    console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
}
gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
//(["Elena","Simeon","6","3","2","5","8","9","End of game"]);
//(["Aleks","Georgi","4","5","3","2","4","3","4","4","5","2"]);