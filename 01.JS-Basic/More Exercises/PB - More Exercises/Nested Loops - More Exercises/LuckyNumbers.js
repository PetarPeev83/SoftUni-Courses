function luckyNumbers(input) {

    let n = Number(input[0])
    let luckyNum = ''

    for (let i = 1; i < n && i <= 9; i++) {
        for (let k = 1; k < n && k <= 9; k++) {
            for (let o = 1; o < n && o <= 9; o++) {
                for (let p = 1; p < n && p <= 9; p++) {
                    if ((i + k) === (o + p) && n % (i + k) === 0) {
                        luckyNum += `${i}${k}${o}${p} `
                    }
                }
            }
        }
    }
    console.log(luckyNum);
}
luckyNumbers(['24'])