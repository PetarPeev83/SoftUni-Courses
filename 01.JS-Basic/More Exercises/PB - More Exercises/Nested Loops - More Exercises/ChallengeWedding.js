function challengeWedding(input) {

    let menNum = Number(input[0])
    let womenNum = Number(input[1])
    let tables = Number(input[2])
    let toPrint = ''

    for (let m = 1; m <= menNum; m++) {
        for (let w = 1; w <= womenNum; w++) {
            tables--
            if (tables >= 0) {
                toPrint += `(${m} <-> ${w}) `
            } else { break; }
        }
    }
    console.log(toPrint);
}
challengeWedding(["2", "2", "3"])