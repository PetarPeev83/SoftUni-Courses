function hardWord(input) {
    let splittedText = input[0].split(" ");
    for (let i = 0; i < splittedText.length; i++) {
        let current = splittedText[i]
        if (current.includes("_")) {
            for (let word of input[1]) {
                if (!current.startsWith('_') && current.length === word.length - 1) {
                    let toAdd = current.slice(0, 1);
                    current = current.slice(1, current.length);
                    splittedText[i] = toadd + word;
                } else if (!current.endsWith('_') && current.length - 1 === word.length) {
                    let toAdd = current.slice(-1);
                    current = current.slice(0, -1);
                    splittedText[i] = word + toAdd;
                } else if (current.length === word.length) {
                    splittedText[i] = word;
                    break;
                }
            }
        }
    }
    console.log(splittedText.join(" "));
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);