function triplesOfLatinLetters(letters) {

    let endLetterNum = 97 + Number(letters); //100 пъти ми даде грешка докато не го направих - Number(letters);

    for (let i = 97; i < endLetterNum; i++) {
        for (let j = 97; j < endLetterNum; j++) {
            for (let k = 97; k < endLetterNum; k++) {
                console.log(String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k));
            }
        }
    }
}
triplesOfLatinLetters(3);