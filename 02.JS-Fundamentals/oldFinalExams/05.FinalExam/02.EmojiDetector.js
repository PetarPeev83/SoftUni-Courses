function emoji(input) {
    let coolThreshold = input[0].match(/[0-9]/g).map(Number).reduce((a, b) => a * b);
    let pattern = /(\*\*|::)(?<emojiGroup>[A-Z][a-z]{2,})\1/g;
    let match = input[0].match(pattern);
    console.log(`Cool threshold: ${coolThreshold}`);
    if (match !== null) {
        console.log(`${match.length} emojis found in the text. The cool ones are:`);
        for (let current of match) {
            let emoji = current.slice(2, -2);
            if (emojiCoolness(emoji) > coolThreshold) {
                console.log(current);
            }
        }
    }
    function emojiCoolness(text) {
        let result = text.split("").map(x => x.charCodeAt(0)).reduce((a, b) => a + b);
        return result;
    }
}
// emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
// emoji(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emoji(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);