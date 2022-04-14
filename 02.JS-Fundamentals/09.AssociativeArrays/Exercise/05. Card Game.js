function cardGame(input) {
    let playersList = {};
    let cardPoints = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14, 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    for (let current of input) {
        [player, cards] = current.split(": ");
        cards = cards.split(", ");
        if (Object.keys(playersList).includes(player)) {
            for (let card of cards) {
                if (playersList[player].includes(card)) {
                    continue;
                } else {
                    playersList[player].push(card);
                }
            }
        } else {
            playersList[player] = [...new Set(cards)];
        }
    }
    for (let [key, value] of Object.entries(playersList)) {
        let result = 0;
        for (let card of value) {
            let cardColor = card.slice(-1);
            let cardPower = card.slice(0, - 1);
            cardColor = cardPoints[cardColor];
            if (cardPoints.hasOwnProperty(cardPower)) {
                cardPower = cardPoints[cardPower];
            } else {
                cardPower = Number(cardPower);
            }
            result += cardPower * cardColor;
        }
        playersList[key] = result;
    }
    for (let [key, value] of Object.entries(playersList)) {
        console.log(`${key}: ${value}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);