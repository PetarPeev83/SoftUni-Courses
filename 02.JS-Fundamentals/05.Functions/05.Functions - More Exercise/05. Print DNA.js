function printDNA(lengthOfDNA) {

    let sequence = "ATCGTTAGGG";
    sequence = sequence.split("");

    for (let i = 1; i <= lengthOfDNA; i++) {

        let a = sequence.shift();
        let b = sequence.shift();

        if (i === 1 || i % 4 === 1) {
            console.log(`**${a}${b}**`);
        }
        else if (i === 2 || i % 4 === 2) {
            console.log(`*${a}--${b}*`);
        }
        else if (i === 3 || i % 4 === 3) {
            console.log(`${a}----${b}`);
        }
        else if (i === 4 || i % 4 === 0) {
            console.log(`*${a}--${b}*`);
        }
        sequence.push(a);
        sequence.push(b);
    }
}
printDNA(10);