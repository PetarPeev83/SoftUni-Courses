function hashTag(text) {
    let hashTags = text.split(" ").filter(x => x.startsWith("#")).map(x => x.slice(1, x.length)).filter(x => x.length > 0);
    let toPrint = [];
    for (let current of hashTags) {
        let check = true;
        for (let i = 0; i < current.length; i++) {
            if (current.charCodeAt(i) < 65 || current.charCodeAt(i) > 122 || (current.charCodeAt(i) > 90 && current.charCodeAt(i) < 97)) {
                check = false;
                break;
            }
        }
        if (check) {
            toPrint.push(current)
        }
    }
    console.log(toPrint.join(" \n"));
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');