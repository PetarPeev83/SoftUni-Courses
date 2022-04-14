function carNumber(input) {

    let startNum = Number(input[0])
    let stopNum = Number(input[1])
    let result = ''

    for (let i = startNum; i <= stopNum; i++) {
        for (let k = startNum; k <= stopNum; k++) {
            for (let o = startNum; o <= stopNum; o++) {
                for (let p = startNum; p <= stopNum; p++) {
                    if (i % 2 === 0 && p % 2 !== 0) {
                        if (i > p && (k + o) % 2 === 0) {
                            result += `${i}${k}${o}${p} `
                        }
                    } else if (i % 2 !== 0 && p % 2 === 0) {
                        if (i > p && (k + o) % 2 === 0) {
                            result += `${i}${k}${o}${p} `
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
carNumber(["3", "5"])