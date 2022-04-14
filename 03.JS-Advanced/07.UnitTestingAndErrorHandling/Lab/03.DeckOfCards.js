function deckOfCards(cardsArr) {

    // console.log(cardsArr.map(card => {
    //     let face = card.slice(0, -1);
    //     let suit = card.slice(-1);
    //     return createCard(face, suit);
    // }).join(" "));

    let result = [];

    for (let card of cardsArr) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);
        try {
            result.push(createCard(face, suit));
        } catch (error) {
            console.log('Invalid card: ' + card);
            return;
        }
    }
    console.log(result.join(' '));
    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            "S": '\u2660',
            "H": "\u2665",
            "D": '\u2666',
            "C": "\u2663"
        }
        if (!validFaces.includes(face)) {
            throw new Error('Invalid face: ' + face);
        } if (!Object.keys(validSuits).includes(suit)) {
            throw new Error('Invalid suit: ' + suit);
        }
        return {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
}
deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);