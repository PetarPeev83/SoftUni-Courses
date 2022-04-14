function barcodeGenerator(input) {

    let start = String(input[0])
    let end = String(input[1])
    let toPrint = ''

    for (let i = Number(start[0]); i <= Number(end[0]); i++) {
        if (i % 2 === 0) {
            continue;
        }
        for (let j = Number(start[1]); j <= Number(end[1]); j++) {
            if (j % 2 === 0) {
                continue;
            }
            for (let q = Number(start[2]); q <= Number(end[2]); q++) {
                if (q % 2 === 0) {
                    continue;
                }
                for (let p = Number(start[3]); p <= Number(end[3]); p++) {
                    if (p % 2 === 0) {
                        continue;
                    } else { toPrint += (" " + i + j + q + p) }
                }
            }
        }
    }
    console.log(toPrint);
}
barcodeGenerator(["2345", "6789"])