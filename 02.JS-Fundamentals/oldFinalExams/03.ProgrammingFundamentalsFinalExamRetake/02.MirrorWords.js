function mirrorWords(text) {
    let pattern = /(#|@)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let result = [];
    let validWordsCounter = 0;
    let match = pattern.exec(text);
    while (match !== null) {
        validWordsCounter++;
        let firstWord = match.groups.first;
        let secondWord = match.groups.second;
        let reversed = match.groups.second.split("").reverse().join('');
        if (firstWord === reversed) {
            result.push(`${firstWord} <=> ${secondWord}`)
        }
        match = pattern.exec(text);
    }
    if (validWordsCounter > 0) {
        console.log(`${validWordsCounter} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    } if (result.length > 0) {
        console.log('The mirror words are:');
        console.log(result.join(", "));
    } else {
        console.log("No mirror words!");
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);