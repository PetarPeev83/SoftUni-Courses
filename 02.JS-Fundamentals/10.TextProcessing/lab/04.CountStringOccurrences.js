function count(text, searchFor) {
    // let splittedText = text.split(" ");
    // let counter = 0;
    // for (let i = 0; i < text.length; i++) {
    //     let element = splittedText[i];
    //     if (element === searchFor) {
    //         counter++;
    //     }
    // }
    let counter = text.split(" ").filter(x => x === searchFor);
    console.log(counter.length);
}
count("This is a word and it also is a sentence", "is");