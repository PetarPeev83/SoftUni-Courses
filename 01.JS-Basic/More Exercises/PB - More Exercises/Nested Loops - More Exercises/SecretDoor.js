function secretDoor(input) {

    let maxLimitHundreds = Number(input[0])
    let maxLimitTens = Number(input[1])
    let maxLimitOnes = Number(input[2])

    for (let h = 1; h <= maxLimitHundreds; h++) {
        if (h % 2 !== 0) {
            continue;
        }
        for (let t = 2; t <= maxLimitTens && t <= 7; t++) {
            if (t === 6 || t === 4) {
                continue;
            }
            for (let o = 1; o <= maxLimitOnes; o++) {
                if (o % 2 !== 0) {
                    continue;
                }
                console.log(h + " " + t + " " + o);
            }
        }
    }
}
secretDoor(["8", '2', '8'])