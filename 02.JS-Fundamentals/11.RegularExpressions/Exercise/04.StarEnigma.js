function starEnigma(input) {
    let messages = Number(input.shift());
    let attackList = [];
    let destroyedList = [];
    for (let i = 0; i < messages; i++) {
        let patternStar = /[SsTtAaRr]/g;
        let key = input[i].match(patternStar);
        if (key === null) {
            key = 0;
        } else {
            key = input[i].match(patternStar).length;
        }
        let text = substract(input[i], key);
        let pattern = /@(?<namePlanet>[A-Za-z]+)[^\@\-\!\:]*?:([^\@\-\!\:0-9]+)?(?<population>[0-9]+)([^\@\-\!\:0-9]*?)!(?<attack>[AD])!([^\@\-\!\:]+)?->([^\@\-\!\:0-9]?)(?<soldiers>[0-9]+)/;
        if (pattern.test(text)) {
            let match = pattern.exec(text);
            if (match.groups.attack === "A") {
                attackList.push(match);
            } else {
                destroyedList.push(match);
            }
        } else {
            continue;
        }
    }
    console.log(`Attacked planets: ${attackList.length}`);
    if (attackList.length > 0) {
        Object.values(attackList).sort((a, b) => a.groups.namePlanet.localeCompare(b.groups.namePlanet)).forEach(element => console.log(`-> ${element.groups.namePlanet}`));
    }
    console.log(`Destroyed planets: ${destroyedList.length}`);
    if (destroyedList.length > 0) {
        Object.values(destroyedList).sort((a, b) => a.groups.namePlanet.localeCompare(b.groups.namePlanet)).forEach(element => console.log(`-> ${element.groups.namePlanet}`));
    }
    function substract(text, num) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) - num);
        }
        return result;
    }
}
// starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
// starEnigma(["3", "tt(''DGsvywgerx>6444444444%H%1B9444", "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma(["2", "CDoghudd4=63333$D$0D53333", "EHfynhf?8555&I&2C9555SR"]);
