function specialNumbers(input) {

    let n = Number(input[0])
    let result = ''

    for (let i = 1; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            for (let o = 1; o <= 9; o++) {
                for (let p = 1; p <= 9; p++) {
                    if (n % i === 0 && n % k === 0 && n % o === 0 && n % p === 0) {
                        result += `${i}${k}${o}${p} `
                    }
                }
            }
        }
    }

console.log(result)
}
specialNumbers(["3"])